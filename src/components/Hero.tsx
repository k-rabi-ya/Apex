'use client'

import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { useTrialModal } from './TrialModalContext'

interface HeroProps {
  onWatchDemo?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onWatchDemo }) => {
  const { openModal } = useTrialModal()

  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-[#0B0E14] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        
        {/* Crisp Un-gradient White Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0F6FC] leading-[1.08]">
          Real-time observability for modern microservices.
        </h1>

        {/* Subhead: Technical & Direct */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#8B949E] max-w-2xl mx-auto leading-relaxed">
          Zero-overhead eBPF tracing, root-cause diagnostics, and infrastructure cost intelligence in a single developer platform.
        </p>

        {/* CTAs: Matte Tactile Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 px-4 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={openModal}
            className="w-full sm:w-auto min-h-[44px] bg-[#238636] hover:bg-[#2EA043] rounded-md px-6 py-3 font-semibold text-sm text-white shadow-sm transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onWatchDemo || openModal}
            className="w-full sm:w-auto min-h-[44px] bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] rounded-md px-6 py-3 font-semibold text-sm text-[#C9D1D9] hover:text-[#F0F6FC] transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#8B949E]" />
            <span>Watch 2-Min Demo</span>
          </button>
        </div>

      </div>
    </section>
  )
}
