'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  type: 'circle' | 'line' | 'hexagon' | 'triangle'
  rotation: number
  rotationSpeed: number
  opacity: number
  idleOffsetX: number
  idleOffsetY: number
  idleSpeedX: number
  idleSpeedY: number
  idlePhase: number
  floatRadiusX: number
  floatRadiusY: number
}

const PARTICLE_COUNT = 25
const MOUSE_RADIUS = 150
const SHAPE_TYPES: Particle['type'][] = ['circle', 'line', 'hexagon', 'triangle']

function createParticle(width: number, height: number): Particle {
  const x = Math.random() * width
  const y = Math.random() * height
  return {
    x,
    y,
    baseX: x,
    baseY: y,
    size: Math.random() * 20 + 10,
    type: SHAPE_TYPES[Math.floor(Math.random() * 4)],
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.03,
    opacity: Math.random() * 0.3 + 0.1,
    idleOffsetX: 0,
    idleOffsetY: 0,
    idleSpeedX: (Math.random() - 0.5) * 0.02 + 0.015,
    idleSpeedY: (Math.random() - 0.5) * 0.02 + 0.015,
    idlePhase: Math.random() * Math.PI * 2,
    floatRadiusX: Math.random() * 20 + 15,
    floatRadiusY: Math.random() * 20 + 15,
  }
}

function drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
  ctx.beginPath()
  for (let i = 0; i < 6; i++) {
    const angle = rotation + (Math.PI / 3) * i
    const px = x + size * Math.cos(angle)
    const py = y + size * Math.sin(angle)
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()
  ctx.stroke()
}

function drawTriangle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
  ctx.beginPath()
  for (let i = 0; i < 3; i++) {
    const angle = rotation + (Math.PI * 2 / 3) * i - Math.PI / 2
    const px = x + size * Math.cos(angle)
    const py = y + size * Math.sin(angle)
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()
  ctx.stroke()
}

function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  ctx.strokeStyle = `rgba(255, 255, 255, ${particle.opacity})`
  ctx.lineWidth = 1

  switch (particle.type) {
    case 'circle':
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
      ctx.stroke()
      break
    case 'line': {
      const lineX = Math.cos(particle.rotation) * particle.size
      const lineY = Math.sin(particle.rotation) * particle.size
      ctx.beginPath()
      ctx.moveTo(particle.x - lineX / 2, particle.y - lineY / 2)
      ctx.lineTo(particle.x + lineX / 2, particle.y + lineY / 2)
      ctx.stroke()
      break
    }
    case 'hexagon':
      drawHexagon(ctx, particle.x, particle.y, particle.size / 2, particle.rotation)
      break
    case 'triangle':
      drawTriangle(ctx, particle.x, particle.y, particle.size / 2, particle.rotation)
      break
  }
}

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])
  const visibleRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Pause animation when canvas scrolls out of view
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting },
      { threshold: 0 }
    )
    visibilityObserver.observe(canvas)

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.offsetWidth, canvas.offsetHeight)
    )

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    let time = 0
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      if (!visibleRef.current) return

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      time += 0.016

      particlesRef.current.forEach((particle) => {
        particle.idleOffsetX = Math.sin(time * particle.idleSpeedX * 50 + particle.idlePhase) * particle.floatRadiusX
        particle.idleOffsetY = Math.cos(time * particle.idleSpeedY * 50 + particle.idlePhase * 1.3) * particle.floatRadiusY

        const targetX = particle.baseX + particle.idleOffsetX
        const targetY = particle.baseY + particle.idleOffsetY

        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS
          const angle = Math.atan2(dy, dx)
          particle.x = targetX - Math.cos(angle) * force * 30
          particle.y = targetY - Math.sin(angle) * force * 30
        } else {
          particle.x += (targetX - particle.x) * 0.08
          particle.y += (targetY - particle.y) * 0.08
        }

        particle.rotation += particle.rotationSpeed
        drawParticle(ctx, particle)
      })
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
      visibilityObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.6 }}
    />
  )
}
