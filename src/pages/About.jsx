import React from 'react'
import { Helmet } from 'react-helmet-async'
import { aboutStats, values, team } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Lumière Studios — About</title>
      </Helmet>

      {/* Hero */}
      <section className="relative border-b border-stroke">
        <div className="relative h-[360px] md:h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=2200&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-bg/75" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
            <div className="max-w-xl">
              <div className="text-xs tracking-wide3 text-dim">OUR STORY</div>
              <h1 className="mt-3 font-display text-5xl font-light tracking-tight md:text-6xl">
                About Us
              </h1>
              <p className="mt-4 text-sm leading-6 text-text/85">
                We are a collective of storytellers, technicians, and artists united by a passion for
                creating visual content that moves people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Reveal delay={0}>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="text-xs tracking-wide3 text-dim">OUR MISSION</div>
              <h2 className="mt-3 font-display text-4xl font-light tracking-tight md:text-5xl">
                Crafting narratives that <br /> resonate
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-6 text-muted">
                <p>
                  Founded in 2015, Lumière Studios began as a small team of passionate filmmakers with a
                  shared vision: to elevate commercial content to the level of fine art.
                </p>
                <p>
                  Today, we've grown into a full-service production house serving global brands across
                  fashion, automotive, technology, and luxury goods.
                </p>
                <p>
                  We believe that great content isn't just about beautiful imagery. It's about
                  understanding your audience, your message, and your goals, then translating them into
                  visual experiences that create lasting connections.
                </p>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative overflow-hidden border border-stroke bg-panel">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80"
                  alt=""
                  className="aspect-[16/11] w-full object-cover"
                />
                <div className="absolute -bottom-7 left-8 flex h-28 w-28 flex-col items-center justify-center bg-white text-black">
                  <div className="text-3xl font-light">9+</div>
                  <div className="mt-1 text-[10px] font-semibold tracking-wide3 text-black/70">
                    YEARS OF <br /> EXCELLENCE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Stats */}
      <Reveal delay={0}>
      <section className="border-b border-stroke py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 text-center md:grid-cols-4">
            {aboutStats.map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl font-light text-text">{s.k}</div>
                <div className="mt-2 text-xs tracking-wide3 text-dim">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Values */}
      <Reveal delay={0}>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-xs tracking-wide3 text-dim">WHAT WE BELIEVE</div>
          <h2 className="mt-3 font-display text-4xl font-light tracking-tight md:text-5xl">Our Values</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.n} className="relative border border-stroke bg-panel p-8 text-left">
                <div className="absolute left-8 top-6 font-display text-6xl font-light text-white/10">
                  {v.n}
                </div>
                <div className="relative mt-12 text-lg font-semibold text-text">{v.title}</div>
                <p className="relative mt-4 text-sm leading-6 text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Team */}
      <Reveal delay={0}>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-xs tracking-wide3 text-dim">THE TEAM</div>
          <h2 className="mt-3 font-display text-4xl font-light tracking-tight md:text-5xl">
            Creative Minds
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="text-left">
                <div className="overflow-hidden border border-stroke bg-panel">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="aspect-[4/5] w-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-sm font-semibold text-text">{m.name}</div>
                <div className="mt-1 text-xs text-muted">{m.role}</div>
                <div className="mt-3 text-xs leading-5 text-muted">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* CTA */}
      <Reveal delay={0}>
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-5xl font-light tracking-tight md:text-6xl">
            Let's create together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted">
            We're always excited to meet new partners and tackle fresh challenges.
          </p>
          <a
            href="/contact"
            className="mx-auto mt-10 inline-flex w-[280px] items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-semibold tracking-wide2 text-black hover:bg-white/90"
          >
            GET IN TOUCH →
          </a>
        </div>
      </section>
      </Reveal>
    </>
  )
}