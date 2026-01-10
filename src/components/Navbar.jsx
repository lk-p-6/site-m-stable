import React, { useMemo, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../data/content.js'
import { cn } from '../lib/cn.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const links = useMemo(() => navLinks, [])
  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))

  return (
    <>
      {/* Desktop / Mobile header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="h-16 border-b border-stroke bg-bg/70 backdrop-blur">
          <div className="mx-auto flex h-full max-w-6xl items-center px-6">
            {/* Left: logo (hard-left) */}
            <div className="flex flex-1 items-center">
              <button
                onClick={() => navigate('/')}
                className="font-display text-base tracking-[0.28em] text-text/90 hover:text-text"
                aria-label="Go to home"
              >
                LUMIÈRE
              </button>
            </div>

            {/* Right: nav (desktop) */}
            <nav className="hidden items-center gap-10 text-xs font-medium tracking-wide2 text-muted md:flex">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={cn('transition-colors hover:text-text', isActive(l.to) && 'text-text')}
                >
                  {l.label.toUpperCase()}
                </NavLink>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden rounded-full border border-stroke p-2 text-muted hover:text-text"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
              <button
                onClick={() => {
                  setOpen(false)
                  navigate('/')
                }}
                className="font-display text-base tracking-[0.28em] text-text/90 hover:text-text"
                aria-label="Go to home"
              >
                LUMIÈRE
              </button>
              <button
                className="rounded-full border border-stroke p-2 text-muted hover:text-text"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <motion.nav
              className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-7"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive: a }) =>
                    cn(
                      'font-display text-3xl font-light tracking-tight text-muted transition hover:text-text',
                      a && 'text-text'
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
