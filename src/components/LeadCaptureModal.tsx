'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ArrowRight, Activity, ShieldCheck, Loader2 } from 'lucide-react'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email address.')
      return
    }

    setError('')
    setLoading(true)

    // Simulate API registration request delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleOAuth = (provider: string) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Logo Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-[#21262D] border border-[#30363D] flex items-center justify-center font-mono font-bold text-xs text-[#F0F6FC]">
                  A
                </div>
                <span className="text-lg font-bold text-[#F4F4F5]">Apex Enterprise</span>
              </div>

              <h3 id="modal-title" className="text-2xl font-bold text-[#F4F4F5] tracking-tight">
                Start your 14-day free trial
              </h3>
              <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                Instant cluster access. Zero credit card required. SOC2 & ISO 27001 verified environment.
              </p>

              {/* OAuth Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => handleOAuth('GitHub')}
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-xs font-semibold text-[#F4F4F5] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[44px]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Continue with GitHub</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOAuth('Google')}
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-xs font-semibold text-[#F4F4F5] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[44px]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#21262D]" />
                </div>
                <span className="relative px-3 bg-[#18181B] text-[11px] text-[#A1A1AA] uppercase tracking-wider font-mono">
                  or work email
                </span>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="work-email" className="block text-xs font-semibold text-[#F4F4F5] mb-1.5 font-mono uppercase tracking-wider">
                    Work Email
                  </label>
                  <input
                    id="work-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded bg-[#0D1117] border border-[#21262D] text-sm text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#238636] focus:ring-1 focus:ring-[#238636] transition-all min-h-[44px]"
                  />
                  {error && <p className="mt-1.5 text-xs text-[#EF4444] font-medium font-mono">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded bg-[#238636] hover:bg-[#2EA043] text-white text-sm font-semibold shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <>
                      <span>Deploy Trial Sandbox</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-[#A1A1AA]">
                  By signing up, you agree to our Terms of Service & Privacy Policy.
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#F4F4F5]">Trial Sandbox Provisioned!</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-xs mx-auto">
                We have dispatched a magic login link and Helm agent installation token to your inbox.
              </p>
              <button
                onClick={onClose}
                className="mt-4 w-full py-3 px-4 rounded-xl bg-[#0A0A0C] border border-[#27272A] text-xs font-semibold text-[#F4F4F5] hover:bg-[#222226]"
              >
                Return to Landing Page
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
