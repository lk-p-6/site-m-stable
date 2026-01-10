import React, { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Play } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import Accordion from '../components/Accordion.jsx'
import PortfolioGrid from '../components/PortfolioGrid.jsx'
import ImageModal from '../components/ImageModal.jsx'
import { serviceCards, projects, testimonials, faq, pricing } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  const cards = useMemo(() => serviceCards, [])
  const [modal, setModal] = useState({ open: false, item: null, idx: 0 })

  const openItem = (item) => {
    const idx = projects.findIndex((p) => p.id === item.id)
    setModal({ open: true, item, idx })
  }
  const close = () => setModal((m) => ({ ...m, open: false }))
  const prev = () =>
    setModal((m) => {
      const ni = (m.idx - 1 + projects.length) % projects.length
      return { open: true, idx: ni, item: projects[ni] }
    })
  const next = () =>
    setModal((m) => {
      const ni = (m.idx + 1) % projects.length
      return { open: true, idx: ni, item: projects[ni] }
    })

  return (
    <>
      <Helmet>
        <title>Lumière Studios — Home</title>
      </Helmet>

      {/* HERO */}
      <section className="relative border-b border-stroke">
        <div className="relative h-[520px] md:h-[640px]">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-bg/70" />

          <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
            <div className="text-xs tracking-wide3 text-dim">CINEMATIC PRODUCTION</div>
            <h1 className="mt-4 font-display text-5xl font-light tracking-tight md:text-7xl">
              Where Vision Meets Craft
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-muted md:text-base">
              Premium photo & video services for brands — commercial shoots, directing, editing, and
              content that feels expensive.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button as="a" href="/contact" className="w-[240px]">
                GET A QUOTE <ArrowRight size={16} />
              </Button>
              <Button as="a" href="/portfolio" variant="outline" className="w-[240px]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stroke">
                  <Play size={14} className="translate-x-[1px]" />
                </span>
                VIEW PORTFOLIO
              </Button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-wide3 text-dim">
              SCROLL
              <div className="mx-auto mt-3 h-10 w-px bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Reveal>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="WHAT WE DO" title="Our Services" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <ServiceCard {...c} targetId={c.id} />
            </Reveal>
          ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* PORTFOLIO PREVIEW */}
      <Reveal>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              kicker="SELECTED WORK"
              title="Portfolio Highlights"
              desc="A curated selection of our finest work across commercial, branded content, and creative productions."
              align="left"
            />
            <a
              href="/portfolio"
              className="hidden text-xs font-semibold tracking-wide2 text-muted underline underline-offset-8 hover:text-text md:inline"
            >
              VIEW ALL
            </a>
          </div>

          <div className="mt-12">
            <PortfolioGrid items={projects.slice(0, 6)} onOpen={openItem} />
          </div>
        </div>
      </section>
      </Reveal>

      {/* PROCESS */}
      <Reveal>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="PROCESS" title="How we work" />
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {[
              ['01', 'Discovery', 'We align on goals, audience, and visual direction.'],
              ['02', 'Pre-Production', 'Planning, locations, shot list, and scheduling.'],
              ['03', 'Production', 'Cinematic capture with a premium, efficient setup.'],
              ['04', 'Delivery', 'Edit, grade, sound, revisions, and final exports.'],
            ].map(([n, t, d]) => (
              <div key={n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-stroke text-sm text-muted">
                  {n}
                </div>
                <div className="mt-6 text-sm font-semibold tracking-wide2 text-text">{t}</div>
                <p className="mt-3 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 h-px w-full bg-white/10" />
        </div>
      </section>
      </Reveal>

      {/* PRICING */}
      <Reveal>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            kicker="INVESTMENT"
            title="Packages & Pricing"
            desc="Tailored solutions for every stage of your brand's journey. All packages include pre-production consultation and project management."
          />

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={
                  p.featured
                    ? 'border border-white/25 bg-white/5 p-8'
                    : 'border border-stroke bg-panel p-8'
                }
              >
                {p.badge && (
                  <div className="inline-flex items-center border border-stroke bg-bg/40 px-3 py-1 text-[11px] font-semibold tracking-wide3 text-text">
                    {p.badge}
                  </div>
                )}

                <div className="mt-6 text-lg font-semibold text-text">{p.name}</div>
                <div className="mt-2 flex items-end gap-2">
                  <div className="font-display text-4xl font-light text-text">{p.price}</div>
                  {p.unit && <div className="pb-1 text-xs text-muted">{p.unit}</div>}
                </div>
                <div className="mt-4 text-sm text-muted">{p.desc}</div>

                <ul className="mt-6 space-y-3 text-sm text-muted">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-white/30" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    as="a"
                    href={p.name === 'Enterprise' ? '/contact' : '/contact'}
                    variant={p.featured ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {p.cta} <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="TESTIMONIALS" title="Client Stories" />
          <div className="mt-14">
            <TestimonialCarousel items={testimonials} />
          </div>
        </div>
      </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="FAQ" title="Common Questions" />
          <div className="mt-14">
            <Accordion items={faq} />
          </div>
        </div>
      </section>
      </Reveal>

      {/* FINAL CTA */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-xs tracking-wide3 text-dim">READY TO CREATE?</div>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
            Let's bring your <span className="italic text-white/70">vision</span> to life
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted">
            Every great project starts with a conversation. Tell us about your brand and let's create
            something extraordinary together.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="a" href="/contact" className="w-[260px]">
              START A PROJECT <ArrowRight size={16} />
            </Button>
            <Button as="a" href="/portfolio" variant="outline" className="w-[260px]">
              EXPLORE WORK
            </Button>
          </div>
        </div>
      </section>
      </Reveal>

      <ImageModal
        open={modal.open}
        item={modal.item}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}