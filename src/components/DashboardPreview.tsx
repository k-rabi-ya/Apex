'use client'

import React, { useState } from 'react'
import { Server, Activity, AlertCircle, DollarSign, Terminal as TerminalIcon } from 'lucide-react'

type TabType = 'latency' | 'errors' | 'spend'

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('latency')

  const tabs: { id: TabType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'latency', label: 'Latency', icon: Activity },
    { id: 'errors', label: 'Error Rate', icon: AlertCircle },
    { id: 'spend', label: 'Cloud Spend', icon: DollarSign },
  ]

  return (
    <section className="py-12 bg-[#0B0E14] bg-grid-pattern border-b border-[#21262D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Developer Console Card Container */}
        <div className="rounded-lg border border-[#21262D] bg-[#0D1117] overflow-hidden shadow-panel">
          
          {/* Slate Terminal Bar with Traffic Lights */}
          <div className="bg-[#161B22] px-4 py-3 border-b border-[#21262D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* Cluster Identifier */}
              <div className="flex items-center gap-2 px-2.5 py-1 bg-[#0D1117] rounded border border-[#21262D] text-xs text-[#8B949E] font-mono">
                <Server className="w-3.5 h-3.5 text-[#10B981]" />
                <span>prod-us-east-1 / telemetry-cluster</span>
              </div>
            </div>

            {/* Monospaced Tabs with Sharp Active State */}
            <div className="flex items-center gap-1 bg-[#0D1117] p-1 rounded border border-[#21262D]">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-medium flex items-center gap-1.5 transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#21262D] text-[#F0F6FC] border border-[#30363D]'
                        : 'text-[#8B949E] hover:text-[#F0F6FC]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#10B981]' : 'text-[#8B949E]'}`} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Console Output Body */}
          <div className="p-6 bg-[#0D1117] font-mono text-xs text-[#C9D1D9]">
            {activeTab === 'latency' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E] flex justify-between">
                      <span>p99 Latency</span>
                      <span className="text-emerald-400 font-bold">-14.2%</span>
                    </div>
                    <div className="text-xl font-bold text-[#F0F6FC] mt-1">4.18 ms</div>
                    <div className="text-[10px] text-[#8B949E] mt-1">SLA Target: 10.0ms</div>
                  </div>

                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E] flex justify-between">
                      <span>Ingestion Throughput</span>
                      <span className="text-[#10B981] font-bold">100%</span>
                    </div>
                    <div className="text-xl font-bold text-[#F0F6FC] mt-1">1,240,890 req/s</div>
                    <div className="text-[10px] text-[#8B949E] mt-1">Across 148 nodes</div>
                  </div>

                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E] flex justify-between">
                      <span>eBPF Kernel Probes</span>
                      <span className="text-emerald-400 font-bold">Active</span>
                    </div>
                    <div className="text-xl font-bold text-[#F0F6FC] mt-1">Zero Overhead</div>
                    <div className="text-[10px] text-[#8B949E] mt-1">No bytecode mutation</div>
                  </div>
                </div>

                {/* SVG Latency Chart */}
                <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold text-[#F0F6FC]">Live Latency Metric Stream (60s window)</span>
                    <div className="flex items-center gap-4 text-[11px] text-[#8B949E]">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]" /> p99</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> p50</span>
                    </div>
                  </div>
                  <div className="h-36 w-full pt-2">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 100">
                      <line x1="0" y1="20" x2="500" y2="20" stroke="#21262D" strokeDasharray="2 2" />
                      <line x1="0" y1="60" x2="500" y2="60" stroke="#21262D" strokeDasharray="2 2" />
                      <path
                        d="M0,70 Q80,30 160,55 T320,25 T480,40 T500,20"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,90 Q80,75 160,80 T320,70 T480,75 T500,65"
                        fill="none"
                        stroke="#34D399"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'errors' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E]">HTTP 5xx Rate</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">0.0012%</div>
                  </div>
                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E]">Unhandled Exceptions</div>
                    <div className="text-xl font-bold text-[#F0F6FC] mt-1">0 Detected</div>
                  </div>
                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E]">Health Status</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">100% Operational</div>
                  </div>
                </div>

                <div className="p-4 rounded bg-[#161B22] border border-[#21262D] space-y-2">
                  <div className="text-xs font-semibold text-[#F0F6FC] pb-2 border-b border-[#21262D] flex items-center gap-2">
                    <TerminalIcon className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Trace Log Stream</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#0D1117] border border-[#21262D] text-[11px]">
                    <span className="text-emerald-400">200 OK</span>
                    <span className="text-[#F0F6FC]">POST /api/v2/telemetry/ingest</span>
                    <span className="text-[#8B949E]">0.82ms</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#0D1117] border border-[#21262D] text-[11px]">
                    <span className="text-emerald-400">200 OK</span>
                    <span className="text-[#F0F6FC]">GET /api/v2/auth/verify-token</span>
                    <span className="text-[#8B949E]">0.45ms</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'spend' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E]">Projected Monthly Spend</div>
                    <div className="text-xl font-bold text-[#F0F6FC] mt-1">$12,420</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">-28.4% vs baseline</div>
                  </div>
                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E]">Reclaimed Resources</div>
                    <div className="text-xl font-bold text-[#10B981] mt-1">$4,850/mo</div>
                    <div className="text-[10px] text-[#8B949E] mt-0.5">Idle pod reclamation</div>
                  </div>
                  <div className="p-4 rounded bg-[#161B22] border border-[#21262D]">
                    <div className="text-[11px] text-[#8B949E]">Cost Optimization Engine</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">Active</div>
                    <div className="text-[10px] text-[#8B949E] mt-0.5">Auto-tuning EKS pods</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Console Footer */}
          <div className="px-4 py-2.5 bg-[#161B22] border-t border-[#21262D] flex items-center justify-between text-[11px] text-[#8B949E] font-mono">
            <span>Status: eBPF Profiler v2.0 running</span>
            <span>Latency: &lt; 0.1ms</span>
          </div>

        </div>

      </div>
    </section>
  )
}
