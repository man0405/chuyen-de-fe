import React from 'react'

interface ThumbProps {
  selected: boolean
  index: number
  onClick: () => void
  image: string // Add image property
}

export const Thumb: React.FC<ThumbProps> = (props) => {
  const { selected, index, onClick, image } = props

  return (
    <div
      className={`embla-thumbs__slide${
        selected ? ' embla-thumbs__slide--selected' : ''
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <img
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className="embla-thumbs__slide__img"
        />
      </button>
    </div>
  )
}
