'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { 
  ArrowUpRight, 
  Briefcase, 
  Zap, 
  Lightbulb, 
  Mail, 
  Linkedin, 
  Rocket,
  Sun,
  Moon,
  Terminal,
  Gem,
  Gauge
} from 'lucide-react'

// Logo data for the carousel - using logo.dev
// Using domains that logo.dev is most likely to have good coverage for
const platformLogos = [
  // Enterprise/Carriers
  { name: 'UPS', domain: 'ups.com' },
  { name: 'FedEx', domain: 'fedex.com' },
  { name: 'Brinks', domain: 'brinks.com' },
  { name: 'Malca-Amit', domain: 'malca-amit.com' },
  // Retail/Jewelry (using parent company and well-known brands)
  { name: 'Signet Jewelers', domain: 'signetjewelers.com' },
  { name: 'Blue Nile', domain: 'bluenile.com' },
  { name: 'Jared', domain: 'jared.com' },
  { name: 'James Allen', domain: 'jamesallen.com' },
  { name: 'Banter', domain: 'banterbyjared.com' },
  // Analytics & Tech Platforms
  { name: 'Alteryx', domain: 'alteryx.com' },
  { name: 'Tableau', domain: 'tableau.com' },
  { name: 'Salesforce', domain: 'salesforce.com' },
  { name: 'Cloudflare', domain: 'cloudflare.com' },
  { name: 'Vercel', domain: 'vercel.com' },
  { name: 'Supabase', domain: 'supabase.com' },
  { name: 'Stripe', domain: 'stripe.com' },
  { name: 'GitHub', domain: 'github.com' },
  { name: 'Snowflake', domain: 'snowflake.com' },
]

const LOGO_DEV_TOKEN = 'pk_XB1INLOERRqvGMtByWY7ig'

// Logo Carousel Component
function LogoCarousel({ darkMode }: { darkMode: boolean }) {
  // Use theme parameter based on mode, and mix-blend-mode to hide backgrounds
  const theme = darkMode ? 'dark' : 'light'
  
  return (
    <div className="relative py-6">
      {/* Scrolling container */}
      <div className="overflow-hidden">
        <div 
          className="flex items-center animate-scroll"
          style={{ width: 'max-content' }}
        >
          {/* First set of logos */}
          {platformLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className={`flex-shrink-0 px-10 flex items-center justify-center transition-all duration-300 ${
                darkMode ? 'opacity-75 hover:opacity-100' : 'opacity-75 hover:opacity-100'
              }`}
              title={logo.name}
            >
              <img
                src={`https://img.logo.dev/${logo.domain}?token=${LOGO_DEV_TOKEN}&format=png&theme=${theme}&size=128`}
                alt={logo.name}
                className="h-12 w-auto object-contain"
                style={{ 
                  mixBlendMode: darkMode ? 'lighten' : 'darken'
                }}
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {platformLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className={`flex-shrink-0 px-10 flex items-center justify-center transition-all duration-300 ${
                darkMode ? 'opacity-75 hover:opacity-100' : 'opacity-75 hover:opacity-100'
              }`}
              title={logo.name}
            >
              <img
                src={`https://img.logo.dev/${logo.domain}?token=${LOGO_DEV_TOKEN}&format=png&theme=${theme}&size=128`}
                alt={logo.name}
                className="h-12 w-auto object-contain"
                style={{ 
                  mixBlendMode: darkMode ? 'lighten' : 'darken'
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Logo.dev Attribution */}
      <div className="flex justify-center mt-6">
        <a 
          href="https://logo.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-xs transition-opacity ${
            darkMode ? 'text-white/25 hover:text-white/40' : 'text-gray-400 hover:text-gray-500'
          }`}
        >
          Logos by Logo.dev
        </a>
      </div>
    </div>
  )
}

// Interactive geometric background component
function GeometricBackground({ darkMode }: { darkMode: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Array<{
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
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const particleCount = 25
    particlesRef.current = []
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.offsetWidth
      const y = Math.random() * canvas.offsetHeight
      particlesRef.current.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 20 + 10,
        type: ['circle', 'line', 'hexagon', 'triangle'][Math.floor(Math.random() * 4)] as 'circle' | 'line' | 'hexagon' | 'triangle',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.3 + 0.1,
        idleOffsetX: 0,
        idleOffsetY: 0,
        idleSpeedX: (Math.random() - 0.5) * 0.02 + 0.015,
        idleSpeedY: (Math.random() - 0.5) * 0.02 + 0.015,
        idlePhase: Math.random() * Math.PI * 2,
        floatRadiusX: Math.random() * 20 + 15,
        floatRadiusY: Math.random() * 20 + 15
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
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

    const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
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

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      time += 0.016

      const baseColor = darkMode ? '255, 255, 255' : '100, 100, 120'

      particlesRef.current.forEach((particle) => {
        particle.idleOffsetX = Math.sin(time * particle.idleSpeedX * 50 + particle.idlePhase) * particle.floatRadiusX
        particle.idleOffsetY = Math.cos(time * particle.idleSpeedY * 50 + particle.idlePhase * 1.3) * particle.floatRadiusY

        const targetX = particle.baseX + particle.idleOffsetX
        const targetY = particle.baseY + particle.idleOffsetY
        
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          particle.x = targetX - Math.cos(angle) * force * 30
          particle.y = targetY - Math.sin(angle) * force * 30
        } else {
          particle.x += (targetX - particle.x) * 0.08
          particle.y += (targetY - particle.y) * 0.08
        }

        particle.rotation += particle.rotationSpeed

        ctx.strokeStyle = `rgba(${baseColor}, ${particle.opacity})`
        ctx.lineWidth = 1

        switch (particle.type) {
          case 'circle':
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
            ctx.stroke()
            break
          case 'line':
            ctx.beginPath()
            const lineX = Math.cos(particle.rotation) * particle.size
            const lineY = Math.sin(particle.rotation) * particle.size
            ctx.moveTo(particle.x - lineX / 2, particle.y - lineY / 2)
            ctx.lineTo(particle.x + lineX / 2, particle.y + lineY / 2)
            ctx.stroke()
            break
          case 'hexagon':
            drawHexagon(ctx, particle.x, particle.y, particle.size / 2, particle.rotation)
            break
          case 'triangle':
            drawTriangle(ctx, particle.x, particle.y, particle.size / 2, particle.rotation)
            break
        }
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [darkMode])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.6 }}
    />
  )
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      setDarkMode(saved === 'true')
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          darkMode 
            ? 'glass text-white/70 hover:text-white hover:bg-white/10' 
            : 'bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white shadow-lg border border-gray-200'
        }`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className={`rounded-full px-8 py-3 flex items-center gap-8 transition-all duration-300 ${
          darkMode ? 'nav-pill' : 'bg-white/80 border border-gray-200 shadow-lg'
        }`}>
          <a href="#mission" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>Mission</a>
          <a href="#journey" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>Journey</a>
          <a href="#turblu" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>Turblu</a>
          <a href="#contact" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>Contact</a>
        </div>
      </nav>

      {/* Hero Section - Name Only - With Interactive Background */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 pt-24 relative overflow-hidden">
        {/* Interactive Geometric Background */}
        <GeometricBackground darkMode={darkMode} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`flex items-center justify-center gap-2 mb-4 ${
            darkMode ? 'text-white/50' : 'text-gray-500'
          }`}>
            <Terminal className="w-4 h-4" />
            <p className="text-sm tracking-widest uppercase">Tech Founder & CEO</p>
          </div>
          <h1 className={`text-5xl md:text-7xl font-semibold tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Christopher Estep
          </h1>
        </div>
      </section>

      {/* Mission Section - With Profile Photo */}
      <section id="mission" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-12 md:p-16 transition-all duration-300 ${
            darkMode ? 'glass-card' : 'bg-white/70 border border-gray-200 shadow-xl'
          }`}>
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ${
                  darkMode ? 'ring-2 ring-white/10' : 'ring-2 ring-gray-200'
                }`}>
                  <Image
                    src="/images/headshot.jpg"
                    alt="Christopher Estep"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 256px"
                    priority
                  />
                </div>
              </div>
              
              {/* Mission Text */}
              <div className="flex-1 text-center md:text-left">
                <p className={`text-sm tracking-widest uppercase mb-4 ${
                  darkMode ? 'text-white/50' : 'text-gray-500'
                }`}>My Mission</p>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  To build technology that accelerates human potential and creates lasting impact.
                </h2>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-white/60' : 'text-gray-600'
                }`}>
                  I believe the best companies are built at the intersection of passion and purpose. 
                  Every venture I pursue is driven by this conviction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Career Timeline */}
      <section id="journey" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>The Journey So Far</h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? 'text-white/50' : 'text-gray-500'
          }`}>
            Focused on technology, innovation, and leadership.
          </p>

          <div className="space-y-6">
            {/* Turblu - Current */}
            <a 
              href="https://www.turblu.com" 
              target="_blank" 
              rel="noopener noreferrer"
              id="turblu" 
              className={`block rounded-2xl p-8 md:p-10 transition-all duration-300 turblu-gradient-border cursor-pointer ${
                darkMode ? 'glass-card hover:bg-white/[0.06]' : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-turblu-gradient flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      <span className="turblu-gradient-text">Turblu</span>
                    </h3>
                    <span className="bg-turblu-gradient text-white text-xs px-3 py-1 rounded-full font-medium">
                      Current
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>
                    Founder & CEO
                  </p>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    Building the future at Turblu. Transforming bold ideas at the intersection of motorsports and tech.
                  </p>
                </div>
                <div className="bg-turblu-gradient w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </a>

            {/* Signet Jewelers - Current */}
            <div className={`rounded-2xl p-8 md:p-10 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  darkMode ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <Gem className={`w-8 h-8 ${darkMode ? 'text-white/70' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Signet Jewelers
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      darkMode ? 'bg-white/10 text-white/70' : 'bg-gray-200 text-gray-600'
                    }`}>
                      Current
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>
                    Supply Chain Leadership
                  </p>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    Working closely with senior leadership and C-suite on strategic supply chain initiatives at this multi-billion dollar retailer. 
                    Achieved significant operational improvements, including halving transit loss, saving millions annually. 
                  </p>
                </div>
              </div>
            </div>

            {/* Palmetto Auto Club */}
            <div className={`rounded-2xl p-8 md:p-10 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  darkMode ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <Gauge className={`w-8 h-8 ${darkMode ? 'text-white/70' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Palmetto Auto Club
                  </h3>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>
                    Founder
                  </p>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    Founded in 2021 to connect East Coast car enthusiasts through premium rallies, curated events, and philanthropic initiatives. 
                    Built an upscale community experience for automotive passion and giving back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>What I Bring</h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? 'text-white/50' : 'text-gray-500'
          }`}>
            A blend of vision, technical expertise, and leadership
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Founder</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Identifying opportunities and building companies that solve real problems. From zero to one, repeatedly.
              </p>
            </div>

            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Operations & Analytics</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Turning data into millions of dollars through advanced analytics like Alteryx and process optimization. Building efficient systems that scale with the business.
              </p>
            </div>

            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Leader</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Building and scaling teams that ship exceptional products. Culture-first, results-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className={`text-center text-sm tracking-widest uppercase mb-2 ${
            darkMode ? 'text-white/40' : 'text-gray-400'
          }`}>
            Tools & Platforms I've Scaled
          </p>
          <LogoCarousel darkMode={darkMode} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`rounded-3xl p-12 md:p-16 transition-all duration-300 ${
            darkMode ? 'glass-card' : 'bg-white/70 border border-gray-200 shadow-xl'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Let&apos;s Connect</h2>
            <p className={`mb-10 max-w-xl mx-auto ${
              darkMode ? 'text-white/50' : 'text-gray-500'
            }`}>
              Always interested in hearing about new opportunities, collaborations, or just a good conversation about tech and motorsports.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a 
                href="mailto:ChristopherE710@gmail.com" 
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  darkMode 
                    ? 'glass glass-card-hover text-white/80 hover:text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/christopher-estep-8b736312a/" 
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  darkMode 
                    ? 'glass glass-card-hover text-white/80 hover:text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}