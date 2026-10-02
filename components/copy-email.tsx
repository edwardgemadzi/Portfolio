'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" onClick={copy} className="btn btn-outline">
      {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
      Copy address
      <span aria-live="polite" className={copied ? 'text-accent' : 'sr-only'}>{copied ? 'Copied' : ''}</span>
    </button>
  )
}
