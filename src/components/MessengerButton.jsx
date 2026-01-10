import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function MessengerButton() {
  return (
    <a
      href="#"
      className="fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-stroke bg-bg/70 text-muted shadow-soft backdrop-blur md:hidden"
      aria-label="Messenger"
      title="Messenger"
    >
      <MessageCircle size={18} />
    </a>
  )
}
