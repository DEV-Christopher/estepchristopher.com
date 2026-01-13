'use client'

import { useState, useEffect } from 'react'
import { 
  ArrowUpRight, 
  Briefcase, 
  Code2, 
  Lightbulb, 
  Mail, 
  Linkedin, 
  Rocket,
  Sun,
  Moon,
  Terminal,
  Gem,
  Car
} from 'lucide-react'

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

      {/* Hero Section - Name Only */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
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

      {/* Mission Section - With Photo Placeholder */}
      <section id="mission" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-12 md:p-16 transition-all duration-300 ${
            darkMode ? 'glass-card' : 'bg-white/70 border border-gray-200 shadow-xl'
          }`}>
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Photo Placeholder */}
              <div className="flex-shrink-0">
                <div className={`w-48 h-48 md:w-64 md:h-64 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-white/30' : 'text-gray-400'}`}>Your photo here</p>
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
            <div id="turblu" className={`rounded-2xl p-8 md:p-10 transition-all duration-300 turblu-gradient-border ${
              darkMode ? 'glass-card' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
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
                <a 
                  href="https://Turblu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-turblu-gradient w-14 h-14 rounded-xl flex items-center justify-center hover:scale-105 transition-transform group flex-shrink-0"
                >
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

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
                  <Car className={`w-8 h-8 ${darkMode ? 'text-white/70' : 'text-gray-600'}`} />
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
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technologist</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Deep technical background with hands-on experience across the full stack. Architecture to deployment.
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
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

      {/* Footer */}
      <footer className={`py-8 px-6 border-t transition-colors duration-300 ${
        darkMode ? 'border-white/5' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-white/30' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Christopher Estep. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}