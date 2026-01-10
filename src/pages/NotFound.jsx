import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Lumière Studios — Not found</title>
      </Helmet>
      <section className="mx-auto max-w-6xl px-6 py-28 text-center">
        <div className="font-display text-6xl font-light">404</div>
        <div className="mt-4 text-muted">Page not found.</div>
        <a className="mt-8 inline-block underline underline-offset-8" href="/">
          Go home
        </a>
      </section>
    </>
  )
}
