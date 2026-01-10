import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ImageModal({ open, item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-bg/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-muted hover:text-text"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-stroke text-muted hover:text-text"
            onClick={onPrev}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-stroke text-muted hover:text-text"
            onClick={onNext}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>

          <motion.div
            className="mx-auto grid w-[min(1100px,92vw)] grid-cols-1 overflow-hidden rounded-md border border-stroke bg-bg/40 shadow-soft md:grid-cols-12"
            initial={{ scale: 0.98, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="md:col-span-8">
              {item.type === 'video' ? (
                <div className="relative aspect-[16/10] w-full bg-black">
                  <video className="h-full w-full object-cover" src={item.src} controls />
                  <div className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-bg/50 backdrop-blur">
                    <Play size={16} className="translate-x-[1px] text-white/90" />
                  </div>
                </div>
              ) : (
                <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
              )}
            </div>

            <div className="p-7 md:col-span-4">
              <div className="text-xs tracking-wide3 text-dim">{item.category.toUpperCase()}</div>
              <div className="mt-3 text-xl font-medium text-text">{item.title}</div>
              <div className="mt-1 text-xs text-muted">{item.meta}</div>
              <p className="mt-5 text-sm leading-6 text-muted">{item.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
