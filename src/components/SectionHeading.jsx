import React from 'react'

export default function SectionHeading({ kicker, title, desc, align = 'center' }) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'text-center' : 'text-left'}>
      {kicker && <div className="text-xs tracking-wide3 text-dim">{kicker}</div>}
      <h2 className="mt-3 font-display text-4xl font-light tracking-tight md:text-5xl">{title}</h2>
      {desc && <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted">{desc}</p>}
    </div>
  )
}
