'use client'

import React from 'react'

export const Metrics: React.FC = () => {
  const metrics = [
    { label: 'CPU Overhead', value: '< 0.1%', detail: 'eBPF kernel probe' },
    { label: 'Ingestion Rate', value: '1.2M req/s', detail: 'Sub-millisecond processing' },
    { label: 'Cost Savings', value: '34%', detail: 'Average cloud reclaim' },
    { label: 'Compliance', value: 'SOC2 Type II', detail: 'Enterprise certified' },
  ]

  return (
    <section className="bg-[#0B0E14] border-y border-[#21262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#21262D]">
          {metrics.map((m, idx) => (
            <div key={idx} className="py-6 px-4 md:px-6 flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F0F6FC] mt-1">
                {m.label}
              </div>
              <div className="text-[11px] font-mono text-[#8B949E] mt-0.5">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
