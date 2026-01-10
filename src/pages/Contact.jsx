import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { cn } from '../lib/cn.js'
import Reveal from '../components/Reveal.jsx'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  service: z.string().min(1, 'Select a service'),
  budget: z.string().min(1, 'Select a budget range'),
  details: z.string().min(10, 'Tell us a bit more (min 10 characters)'),
})

const inputBase =
  'w-full rounded-md border border-stroke bg-bg/20 px-4 py-3 text-sm text-text placeholder:text-white/30 focus:border-white/25 focus:outline-none'

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      details: '',
    },
  })

  const onSubmit = async (values) => {
    // This is a frontend-only template.
    // Hook this up to your backend/email provider (Resend, SendGrid, etc.) when ready.
    await new Promise((r) => setTimeout(r, 400))
    console.log('Contact form:', values)
    reset()
    alert('Message sent! (demo)')
  }

  return (
    <>
      <Helmet>
        <title>Lumière Studios — Contact</title>
      </Helmet>

      <section className="border-b border-stroke py-24 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs tracking-wide3 text-dim">GET IN TOUCH</div>
          <h1 className="mt-4 font-display text-6xl font-light tracking-tight md:text-7xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted">
            Ready to start your project? We'd love to hear from you. Send us a message and we'll respond
            within 24 hours.
          </p>
        </div>
      </section>

      <Reveal delay={0}>

      <section className="border-b border-stroke py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Left info */}
            <div className="md:col-span-5">
              <h2 className="text-xl font-medium text-text">Let's start a conversation</h2>

              <div className="mt-10 space-y-8 text-sm text-muted">
                <InfoRow
                  icon={<MapPin size={16} />}
                  label="STUDIO"
                  lines={['123 Creative District', 'New York, NY 10001']}
                />
                <InfoRow
                  icon={<Mail size={16} />}
                  label="EMAIL"
                  lines={['hello@lumiere.studio', 'projects@lumiere.studio']}
                />
                <InfoRow
                  icon={<Phone size={16} />}
                  label="PHONE"
                  lines={['+1 (555) 123-4567', '+1 (555) 987-6543']}
                />
                <InfoRow
                  icon={<Clock size={16} />}
                  label="HOURS"
                  lines={['Mon - Fri: 9AM - 6PM EST', 'Sat: By appointment']}
                />
              </div>

              <div className="mt-10 overflow-hidden border border-stroke bg-panel">
                <img
                  src="https://images.unsplash.com/photo-1526779259212-939e64788e3d?auto=format&fit=crop&w=1600&q=80"
                  alt="Map"
                  className="aspect-[16/10] w-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7">
              <div className="border border-stroke bg-panel p-8">
                <div className="text-lg font-semibold text-text">Send us a message</div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="NAME *" error={errors.name?.message}>
                      <input className={inputBase} placeholder="John Smith" {...register('name')} />
                    </Field>
                    <Field label="EMAIL *" error={errors.email?.message}>
                      <input
                        className={inputBase}
                        placeholder="john@company.com"
                        {...register('email')}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="COMPANY" error={errors.company?.message}>
                      <input className={inputBase} placeholder="Your Company" {...register('company')} />
                    </Field>
                    <Field label="SERVICE NEEDED" error={errors.service?.message}>
                      <select className={inputBase} {...register('service')}>
                        <option value="">Select a service</option>
                        <option value="Commercial Shoots">Commercial Shoots</option>
                        <option value="Creative Directing">Creative Directing</option>
                        <option value="Post-Production">Post-Production</option>
                        <option value="Branded Content">Branded Content</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="BUDGET RANGE" error={errors.budget?.message}>
                    <select className={inputBase} {...register('budget')}>
                      <option value="">Select your budget</option>
                      <option value="$2k–$5k">$2k–$5k</option>
                      <option value="$5k–$10k">$5k–$10k</option>
                      <option value="$10k–$25k">$10k–$25k</option>
                      <option value="$25k+">$25k+</option>
                    </select>
                  </Field>

                  <Field label="PROJECT DETAILS *" error={errors.details?.message}>
                    <textarea
                      className={cn(inputBase, 'min-h-[140px] resize-none')}
                      placeholder="Tell us about your project, goals, and timeline..."
                      {...register('details')}
                    />
                  </Field>

                  <button
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-semibold tracking-wide2 text-black hover:bg-white/90 disabled:opacity-60"
                  >
                    SEND MESSAGE <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="py-16 text-center text-sm text-muted">
            Have questions about our process or pricing?{' '}
            <a href="/#faq" className="font-semibold text-text underline underline-offset-8">
              Check out our FAQ section
            </a>
          </div>
        </div>
      </section>

      </Reveal>
    </>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <div className="text-[11px] font-semibold tracking-wide3 text-dim">{label}</div>
      <div className="mt-2">{children}</div>
      {error && <div className="mt-2 text-xs text-red-400">{error}</div>}
    </div>
  )
}

function InfoRow({ icon, label, lines }) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-muted">
        {icon}
      </div>
      <div>
        <div className="text-[11px] font-semibold tracking-wide3 text-dim">{label}</div>
        <div className="mt-2 space-y-1 text-sm text-text/90">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  )
}