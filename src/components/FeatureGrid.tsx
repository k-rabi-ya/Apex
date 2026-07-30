'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Terminal,
  Brain,
  Bell,
  ShieldCheck,
  Zap,
  CheckCircle,
  AlertCircle,
  Slack,
  Lock,
  FileCheck,
  Globe,
  Database,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const sampleLogs = [
  { level: 'INFO', time: '14:27:01.002', msg: 'eBPF kernel probe initialized on eth0 (socket buffer ring: 64MB)' },
  { level: 'TRACE', time: '14:27:01.120', msg: 'Span #89012 HTTP/2 POST /order-service p99 latency 1.4ms [OK]' },
  { level: 'WARN', time: '14:27:01.445', msg: 'Postgres connection pool load reached 82% capacity on shard-04' },
  { level: 'AI-CORRELATE', time: '14:27:01.490', msg: 'Root cause identified: Connection leak in db_pool.go:L142' },
  { level: 'METRIC', time: '14:27:01.810', msg: 'Reclaimed 400MB idle memory buffer across 12 pods' },
]

export const FeatureGrid: React.FC = () => {
  const [logs, setLogs] = useState(sampleLogs)
  const [aiAnalyzing, setAiAnalyzing] = useState(false)

  // Simulate streaming log terminal physics
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toISOString().substring(11, 23)
      const templates = [
        { level: 'TRACE', msg: `GET /api/v2/user-profile HTTP/2 status 200 latency ${(Math.random() * 2 + 0.5).toFixed(2)}ms` },
        { level: 'INFO', msg: 'Kubernetes ingress controller auto-scaled +4 replicas in us-east-1' },
        { level: 'METRIC', msg: `p99 latency optimized across 342 active microservice nodes` },
      ]
      const pick = templates[Math.floor(Math.random() * templates.length)]
      setLogs((prev) => [...prev.slice(1), { level: pick.level, time: timestamp, msg: pick.msg }])
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="features" aria-label="Product Features and Architecture" className="py-24 bg-[#0A0A0C] relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Observability Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F4F5] tracking-tight">
            Engineered for high-scale microservices.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Eliminate traditional APM sampling loss, high CPU overhead, and manual dashboards.
            Apex captures every single trace with zero code modification.
          </p>
        </div>

        {/* 4-Card Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* CARD 1 (Large - 2 Columns): Real-Time Telemetry Stream & Log Terminal */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl bg-[#18181B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#6366F1]/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1]">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0A0A0C] text-[#06B6D4] border border-[#27272A] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                  eBPF Telemetry Stream
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F5]">
                Zero-Bytecode Kernel Telemetry Stream
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] max-w-xl leading-relaxed">
                Stream 100% of payload traces directly from Linux kernel probes. No SDK wrappers,
                no runtime patches, and zero impact on application throughput.
              </p>
            </div>

            {/* Interactive Terminal Window */}
            <div className="mt-8 rounded-xl bg-[#0A0A0C] border border-[#27272A] p-4 font-mono text-xs overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#27272A] text-[#A1A1AA] text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="ml-2 font-semibold text-[#F4F4F5]">apex-agent@node-prod-01:~</span>
                </div>
                <span>tail -f /var/log/apex/telemetry.log</span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#A1A1AA] select-none">{log.time}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${log.level === 'WARN'
                          ? 'bg-[#F59E0B]/20 text-[#F59E0B]'
                          : log.level === 'AI-CORRELATE'
                            ? 'bg-[#6366F1]/20 text-[#38BDF8]'
                            : log.level === 'METRIC'
                              ? 'bg-[#06B6D4]/20 text-[#06B6D4]'
                              : 'bg-[#10B981]/20 text-[#10B981]'
                        }`}
                    >
                      {log.level}
                    </span>
                    <span className="text-[#F4F4F5] truncate">{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 2 (Medium - 1 Column): AI Root Cause Analysis */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl bg-[#18181B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4]">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                  99.8% Accuracy
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">
                AI Incident Root Cause Analysis
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                Autonomous diagnostic engine maps cascading microservice dependencies and pinpoints exact commit culprits in seconds.
              </p>
            </div>

            {/* Diagnostic Card Preview */}
            <div className="mt-6 p-4 rounded-xl bg-[#0A0A0C] border border-[#27272A] space-y-3 text-xs">
              <div className="flex items-center justify-between text-[#A1A1AA]">
                <span>Incident #INC-9402</span>
                <span className="text-[#F59E0B] font-medium">Investigated in 1.2s</span>
              </div>
              <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A]">
                <div className="font-semibold text-[#F4F4F5] mb-1">Root Cause Hypothesis</div>
                <p className="text-[#A1A1AA] text-[11px]">
                  Unindexed MongoDB query in <span className="text-[#06B6D4] font-mono">user_auth.go:88</span> causing buffer pool exhaustion.
                </p>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[#10B981] flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Automated Patch Suggested
                </span>
                <span className="text-[#6366F1] font-mono hover:underline cursor-pointer">View Diff →</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 (Medium - 1 Column): Instant Slack & PagerDuty Alerts */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl bg-[#18181B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#6366F1]/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1]">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#A1A1AA] bg-[#0A0A0C] px-2 py-0.5 rounded border border-[#27272A]">
                  &lt; 500ms Dispatch
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">
                Smart Webhook & Slack Alerts
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                Zero notification fatigue. Apex groups thousands of raw signals into unified, actionable incident cards sent directly to Slack, PagerDuty, or Microsoft Teams.
              </p>
            </div>

            {/* Notification Badge Preview */}
            <div className="mt-6 p-3.5 rounded-xl bg-[#0A0A0C] border border-[#27272A] space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#4A154B] flex items-center justify-center text-white text-[10px] font-bold">
                  #
                </div>
                <span className="text-xs font-bold text-[#F4F4F5]">#alerts-prod-oncall</span>
                <span className="text-[10px] text-[#A1A1AA] ml-auto">APP · Now</span>
              </div>
              <div className="p-2 bg-[#18181B] rounded border border-[#27272A] text-xs space-y-1">
                <div className="text-[#F59E0B] font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> High p99 Latency Spikes Avoided
                </div>
                <div className="text-[11px] text-[#A1A1AA]">
                  Rerouted 45% traffic to secondary region us-west-2 automatically.
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 4 (Large - 2 Columns): Enterprise Security & Compliance Badges */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl bg-[#18181B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#10B981]/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded font-semibold">
                  Zero Trust Enforced
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F5]">
                Enterprise Security & Data Sovereignty
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] max-w-xl leading-relaxed">
                Your payload data never leaves your infrastructure. Full SOC2 Type II, ISO 27001,
                and GDPR compliance with client-side PII scrubbing filters before telemetry ingestion.
              </p>
            </div>

            {/* Compliance Badges Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-[#0A0A0C] border border-[#27272A] text-center space-y-1.5">
                <Lock className="w-5 h-5 text-[#38BDF8] mx-auto" />
                <div className="text-xs font-bold text-[#F4F4F5]">SOC2 Type II</div>
                <div className="text-[10px] text-[#A1A1AA]">Audited Annually</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0C] border border-[#27272A] text-center space-y-1.5">
                <FileCheck className="w-5 h-5 text-[#6366F1] mx-auto" />
                <div className="text-xs font-bold text-[#F4F4F5]">ISO 27001</div>
                <div className="text-[10px] text-[#A1A1AA]">Certified Controls</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0C] border border-[#27272A] text-center space-y-1.5">
                <Globe className="w-5 h-5 text-[#10B981] mx-auto" />
                <div className="text-xs font-bold text-[#F4F4F5]">GDPR Compliant</div>
                <div className="text-[10px] text-[#A1A1AA]">EU Data Residency</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0C] border border-[#27272A] text-center space-y-1.5">
                <Database className="w-5 h-5 text-[#F59E0B] mx-auto" />
                <div className="text-xs font-bold text-[#F4F4F5]">AES-256 Bit</div>
                <div className="text-[10px] text-[#A1A1AA]">At-Rest & Transit</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
