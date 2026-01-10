import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { ArrowRight, Camera, Clapperboard, Film, Sparkles, Check } from 'lucide-react'
import { services } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

const iconMap = {
  camera: Camera,
  clapperboard: Clapperboard,
  film: Film,
  sparkles: Sparkles,
}

export default function ServicesPage() {
  const location = useLocation()
useEffect(() => {
  const hash = location.hash
  if (!hash) return

  const id = hash.slice(1)
  // Let the route render + images layout
  const t = window.setTimeout(() => {
    const el = document.getElementById(id)
    if (!el) return

    const headerOffset = 90
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })

    // Optional: focus without jumping (accessibility)
    el.setAttribute('tabindex', '-1')
    el.focus({ preventScroll: true })
  }, 80)

  return () => window.clearTimeout(t)
}, [location.hash])


  return (
    <>
      <Helmet>
        <title>Lumière Studios — Services</title>
      </Helmet>

      <section className="border-b border-stroke py-24 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs tracking-wide3 text-dim">OUR EXPERTISE</div>
          <h1 className="mt-4 font-display text-6xl font-light tracking-tight md:text-7xl">
            Services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-muted">
            From concept to delivery, we offer end-to-end production services that transform your vision
            into compelling visual stories.
          </p>
        </div>
      </section>

      {services.map((s, i) => {
        const Icon = iconMap[s.icon] ?? Camera
        const reverse = i % 2 === 1
        return (
          <Reveal>
            <section id={s.id} key={s.id} className="border-b border-stroke py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className={reverse ? 'grid gap-10 md:grid-cols-12' : 'grid gap-10 md:grid-cols-12'}>
                {/* image */}
                <div className={reverse ? 'order-2 md:col-span-6 md:order-2' : 'md:col-span-6'}>
                  <div className="relative overflow-hidden border border-stroke bg-panel">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="aspect-[16/11] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-7 right-8 flex h-28 w-28 items-center justify-center bg-white text-5xl font-light text-black">
                      {s.number}
                    </div>
                  </div>
                </div>

                {/* text */}
                <div className={reverse ? 'order-1 md:col-span-6 md:order-1' : 'md:col-span-6'}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-stroke text-muted">
                      <Icon size={20} />
                    </div>
                    <div className="text-xs tracking-wide3 text-dim">{s.category}</div>
                  </div>

                  <h2 className="mt-6 font-display text-5xl font-light tracking-tight md:text-6xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg font-light leading-8 text-muted">{s.desc}</p>

                  <ul className="mt-8 space-y-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-4 text-base text-text/90">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke bg-bg/30 text-muted">
                          <Check size={16} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="mt-10 inline-flex items-center gap-3 text-xs font-semibold tracking-wide2 text-text hover:text-white"
                  >
                    GET STARTED <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
          </Reveal>
        )
      })}

      <Reveal>
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-5xl font-light tracking-tight md:text-6xl">
            Ready to elevate your brand?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted">
            Let's discuss your project and create something extraordinary together.
          </p>
          <a
            href="/contact"
            className="mx-auto mt-10 inline-flex w-[340px] items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-semibold tracking-wide2 text-black hover:bg-white/90"
          >
            START A PROJECT <ArrowRight size={16} />
          </a>
        </div>
      </section>
      </Reveal>
    </>
  )
}