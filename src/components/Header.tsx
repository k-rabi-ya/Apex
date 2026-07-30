'use client'

import React, { useState } from 'react'
import { Activity, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTrialModal } from './TrialModalContext'

export const Header: React.FC = () => {
  const { openModal } = useTrialModal()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Architecture', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#faq' },
  ]

  const springTransition = {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0C]/80 border-b border-[#27272A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group min-h-[44px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#06B6D4] p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0A0A0C] rounded-[10px] flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#38BDF8] group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-bold tracking-tight text-[#F4F4F5]">Apex</span>
            <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium bg-[#18181B] text-[#A1A1AA] border border-[#27272A] rounded">
              v2.0
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (with touch margins) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-150 relative py-2.5 px-1 min-h-[44px] flex items-center group"
            >
              {link.name}
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={openModal}
            className="text-sm font-bold text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-150 px-4 py-2.5 min-h-[44px]"
          >
            Log In
          </button>

          <motion.button
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
            onClick={openModal}
            className="relative group inline-flex items-center justify-center text-sm font-bold text-white px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#06B6D4] transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 min-h-[44px]"
          >
            <span className="flex items-center gap-1.5">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A1A1AA] hover:text-[#F4F4F5] rounded-xl bg-[#18181B] border border-[#27272A] min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#27272A] bg-[#0A0A0C]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1.5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-base font-semibold text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#18181B] min-h-[44px] flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-[#27272A] flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                className="w-full text-center px-4 py-3 rounded-xl text-sm font-bold text-[#F4F4F5] bg-[#18181B] border border-[#27272A] min-h-[44px]"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                className="w-full text-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] min-h-[44px]"
              >
                Start Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
