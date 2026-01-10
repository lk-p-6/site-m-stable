import React from 'react'
import { Play } from 'lucide-react'

export default function PortfolioGrid({ items, onOpen }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((p) => (
        <button
          key={p.id}
          onClick={() => onOpen(p)}
          className="group relative overflow-hidden border border-stroke bg-panel text-left"
        >
          <img
            src={p.thumb}
            alt={p.title}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {p.type === 'video' && (
            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-bg/50 backdrop-blur">
              <Play size={16} className="translate-x-[1px] text-white/90" />
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
