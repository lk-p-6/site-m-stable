import React, { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PortfolioGrid from '../components/PortfolioGrid.jsx'
import ImageModal from '../components/ImageModal.jsx'
import { projects } from '../data/content.js'
import { cn } from '../lib/cn.js'
import Reveal from '../components/Reveal.jsx'

const filters = ['ALL WORK', 'COMMERCIAL', 'DIRECTING', 'POST-PRODUCTION', 'BRANDED CONTENT']

export default function PortfolioPage() {
  const [active, setActive] = useState('ALL WORK')
  const [modal, setModal] = useState({ open: false, item: null, idx: 0 })

  const filtered = useMemo(() => {
    if (active === 'ALL WORK') return projects
    const key =
      active === 'BRANDED CONTENT'
        ? 'Branded Content'
        : active === 'POST-PRODUCTION'
        ? 'Post-Production'
        : active === 'DIRECTING'
        ? 'Directing'
        : 'Commercial'
    return projects.filter((p) => p.category === key)
  }, [active])

  const openItem = (item) => {
    const idx = filtered.findIndex((p) => p.id === item.id)
    setModal({ open: true, item, idx })
  }

  const close = () => setModal((m) => ({ ...m, open: false }))

  const prev = () =>
    setModal((m) => {
      const ni = (m.idx - 1 + filtered.length) % filtered.length
      return { open: true, idx: ni, item: filtered[ni] }
    })
  const next = () =>
    setModal((m) => {
      const ni = (m.idx + 1) % filtered.length
      return { open: true, idx: ni, item: filtered[ni] }
    })

  return (
    <>
      <Helmet>
        <title>Lumière Studios — Portfolio</title>
      </Helmet>

      <section className="border-b border-stroke py-24 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs tracking-wide3 text-dim">SELECTED WORK</div>
          <h1 className="mt-4 font-display text-6xl font-light tracking-tight md:text-7xl">
            Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-muted">
            A curated collection of our finest work across commercial, branded content, and creative
            productions.
          </p>
        </div>
      </section>

      <Reveal delay={0}>

      <section className="border-b border-stroke py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  'border border-stroke bg-panel px-6 py-4 text-xs font-semibold tracking-wide2 text-muted hover:text-text',
                  active === f && 'bg-white text-black hover:text-black'
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <PortfolioGrid items={filtered} onOpen={openItem} />
          </div>
        </div>
      </section>

      </Reveal>

      <Reveal delay={0}>

      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-sm text-muted">
            Ready to start your project? <a className="underline underline-offset-8" href="/contact">Get in touch</a>.
          </div>
        </div>
      </section>

      </Reveal>

      <ImageModal open={modal.open} item={modal.item} onClose={close} onPrev={prev} onNext={next} />
    </>
  )
}