'use client'
import { useState, useEffect } from 'react'

export default function Timer({ difficulty }) {   // ← receives difficulty as prop

    // function to get starting seconds based on difficulty
    const getTime = (difficulty) => {
        if (difficulty === 'Easy') return 10 * 60
        if (difficulty === 'Medium') return 20 * 60
        if (difficulty === 'Hard') return 30 * 60
    }

    // starts at the correct time for this difficulty
    const [seconds, setSeconds] = useState(getTime(difficulty))

    // counts down every second
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1)   // prev = current value of seconds
        }, 1000)                              // 1000ms = 1 second
        return () => clearInterval(interval)  // cleanup when component removed
    }, [])

    // converts raw seconds to MM:SS format
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

    // true when under 2 minutes (120 seconds)
    const isRed = seconds < 120

    return (
        <p className={`font-mono font-bold text-xl ${isRed ? 'text-red-500' : 'text-black'}`}>
            {formatTime(seconds)}
        </p>
    )
}