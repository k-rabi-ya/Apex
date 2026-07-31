'use client'

import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTrialModal } from './TrialModalContext'

export const Header: React.FC = () => {
  const { openModal } = useTrialModal()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'ARCHITECTURE', href: '#features' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'DOCS', href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0B0E14]/90 backdrop-blur-sm border-b border-[#21262D] transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">

        {/* Minimalist Apex Wordmark Logo */}
        <a href="#" className="flex items-center gap-2.5 group min-h-[44px]">
          <div className="w-7 h-7 bg-[#21262D] border border-[#30363D] rounded flex items-center justify-center font-mono font-bold text-xs text-[#F0F6FC]">
            A
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-[#F0F6FC]">Apex</span>
            <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium bg-[#161B22] text-[#8B949E] border border-[#21262D] rounded">
              v2.0
            </span>
          </div>
        </a>

        {/* Clear Uppercase Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-semibold tracking-wider text-[#8B949E] hover:text-[#F0F6FC] transition-colors duration-150 py-2.5 px-1 min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openModal}
            className="bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] rounded-md px-4 py-2 text-sm font-medium text-[#C9D1D9] hover:text-[#F0F6FC] transition-colors duration-150 min-h-[44px] flex items-center justify-center"
          >
            Log In
          </button>

          <button
            onClick={openModal}
            className="bg-[#238636] hover:bg-[#2EA043] rounded-md px-5 py-2 text-sm font-semibold text-white transition-all duration-150 min-h-[44px] flex items-center gap-1.5 active:scale-[0.98]"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#8B949E] hover:text-[#F0F6FC] rounded-md bg-[#161B22] border border-[#21262D] min-w-[44px] min-h-[44px] flex items-center justify-center"
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
            className="md:hidden border-b border-[#21262D] bg-[#0B0E14] px-4 pt-2 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded text-xs font-mono font-semibold tracking-wider text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#161B22] min-h-[44px] flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-[#21262D] flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                className="w-full text-center px-4 py-2.5 rounded-md text-sm font-medium text-[#C9D1D9] bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] min-h-[44px]"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                className="w-full text-center px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-[#238636] hover:bg-[#2EA043] min-h-[44px]"
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
