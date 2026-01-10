import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  duration = 0.55,
  once = true,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once,
    margin: '0px 0px -12% 0px',
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
