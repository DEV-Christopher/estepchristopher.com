'use client'

import Image from 'next/image'
import { ArrowUpRight, Mail, Linkedin, MapPin } from 'lucide-react'
import { GeometricBackground } from '@/components/GeometricBackground'
import { PhotoSlot } from '@/components/PhotoSlot'
import { useScrollReveal } from '@/components/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <div className="min-h-screen">

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="rounded-full px-5 py-3 flex items-center gap-5 sm:px-8 sm:gap-8 nav-pill">
          <a href="#story" className="text-sm text-white/70 hover:text-white transition-colors">Story</a>
          <a href="#now" className="text-sm text-white/70 hover:text-white transition-colors">Now</a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 pt-24 relative overflow-hidden">
        <GeometricBackground />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 text-white/50">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <p className="kicker">Venice Beach, California</p>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            Christopher Estep
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Founder of <a href="https://www.turblu.com" target="_blank" rel="noopener noreferrer" className="turblu-gradient-text font-medium">Turblu</a>.
            Supply chain leader at Signet Jewelers.
            <span className="block mt-3">
              I build companies and communities around the things I love — starting with cars.
            </span>
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 reveal">
            <span className="accent-tick mb-4" aria-hidden="true" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-3">The story so far</h2>
            <p className="text-white/50 text-lg">
              Four chapters: take ownership of something real, then make it better.
            </p>
          </div>

          <div className="timeline space-y-16 pl-10 md:pl-16">

            {/* Chapter 01 — Aiken */}
            <article className="relative reveal">
              <span className="absolute -left-10 md:-left-16 top-1 font-mono text-sm text-race" aria-hidden="true">01</span>
              <p className="kicker mb-3">Aiken, South Carolina</p>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">The ER floor</h3>
              <p className="text-lg leading-relaxed text-white/70">
                I started at eighteen, running the Patient Advocate process for the Emergency
                Department at Aiken Regional Medical Centers. When someone&apos;s worst day walks
                through the door, you learn fast how to listen, take ownership, and get things
                done inside a system much bigger than you. It was operations training before
                I knew the word for it.
              </p>
            </article>

            {/* Chapter 02 — Signet */}
            <article className="relative reveal">
              <span className="absolute -left-10 md:-left-16 top-1 font-mono text-sm text-race" aria-hidden="true">02</span>
              <p className="kicker mb-3">Signet Jewelers</p>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">Learning to operate at scale</h3>
              <p className="text-lg leading-relaxed text-white/70">
                From the ER I moved into supply chain at Signet Jewelers, the world&apos;s largest
                diamond jewelry retailer. Working alongside senior leadership and the C-suite,
                I&apos;ve led enterprise initiatives spanning cost savings and acquisitions —
                including halving transit loss, worth millions of dollars in annual savings
                for a multi-billion dollar business.
              </p>
            </article>

            {/* Chapter 03 — Palmetto Auto Club */}
            <article className="relative reveal">
              <span className="absolute -left-10 md:-left-16 top-1 font-mono text-sm text-race" aria-hidden="true">03</span>
              <p className="kicker mb-3">East Coast · 2021</p>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">Palmetto Auto Club</h3>
              <p className="text-lg leading-relaxed text-white/70 mb-6">
                Cars were always the constant. In 2021 I founded Palmetto Auto Club, a
                philanthropic community for East Coast car enthusiasts — premium rallies,
                curated events, and fundraising that gives the car scene a purpose bigger
                than the cars themselves.
              </p>
              <PhotoSlot
                src="/images/palmetto-rally.jpg"
                alt="Christopher's black Corvette Grand Sport wearing Rally2Dragon decals, with an Audi R8 lined up behind it at an East Coast car meet"
                label="Photo slot: a Palmetto rally or event shot"
                caption="East Coast car meet — my Grand Sport, still wearing its Rally2Dragon decals, next to my friend Asa Gladstein's R8. He happens to run Crown Rally."
                className="aspect-[3/2] w-full"
              />
            </article>

            {/* Chapter 04 — Turblu */}
            <article className="relative reveal">
              <span className="absolute -left-10 md:-left-16 top-1 font-mono text-sm text-race" aria-hidden="true">04</span>
              <p className="kicker mb-3">Venice Beach, California</p>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                <span className="turblu-gradient-text">Turblu</span>
              </h3>
              <p className="text-lg leading-relaxed text-white/70 mb-6">
                Then I bet on myself. I moved across the country to Venice Beach, California,
                and founded Turblu — bringing the two threads of my life together, building
                at the intersection of motorsports and technology.
              </p>
              <a
                href="https://www.turblu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-turblu-gradient text-white text-sm font-medium hover:opacity-90 transition-opacity mb-6"
              >
                Visit turblu.com
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <PhotoSlot
                src="/images/turblu-retreat.jpg"
                alt="Three members of the Turblu team wearing Turblu hats on a bridge over the Venice canals"
                label="Photo slot: Venice Beach, the workspace, or Turblu in action"
                caption="First Turblu retreat — the Venice canals, a five-minute walk from HQ."
                className="aspect-[3/2] w-full"
              />
            </article>

          </div>
        </div>
      </section>

      {/* Now */}
      <section id="now" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl p-10 md:p-14 card reveal">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              <div className="flex-shrink-0">
                <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Christopher Estep"
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 768px) 176px, 224px"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="accent-tick mb-4" aria-hidden="true" />
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">Now</h2>
                <ul className="space-y-4 text-lg text-white/70 leading-relaxed">
                  <li>
                    Building <span className="text-white font-medium">Turblu</span> from Venice Beach —
                    AI infrastructure layer for motorsports.
                  </li>
                  <li>
                    Leading strategic supply chain initiatives at{' '}
                    <span className="text-white font-medium">Signet Jewelers</span>.
                  </li>
                  <li>
                    Growing the <span className="text-white font-medium">Turblu motorsports community</span> —
                    worldwide.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 pb-28">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-white">Let&apos;s talk</h2>
          <p className="mb-10 max-w-xl mx-auto text-white/50 text-lg">
            New opportunities, collaborations, or a good conversation about tech and motorsports.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:hello@estepchristopher.com"
              className="px-6 py-3 rounded-full flex items-center gap-2 card card-hover text-white/80 hover:text-white"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-estep-8b736312a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full flex items-center gap-2 card card-hover text-white/80 hover:text-white"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="pb-10 px-6 text-center">
        <p className="text-sm text-white/30">© {new Date().getFullYear()} Christopher Estep · Venice Beach, CA</p>
      </footer>
    </div>
  )
}
