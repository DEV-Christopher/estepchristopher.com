'use client'

import Image from 'next/image'
import {
  ArrowUpRight,
  Briefcase,
  Zap,
  Lightbulb,
  Mail,
  Linkedin,
  Rocket,
  Terminal,
  Gem,
  Gauge
} from 'lucide-react'
import { GeometricBackground } from '@/components/GeometricBackground'
import { useScrollReveal } from '@/components/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <div className="min-h-screen dark-mode">

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="rounded-full px-8 py-3 flex items-center gap-8 nav-pill">
          <a href="#mission" className="text-sm text-white/70 hover:text-white transition-colors">Mission</a>
          <a href="#journey" className="text-sm text-white/70 hover:text-white transition-colors">Journey</a>
          <a href="#turblu" className="text-sm text-white/70 hover:text-white transition-colors">Turblu</a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 pt-24 relative overflow-hidden">
        <GeometricBackground />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4 text-white/50">
            <Terminal className="w-4 h-4" />
            <p className="text-sm tracking-widest uppercase">Tech Founder & CEO</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Christopher Estep
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16 glass-card reveal">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-2 ring-white/10">
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
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm tracking-widest uppercase mb-4 text-white/50">My Mission</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white">
                  To build technology that accelerates human potential and creates lasting impact.
                </h2>
                <p className="text-lg leading-relaxed text-white/60">
                  I believe the best companies are built at the intersection of passion and purpose.
                  Every venture I pursue is driven by this conviction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-white reveal">The Journey So Far</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-white/50 reveal">
            Focused on technology, innovation, and leadership.
          </p>

          <div className="space-y-6">
            <a
              href="https://www.turblu.com"
              target="_blank"
              rel="noopener noreferrer"
              id="turblu"
              className="block rounded-2xl p-8 md:p-10 transition-all duration-300 turblu-gradient-border cursor-pointer glass-card hover:bg-white/[0.06] reveal"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-turblu-gradient flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold text-white">
                      <span className="turblu-gradient-text">Turblu</span>
                    </h3>
                    <span className="bg-turblu-gradient text-white text-xs px-3 py-1 rounded-full font-medium">
                      Current
                    </span>
                  </div>
                  <p className="text-sm mb-3 text-white/50">Founder & CEO</p>
                  <p className="text-lg leading-relaxed text-white/70">
                    Building the future at Turblu. Transforming bold ideas at the intersection of motorsports and tech.
                  </p>
                </div>
                <div className="bg-turblu-gradient w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </a>

            <div className="rounded-2xl p-8 md:p-10 transition-all duration-300 glass-card glass-card-hover reveal">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/10">
                  <Gem className="w-8 h-8 text-white/70" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold text-white">Signet Jewelers</h3>
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/10 text-white/70">
                      Current
                    </span>
                  </div>
                  <p className="text-sm mb-3 text-white/50">Supply Chain Leadership</p>
                  <p className="text-lg leading-relaxed text-white/70">
                    Working closely with senior leadership and C-suite on strategic supply chain initiatives at this multi-billion dollar retailer.
                    Achieved significant operational improvements, including halving transit loss, saving millions annually.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 md:p-10 transition-all duration-300 glass-card glass-card-hover reveal">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/10">
                  <Gauge className="w-8 h-8 text-white/70" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1 text-white">Palmetto Auto Club</h3>
                  <p className="text-sm mb-3 text-white/50">Founder</p>
                  <p className="text-lg leading-relaxed text-white/70">
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
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-white reveal">What I Bring</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-white/50 reveal">
            A blend of vision, technical expertise, and leadership
          </p>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            <div className="rounded-2xl p-8 transition-all duration-300 glass-card glass-card-hover reveal">
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Founder</h3>
              <p className="leading-relaxed text-white/60">
                Identifying opportunities and building companies that solve real problems. From zero to one, repeatedly.
              </p>
            </div>

            <div className="rounded-2xl p-8 transition-all duration-300 glass-card glass-card-hover reveal">
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Operations & Analytics</h3>
              <p className="leading-relaxed text-white/60">
                Turning data into millions of dollars through advanced analytics like Alteryx and process optimization. Building efficient systems that scale with the business.
              </p>
            </div>

            <div className="rounded-2xl p-8 transition-all duration-300 glass-card glass-card-hover reveal">
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Leader</h3>
              <p className="leading-relaxed text-white/60">
                Building and scaling teams that ship exceptional products. Culture-first, results-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-12 md:p-16 glass-card reveal">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Let&apos;s Connect</h2>
            <p className="mb-10 max-w-xl mx-auto text-white/50">
              Always interested in hearing about new opportunities, collaborations, or just a good conversation about tech and motorsports.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:hello@estepchristopher.com"
                className="px-6 py-3 rounded-full flex items-center gap-2 transition-all glass glass-card-hover text-white/80 hover:text-white"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/christopher-estep-8b736312a/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full flex items-center gap-2 transition-all glass glass-card-hover text-white/80 hover:text-white"
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
