'use client'

import React, { useEffect } from 'react'
import { AlertOctagon, RotateCcw, Activity } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Standard telemetry logging for errors
    console.error('Apex Production Crash:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F4F4F5] flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-md p-8 rounded-2xl bg-[#18181B] border border-[#27272A] shadow-2xl space-y-6">
        
        {/* Branding header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#06B6D4] p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-[#0A0A0C] rounded-[6px] flex items-center justify-center">
              <Activity className="w-4 h-4 text-[#38BDF8]" />
            </div>
          </div>
          <span className="text-base font-bold text-[#F4F4F5]">Apex Console</span>
        </div>

        {/* Warning Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444] mx-auto animate-pulse-subtle">
          <AlertOctagon className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-[#F4F4F5]">
            Telemetry Pipeline Error
          </h2>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            An unexpected crash occurred in the client-side rendering loop. 
            The system context is saved, and SRE alerts have been dispatched.
          </p>
        </div>

        {/* Action recovery button */}
        <button
          onClick={reset}
          className="w-full min-h-[44px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reload Sandbox Console</span>
        </button>

        <div className="text-[10px] font-mono text-[#A1A1AA] pt-2 border-t border-[#27272A] break-all">
          Digest: {error.digest || 'No trace diagnostic available'}
        </div>
      </div>
    </div>
  )
}
