import React, { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TestimonialCarousel({ items }) {
  const data = useMemo(() => items ?? [], [items])
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i - 1 + data.length) % data.length)
  const next = () => setIdx((i) => (i + 1) % data.length)

  const item = data[idx]

  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-stroke text-muted">
        <Quote size={18} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <p className="mt-8 text-xl font-light leading-8 text-text md:text-2xl">
            “{item.quote}”
          </p>

          <div className="mt-8 flex flex-col items-center justify-center">
            <img
              src={item.avatar}
              alt={item.name}
              className="h-12 w-12 rounded-full border border-stroke object-cover"
              loading="lazy"
            />
            <div className="mt-4 text-sm font-semibold text-text">{item.name}</div>
            <div className="text-xs text-muted">{item.title}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stroke text-muted hover:text-text"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {data.map((_, i) => (
            <div
              key={i}
              className={
                i === idx
                  ? 'h-[6px] w-8 rounded-full bg-white'
                  : 'h-[6px] w-[6px] rounded-full bg-white/30'
              }
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stroke text-muted hover:text-text"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
