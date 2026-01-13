'use client'

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
  Zap
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="nav-pill rounded-full px-8 py-3 flex items-center gap-8">
          <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a href="#work" className="text-sm text-white/70 hover:text-white transition-colors">
            Work
          </a>
          <a href="#turblu" className="text-sm text-white/70 hover:text-white transition-colors">
            Turblu
          </a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16">
            <p className="text-white/50 text-sm tracking-widest uppercase mb-4">
              Tech Founder & CEO
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
              Christopher <span className="turblu-gradient-text">Estep</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
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
                className="glass px-8 py-3 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
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
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
            About Me
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto">
            A blend of vision, technical expertise, and leadership
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Founder Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Founder</h3>
              <p className="text-white/60 leading-relaxed">
                Identifying opportunities and building companies that solve real problems. 
                From zero to one, repeatedly.
              </p>
            </div>

            {/* Technologist Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technologist</h3>
              <p className="text-white/60 leading-relaxed">
                Deep technical background with hands-on experience across the full stack. 
                Architecture to deployment.
              </p>
            </div>

            {/* Leader Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-turblu-gradient flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Leader</h3>
              <p className="text-white/60 leading-relaxed">
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
          <div className="glass-card rounded-3xl p-12 md:p-16 turblu-gradient-border">
            <div className="flex flex-col md:flex-row md:items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-turblu-gradient flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/50 text-sm tracking-widest uppercase">Current Venture</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                  <span className="turblu-gradient-text">Turblu</span>
                </h2>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  Revolutionizing how businesses leverage technology. 
                  We&apos;re building tools that empower teams to do their best work.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-turblu-mid" />
                    <span className="text-sm text-white/70">Innovation</span>
                  </div>
                  <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-turblu-mid" />
                    <span className="text-sm text-white/70">Team-First</span>
                  </div>
                  <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-turblu-mid" />
                    <span className="text-sm text-white/70">Tech-Driven</span>
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
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
            What I Do
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto">
            Focused on building products that matter
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card glass-card-hover rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Product Strategy</h3>
              <p className="text-white/60 leading-relaxed">
                Defining vision and roadmap for products that users love and businesses depend on.
              </p>
            </div>
            <div className="glass-card glass-card-hover rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Technical Architecture</h3>
              <p className="text-white/60 leading-relaxed">
                Designing systems that scale elegantly and maintain velocity as complexity grows.
              </p>
            </div>
            <div className="glass-card glass-card-hover rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Team Building</h3>
              <p className="text-white/60 leading-relaxed">
                Recruiting, mentoring, and empowering exceptional people to do their best work.
              </p>
            </div>
            <div className="glass-card glass-card-hover rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Growth & Scale</h3>
              <p className="text-white/60 leading-relaxed">
                Navigating the challenges of hypergrowth while maintaining culture and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Always interested in hearing about new opportunities, collaborations, or just a good conversation about tech.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a 
                href="mailto:chris@turblu.com" 
                className="glass glass-card-hover px-6 py-3 rounded-full flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a 
                href="https://linkedin.com/in/christopherestep" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-card-hover px-6 py-3 rounded-full flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/christopherestep" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-card-hover px-6 py-3 rounded-full flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Christopher Estep. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}
