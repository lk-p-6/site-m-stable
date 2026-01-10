import React from 'react'
import { cn } from '../lib/cn.js'

export default function Button({ as: Comp = 'button', className, variant = 'primary', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wide2 transition'
  const variants = {
    primary: 'bg-white text-black hover:bg-white/90',
    outline: 'border border-stroke bg-transparent text-text hover:border-stroke2',
    ghost: 'text-text hover:text-white',
  }
  return <Comp className={cn(base, variants[variant], className)} {...props} />
}
