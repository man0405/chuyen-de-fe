"use client"
import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface StatsCounterProps {
    value: number
    label: string
    suffix?: string
    duration?: number
}

export default function StatsCounter({ value, label, suffix = "", duration = 2000 }: StatsCounterProps) {
    const [count, setCount] = useState(0)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const countingDone = useRef(false)

    useEffect(() => {
        if (inView && !countingDone.current) {
            let start = 0
            const increment = value / (duration / 16)
            const timer = setInterval(() => {
                start += increment
                if (start >= value) {
                    setCount(value)
                    countingDone.current = true
                    clearInterval(timer)
                } else {
                    setCount(start)
                }
            }, 16)

            return () => clearInterval(timer)
        }
    }, [inView, value, duration])

    return (
        <div ref={ref} className="text-center">
            <h3 className="text-4xl font-bold mb-2 text-primary">
                {inView ? count.toFixed(1) : "0.0"}
                {suffix}
            </h3>
            <p className="text-muted-foreground">{label}</p>
        </div>
    )
}

