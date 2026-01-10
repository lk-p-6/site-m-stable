import React from 'react'
import { ArrowUpRight, Camera, Clapperboard, Film, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { cn } from '../lib/cn.js'

const iconMap = {
  camera: Camera,
  clapperboard: Clapperboard,
  film: Film,
  sparkles: Sparkles,
}

export default function ServiceCard({ title, desc, tags, icon = 'camera', targetId }) {
  const Icon = iconMap[icon] ?? Camera
  const navigate = useNavigate()

  const go = () => {
    if (!targetId) return
    navigate(`/services#${targetId}`)
  }

  return (
    <div
      role={targetId ? 'button' : undefined}
      tabIndex={targetId ? 0 : undefined}
      onClick={targetId ? go : undefined}
      onKeyDown={
        targetId
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') go()
            }
          : undefined
      }
      className={cn(
        'group relative overflow-hidden border border-stroke bg-panel p-7',
        targetId && 'cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]'
      )}
      aria-label={targetId ? `Open ${title} on Services` : undefined}
    >
      <div className="flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-full border border-stroke text-muted">
          <Icon size={18} />
        </div>

        <div className="grid h-9 w-9 place-items-center rounded-full border border-stroke text-muted transition group-hover:text-text">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-muted">{desc}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              go()
            }}
            className={cn(
              'rounded-full border border-stroke px-3 py-1 text-[11px] tracking-wide text-muted transition',
              targetId && 'hover:text-text'
            )}
            aria-label={targetId ? `Open ${title} on Services` : t}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
