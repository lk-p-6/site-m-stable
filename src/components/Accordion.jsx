import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="mx-auto max-w-3xl">
      <div className="space-y-4">
        {items.map((it, idx) => {
          const isOpen = open === idx
          return (
            <div key={it.q} className="border border-stroke bg-panel">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <span className="text-sm font-medium text-text">{it.q}</span>
                <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-stroke text-muted">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    <div className="px-6 pb-6 text-sm leading-6 text-muted">{it.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
