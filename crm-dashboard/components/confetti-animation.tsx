'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  rotation: number
  speedX: number
  speedY: number
  speedRotation: number
  color: string
  width: number
  height: number
  opacity: number
}

export function ConfettiAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  const createParticle = (x: number): Particle => {
    // Vibrant colors
    const colors = [
      '#FF3366', // Vibrant Pink
      '#FF9500', // Bright Orange
      '#33E6CC', // Turquoise
      '#66FF99', // Spring Green
      '#FF66FF', // Magenta
      '#FFD700'  // Gold
    ]
    
    // Random initial position and movement
    const angle = Math.random() * Math.PI / 2 + Math.PI / 4 // 45 to 135 degrees
    const speed = Math.random() * 3 + 2 // Slower speed

    return {
      x,
      y: -20, // Start above the viewport
      rotation: Math.random() * 360,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      speedRotation: (Math.random() - 0.5) * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * 4 + 2,  // Smaller width (2-6px)
      height: Math.random() * 6 + 8,  // Smaller height (8-14px)
      opacity: 1
    }
  }

  const startAnimation = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear existing particles
    particles.current = []

    // Create initial particles spread across the top
    for (let i = 0; i < 150; i++) {
      const x = Math.random() * canvas.width
      particles.current.push(createParticle(x))
    }

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle, index) => {
        // Update position
        particle.speedY += 0.1 // Gentle gravity
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.speedRotation
        
        // Add subtle wave motion
        particle.x += Math.sin(particle.y * 0.02) * 0.3

        // Draw particle
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate((particle.rotation * Math.PI) / 180)
        ctx.globalAlpha = particle.opacity
        
        // Create gradient for each ribbon
        const gradient = ctx.createLinearGradient(0, -particle.height/2, 0, particle.height/2)
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(1, shadeColor(particle.color, -20))
        ctx.fillStyle = gradient

        // Draw ribbon shape
        ctx.beginPath()
        ctx.moveTo(-particle.width/2, -particle.height/2)
        ctx.lineTo(particle.width/2, -particle.height/2)
        ctx.quadraticCurveTo(particle.width/2 + 1, 0, particle.width/2, particle.height/2)
        ctx.lineTo(-particle.width/2, particle.height/2)
        ctx.quadraticCurveTo(-particle.width/2 - 1, 0, -particle.width/2, -particle.height/2)
        ctx.fill()
        ctx.restore()

        // Remove particles that are off screen
        if (particle.y > canvas.height + 20) {
          particles.current.splice(index, 1)
        }
      })

      // Add new particles occasionally at the top
      if (particles.current.length < 50 && Math.random() < 0.1) {
        const x = Math.random() * canvas.width
        particles.current.push(createParticle(x))
      }

      // Continue animation if there are particles
      if (particles.current.length > 0) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animate()
  }

  // Helper function to darken colors for gradient
  const shadeColor = (color: string, percent: number) => {
    const num = parseInt(color.replace('#', ''), 16)
    const amt = Math.round(2.55 * percent)
    const R = (num >> 16) + amt
    const G = (num >> 8 & 0x00FF) + amt
    const B = (num & 0x0000FF) + amt
    return `#${(0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1)}`
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Expose the startAnimation method to the canvas element
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.startConfetti = startAnimation
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  )
}

