import React from 'react'
import { NavLink } from 'react-router-dom'
import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'
import { navLinks, services } from '../data/content.js'
import { cn } from '../lib/cn.js'

export default function Footer() {
  return (
    <footer className="border-t border-stroke bg-bg/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 py-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-display text-xl tracking-[0.28em] text-text/90">LUMIÈRE</div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Crafting visual narratives that transcend the ordinary. We transform brands through the art
              of cinematic storytelling.
            </p>
            <div className="mt-6 flex items-center gap-3 text-muted">
              <IconLink label="Instagram" href="#" icon={<Instagram size={16} />} />
              <IconLink label="Twitter" href="#" icon={<Twitter size={16} />} />
              <IconLink label="YouTube" href="#" icon={<Youtube size={16} />} />
              <IconLink label="LinkedIn" href="#" icon={<Linkedin size={16} />} />
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-8">
            <div className="text-xs tracking-wide3 text-dim">NAVIGATION</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      cn('transition hover:text-text', isActive && 'text-text')
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <div className="text-xs tracking-wide3 text-dim">SERVICES</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {services.map((s) => (
                <li key={s.id}>
                  <NavLink to="/services" className="transition hover:text-text">
                    {s.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stroke py-6">
          <div className="flex flex-col gap-3 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <div>© 2026 Lumière Studios. All rights reserved.</div>
            <div className="flex items-center gap-8">
              <a className="transition hover:text-text" href="#">
                Privacy Policy
              </a>
              <a className="transition hover:text-text" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function IconLink({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-muted transition hover:text-text"
    >
      {icon}
    </a>
  )
}
