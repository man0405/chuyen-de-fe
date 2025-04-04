import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import type { UseEmblaCarouselType } from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

interface EmblaCarouselProps {
  slides: { src: string; alt: string }[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev()
  }, [emblaMainApi])

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext()
  }, [emblaMainApi])

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)

    return () => {
      emblaMainApi.off('select', onSelect)
      emblaMainApi.off('reInit', onSelect)
    }
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport-container">
        <button
          className="embla__button embla__button--prev"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="embla__slide__img"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="embla__button embla__button--next"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                image={slide.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
