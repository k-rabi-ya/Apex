'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  ArrowRight,
  TrendingDown,
  Server,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Zap,
} from 'lucide-react'
import { useTrialModal } from './TrialModalContext'

type TabType = 'latency' | 'errors' | 'spend'

export const HeroSection: React.FC = () => {
  const { openModal } = useTrialModal()
  const [activeTab, setActiveTab] = useState<TabType>('latency')
  const [demoPlaying, setDemoPlaying] = useState(false)

  // Spring physics configuration
  const springTransition = {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  }

  const tabs = [
    { id: 'latency', label: 'Latency', icon: Zap },
    { id: 'errors', label: 'Error Rate', icon: AlertTriangle },
    { id: 'spend', label: 'Cloud Spend', icon: DollarSign },
  ]

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[400px] bg-gradient-to-tr from-[#6366F1]/18 via-[#06B6D4]/12 to-transparent blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Announcement Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#18181B]/95 border border-[#27272A] hover:border-[#6366F1]/60 transition-all duration-300 cursor-pointer shadow-md shadow-black/40 mb-8 group min-h-[44px]"
            onClick={openModal}
            role="button"
            aria-label="Apex 2.0 release details"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
            </span>
            <span className="text-xs font-semibold text-[#F4F4F5]">
              Apex 2.0 is live: <span className="text-[#A1A1AA] font-normal">Real-time APM & Cost Intelligence</span>
            </span>
            <span className="text-xs text-[#6366F1] font-bold group-hover:translate-x-0.5 transition-transform duration-200">
              ↗
            </span>
          </motion.div>

          {/* Main H1 Headline with Glowing Background */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F4F4F5] leading-[1.08] relative"
          >
            Observe everything.{' '}
            <span className="gradient-accent-text block sm:inline mt-1.5 sm:mt-0">
              Ship 10x faster.
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
          >
            The zero-overhead APM platform built for high-scale microservices. Instant eBPF tracing, 
            automated AI root-cause diagnostics, and cloud cost reclamation in a unified console.
          </motion.p>

          {/* Dual CTAs with Touch Targets */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 max-w-md sm:max-w-none mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
              onClick={openModal}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#06B6D4] text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
              onClick={() => setDemoPlaying(!demoPlaying)}
              className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl bg-[#18181B] hover:bg-[#222226] text-[#F4F4F5] border border-[#27272A] hover:border-[#3F3F46] font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-full bg-[#27272A] flex items-center justify-center group-hover:bg-[#6366F1]/20 group-hover:text-[#6366F1] transition-colors duration-200">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>{demoPlaying ? 'Pause Live Demo' : 'Watch 2-Min Demo'}</span>
            </motion.button>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#27272A]/50 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl mx-auto"
          >
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#F4F4F5] font-mono tracking-tight">&lt; 0.1%</div>
              <div className="text-xs text-[#A1A1AA] mt-1">CPU Overhead</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#38BDF8] font-mono tracking-tight">1.2M req/s</div>
              <div className="text-xs text-[#A1A1AA] mt-1">Ingestion Rate</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#F4F4F5] font-mono tracking-tight">34% avg</div>
              <div className="text-xs text-[#A1A1AA] mt-1">Spend Reductions</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#10B981] font-mono tracking-tight">SOC2 Type II</div>
              <div className="text-xs text-[#A1A1AA] mt-1">Certified Platform</div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Interactive Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative mx-auto max-w-5xl"
          role="region"
          aria-label="Interactive performance statistics dashboard"
        >
          {/* Glowing Border Wrapper */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#27272A] via-[#18181B] to-[#0A0A0C] shadow-2xl shadow-black/90">
            <div className="bg-[#0A0A0C] rounded-2xl overflow-hidden border border-[#27272A]/80">
              
              {/* Dashboard Top Header Bar */}
              <div className="bg-[#18181B]/80 px-4 py-3.5 border-b border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="flex items-center gap-1.5 mr-4">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#0A0A0C] rounded-lg border border-[#27272A] text-xs text-[#A1A1AA] font-mono w-full sm:w-auto justify-center sm:justify-start">
                    <Server className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>prod-k8s-cluster-01a</span>
                  </div>
                </div>

                {/* Tab Switches (Spring animated) */}
                <div className="flex items-center bg-[#0A0A0C] p-1.5 rounded-xl border border-[#27272A] w-full sm:w-auto justify-between">
                  {tabs.map((tab) => {
                    const TabIcon = tab.icon
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className="relative min-h-[40px] px-4 py-2 rounded-lg text-xs font-bold transition-colors duration-200 flex items-center gap-2 flex-1 sm:flex-none justify-center focus:outline-none"
                        aria-selected={isActive}
                        role="tab"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeTabIndicator"
                            className="absolute inset-0 bg-[#6366F1] rounded-lg -z-0"
                            transition={springTransition}
                          />
                        )}
                        <TabIcon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-white' : 'text-[#A1A1AA]'}`} />
                        <span className={`relative z-10 ${isActive ? 'text-white' : 'text-[#A1A1AA] hover:text-[#F4F4F5]'}`}>
                          {tab.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-[#0A0A0C] min-h-[380px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === 'latency' && (
                    <motion.div
                      key="latency"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA] flex items-center justify-between">
                            <span>p99 Response Latency</span>
                            <span className="text-[#10B981] font-mono font-bold text-[11px]">-14.2%</span>
                          </div>
                          <div className="text-2xl font-bold text-[#F4F4F5] mt-2 font-mono">4.18 ms</div>
                          <div className="text-[11px] text-[#A1A1AA] mt-1">Threshold limit: 10.0 ms</div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA] flex items-center justify-between">
                            <span>Total Ingestion</span>
                            <span className="text-[#38BDF8] font-mono text-[11px]">Realtime</span>
                          </div>
                          <div className="text-2xl font-bold text-[#38BDF8] mt-2 font-mono">842,104 req/s</div>
                          <div className="text-[11px] text-[#A1A1AA] mt-1">Across 148 nodes</div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA] flex items-center justify-between">
                            <span>Edge Availability</span>
                            <span className="text-[#10B981] font-mono text-[11px]">Healthy</span>
                          </div>
                          <div className="text-2xl font-bold text-[#F4F4F5] mt-2 font-mono">24 / 24 Edge</div>
                          <div className="text-[11px] text-[#A1A1AA] mt-1">No latency spikes</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#18181B]/60 border border-[#27272A]">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-[#F4F4F5]">Live Latency Distribution (Last 60 Minutes)</span>
                          <div className="flex items-center gap-4 text-xs font-mono text-[#A1A1AA]">
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#6366F1]"></span> p99 (4.18ms)</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]"></span> p50 (1.02ms)</span>
                          </div>
                        </div>
                        <div className="h-44 w-full relative flex items-end pt-4">
                          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 120">
                            <defs>
                              <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="30" x2="500" y2="30" stroke="#27272A" strokeDasharray="3 3" />
                            <line x1="0" y1="70" x2="500" y2="70" stroke="#27272A" strokeDasharray="3 3" />
                            <path
                              d="M0,80 Q75,40 150,65 T300,35 T450,50 T500,30 L500,120 L0,120 Z"
                              fill="url(#latencyGradient)"
                            />
                            <path
                              d="M0,80 Q75,40 150,65 T300,35 T450,50 T500,30"
                              fill="none"
                              stroke="#6366F1"
                              strokeWidth="3"
                            />
                            <path
                              d="M0,105 Q75,90 150,95 T300,85 T450,90 T500,80"
                              fill="none"
                              stroke="#06B6D4"
                              strokeWidth="2"
                              strokeDasharray="4 2"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'errors' && (
                    <motion.div
                      key="errors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA]">HTTP 5xx Error Rate</div>
                          <div className="text-2xl font-bold text-[#10B981] mt-2 font-mono">0.0018%</div>
                          <div className="text-[11px] text-[#A1A1AA] mt-1">Normal target range</div>
                        </div>
                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA]">Unhandled Exceptions</div>
                          <div className="text-2xl font-bold text-[#F4F4F5] mt-2 font-mono">0 Detected</div>
                          <div className="text-[11px] text-[#10B981] mt-1">All issues auto-mitigated</div>
                        </div>
                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA]">Synthetic Checks</div>
                          <div className="text-2xl font-bold text-[#F4F4F5] mt-2 font-mono">100% Success</div>
                          <div className="text-[11px] text-[#A1A1AA] mt-1">Across 12 global regions</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#18181B]/80 border border-[#27272A] space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-[#27272A]">
                          <span className="font-bold text-[#F4F4F5]">Live Trace Stream</span>
                          <span className="text-[#38BDF8]">Sampling: 100% full-body traces</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0A0C] border border-[#27272A]">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-[#10B981]/25 text-[#10B981] font-bold text-[10px]">200 OK</span>
                            <span className="text-[#F4F4F5]">POST /api/v2/telemetry/ingest</span>
                          </div>
                          <span className="text-[#A1A1AA]">1.12ms</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded bg-[#0A0A0C] border border-[#27272A]">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-[#10B981]/25 text-[#10B981] font-bold text-[10px]">200 OK</span>
                            <span className="text-[#F4F4F5]">GET /api/v2/auth/verify-token</span>
                          </div>
                          <span className="text-[#A1A1AA]">0.84ms</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'spend' && (
                    <motion.div
                      key="spend"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA]">Projected Monthly Cost</div>
                          <div className="text-2xl font-bold text-[#F4F4F5] mt-2 font-mono">$12,420</div>
                          <div className="text-[11px] text-[#10B981] mt-1 flex items-center gap-1 font-bold">
                            <TrendingDown className="w-3 h-3" /> -28.4% vs baseline
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA]">Reclaimed Resources</div>
                          <div className="text-2xl font-bold text-[#06B6D4] mt-2 font-mono">$4,850/mo</div>
                          <div className="text-[11px] text-[#A1A1AA] mt-1">Orphan pods reclaimed</div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] shadow-inner">
                          <div className="text-xs text-[#A1A1AA]">Cost Optimization Engine</div>
                          <div className="text-2xl font-bold text-[#10B981] mt-2 font-mono">Running</div>
                          <div className="text-[11px] text-[#A1A1AA] mt-1">AWS Spot auto-scaling active</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#18181B]/60 border border-[#27272A] space-y-4">
                        <div className="flex items-center justify-between text-xs font-bold text-[#F4F4F5]">
                          <span>Multi-Cloud Resource Allocation</span>
                          <span className="font-mono text-[#A1A1AA]">AWS EKS (62%) · GCP (24%) · On-Prem (14%)</span>
                        </div>
                        <div className="h-4.5 w-full bg-[#0A0A0C] rounded-full overflow-hidden flex p-0.5 border border-[#27272A]">
                          <div className="h-full bg-[#6366F1] rounded-l-full w-[62%]" />
                          <div className="h-full bg-[#06B6D4] w-[24%]" />
                          <div className="h-full bg-[#10B981] rounded-r-full w-[14%]" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Bar */}
                <div className="pt-4 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A1A1AA]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>eBPF Kernel Agent: Running (Zero overhead profiling)</span>
                  </div>
                  <div className="flex items-center gap-4 font-mono">
                    <span>Cluster Sync: &lt; 10ms</span>
                    <button onClick={openModal} className="text-[#6366F1] font-semibold hover:underline focus:outline-none min-h-[36px] flex items-center justify-center">
                      Launch Cloud Console →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
