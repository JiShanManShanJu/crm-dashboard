'use client'

import { useEffect, useRef } from 'react'

export function FluidBackground() {
  const blobsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blobs = blobsRef.current?.children
    if (!blobs) return

    Array.from(blobs).forEach((blob) => {
      const x = Math.random() * 80 - 40
      const y = Math.random() * 80 - 40
      const scale = 0.9 + Math.random() * 0.3

      const keyframes = {
        transform: [
          `translate(${x}%, ${y}%) scale(${scale})`,
          `translate(${x + 40}%, ${y - 30}%) scale(${scale * 1.2})`,
          `translate(${x - 30}%, ${y + 40}%) scale(${scale * 0.8})`,
          `translate(${x}%, ${y}%) scale(${scale})`
        ]
      }

      const animation = blob.animate(keyframes, {
        duration: 15000 + Math.random() * 5000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      })

      animation.startTime = Math.random() * -5000
    })
  }, [])

  return (
    <>
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -16"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Base gradient background - updated to orange and light blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-orange-50/40 to-sky-100/50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Moving blobs container */}
      <div 
        ref={blobsRef}
        className="absolute inset-0 overflow-hidden"
        style={{ 
          filter: 'url(#goo)',
          transform: 'translateZ(0)',
        }}
      >
        {/* Warm gradient blobs - keeping the existing warm colors */}
        <div className="absolute w-[500px] h-[500px] -left-[10%] top-[20%] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-r from-amber-400/15 to-orange-400/15 dark:from-amber-600/10 dark:to-orange-600/10" />
        
        <div className="absolute w-[450px] h-[450px] left-[40%] -top-[10%] rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-gradient-to-r from-orange-400/15 to-rose-400/15 dark:from-orange-600/10 dark:to-rose-600/10" />
        
        <div className="absolute w-[550px] h-[550px] right-[5%] top-[30%] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-gradient-to-r from-rose-400/15 to-pink-400/15 dark:from-rose-600/10 dark:to-pink-600/10" />
        
        <div className="absolute w-[480px] h-[480px] left-[25%] bottom-[10%] rounded-[40%_60%_60%_40%/60%_30%_70%_40%] bg-gradient-to-r from-pink-400/15 to-red-400/15 dark:from-pink-600/10 dark:to-red-600/10" />

        <div className="absolute w-[400px] h-[400px] left-[60%] top-[40%] rounded-[40%_60%_60%_40%/60%_30%_70%_40%] bg-gradient-to-r from-yellow-400/15 to-amber-400/15 dark:from-yellow-600/10 dark:to-amber-600/10" />
        
        <div className="absolute w-[350px] h-[350px] left-[10%] top-[60%] rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-gradient-to-r from-red-400/15 to-orange-400/15 dark:from-red-600/10 dark:to-orange-600/10" />
      </div>

      {/* Very subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/2 to-white/0 dark:from-black/0 dark:via-black/2 dark:to-black/0" />
    </>
  )
}

