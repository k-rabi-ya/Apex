'use client'

import React, { useEffect } from 'react'
import { AlertOctagon, RotateCcw } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Apex Production Crash:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F0F6FC] flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md p-8 rounded-lg bg-[#0D1117] border border-[#21262D] shadow-panel space-y-6">
        
        {/* Branding header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-[#21262D] border border-[#30363D] flex items-center justify-center font-mono font-bold text-xs text-[#F0F6FC]">
            A
          </div>
          <span className="text-base font-bold text-[#F0F6FC]">Apex Console</span>
        </div>

        {/* Warning Icon */}
        <div className="w-14 h-14 rounded bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto">
          <AlertOctagon className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-[#F0F6FC]">
            Telemetry Pipeline Error
          </h2>
          <p className="text-xs text-[#8B949E] leading-relaxed">
            An unexpected crash occurred in the client-side rendering loop. 
            The system context is saved, and alerts have been dispatched.
          </p>
        </div>

        {/* Action recovery button */}
        <button
          onClick={reset}
          className="w-full min-h-[44px] py-2.5 px-4 rounded-md bg-[#238636] hover:bg-[#2EA043] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer active:scale-[0.98]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reload Sandbox Console</span>
        </button>

        <div className="text-[10px] font-mono text-[#8B949E] pt-2 border-t border-[#21262D] break-all">
          Digest: {error.digest || 'No trace diagnostic available'}
        </div>
      </div>
    </div>
  )
}
