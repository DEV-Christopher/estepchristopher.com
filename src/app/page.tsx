'use client'

import { useState, useEffect } from 'react'
import { 
  ArrowUpRight, 
  Briefcase, 
  Code2, 
  Lightbulb, 
  Mail, 
  Linkedin, 
  Github,
  Rocket,
  Users,
  Zap,
  Sun,
  Moon,
  Terminal
} from 'lucide-react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check for saved preference or system preference
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
      {/* Dark/Light Mode Toggle - Top Right */}
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
          darkMode 
            ? 'nav-pill' 
            : 'bg-white/80 border border-gray-200 shadow-lg'
        }`}>
          <a href="#about" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            About
          </a>
          <a href="#work" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            Work
          </a>
          <a href="#turblu" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            Turblu
          </a>
          <a href="#contact" className={`text-sm transition-colors ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`rounded-3xl p-12 md:p-16 transition-all duration-300 ${
            darkMode ? 'glass-card' : 'bg-white/70 border border-gray-200 shadow-xl'
          }`}>
            <div className={`flex items-center justify-center gap-2 mb-4 ${
              darkMode ? 'text-white/50' : 'text-gray-500'
            }`}>
              <Terminal className="w-4 h-4" />
              <p className="text-sm tracking-widest uppercase">
                Tech Founder & CEO
              </p>
            </div>
            <h1 className={`text-5xl md:text-7xl font-semibold mb-6 tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Christopher Estep
            </h1>
            <p className={`text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-white/60' : 'text-gray-600'
            }`}>
              Building the future at <span className="turblu-gradient-text font-medium">Turblu</span>. 
              Turning bold ideas into transformative technology.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-turblu-gradient px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#work" 
                className={`px-8 py-3 rounded-full transition-all ${
                  darkMode 
                    ? 'glass text-white/80 hover:text-white hover:bg-white/10' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${
            darkMode ? 'text-white/50' : 'text-gray-500'
          }`}>
            A blend of vision, technical expertise, and leadership
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Founder Card */}
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
                Identifying opportunities and building companies that solve real problems. 
                From zero to one, repeatedly.
              </p>
            </div>

            {/* Technologist Card */}
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
                Deep technical background with hands-on experience across the full stack. 
                Architecture to deployment.
              </p>
            </div>

            {/* Leader Card */}
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
                Building and scaling teams that ship exceptional products. 
                Culture-first, results-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turblu Section */}
      <section id="turblu" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-12 md:p-16 turblu-gradient-border transition-all duration-300 ${
            darkMode ? 'glass-card' : 'bg-white/70 border border-gray-200 shadow-xl'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-turblu-gradient flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-sm tracking-widest uppercase ${
                    darkMode ? 'text-white/50' : 'text-gray-500'
                  }`}>Current Venture</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                  <span className="turblu-gradient-text">Turblu</span>
                </h2>
                <p className={`text-xl mb-8 leading-relaxed ${
                  darkMode ? 'text-white/60' : 'text-gray-600'
                }`}>
                  Revolutionizing how businesses leverage technology. 
                  We&apos;re building tools that empower teams to do their best work.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className={`rounded-full px-4 py-2 flex items-center gap-2 ${
                    darkMode ? 'glass' : 'bg-gray-100'
                  }`}>
                    <Zap className="w-4 h-4 text-turblu-mid" />
                    <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Innovation</span>
                  </div>
                  <div className={`rounded-full px-4 py-2 flex items-center gap-2 ${
                    darkMode ? 'glass' : 'bg-gray-100'
                  }`}>
                    <Users className="w-4 h-4 text-turblu-mid" />
                    <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Team-First</span>
                  </div>
                  <div className={`rounded-full px-4 py-2 flex items-center gap-2 ${
                    darkMode ? 'glass' : 'bg-gray-100'
                  }`}>
                    <Code2 className="w-4 h-4 text-turblu-mid" />
                    <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Tech-Driven</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="https://turblu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-turblu-gradient w-32 h-32 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform group"
                >
                  <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What I Do
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${
            darkMode ? 'text-white/50' : 'text-gray-500'
          }`}>
            Focused on building products that matter
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Product Strategy</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Defining vision and roadmap for products that users love and businesses depend on.
              </p>
            </div>
            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Architecture</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Designing systems that scale elegantly and maintain velocity as complexity grows.
              </p>
            </div>
            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Team Building</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Recruiting, mentoring, and empowering exceptional people to do their best work.
              </p>
            </div>
            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              darkMode 
                ? 'glass-card glass-card-hover' 
                : 'bg-white/70 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Growth & Scale</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Navigating the challenges of hypergrowth while maintaining culture and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`rounded-3xl p-12 md:p-16 transition-all duration-300 ${
            darkMode ? 'glass-card' : 'bg-white/70 border border-gray-200 shadow-xl'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let&apos;s Connect
            </h2>
            <p className={`mb-10 max-w-xl mx-auto ${
              darkMode ? 'text-white/50' : 'text-gray-500'
            }`}>
              Always interested in hearing about new opportunities, collaborations, or just a good conversation about tech.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a 
                href="mailto:chris@turblu.com" 
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
                href="https://linkedin.com/in/christopherestep" 
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
              <a 
                href="https://github.com/christopherestep" 
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  darkMode 
                    ? 'glass glass-card-hover text-white/80 hover:text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t transition-colors duration-300 ${
        darkMode ? 'border-white/5' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${darkMode ? 'text-white/30' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Christopher Estep. All rights reserved.
          </p>
          <p className={`text-sm ${darkMode ? 'text-white/30' : 'text-gray-400'}`}>
            Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}
