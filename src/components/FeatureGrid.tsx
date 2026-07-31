'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Terminal,
  Brain,
  Bell,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Lock,
  FileCheck,
  Globe,
  Database,
  Cpu,
} from 'lucide-react'

const sampleLogs = [
  { level: 'INFO', time: '14:27:01.002', msg: 'eBPF kernel probe initialized on eth0 (socket buffer ring: 64MB)' },
  { level: 'TRACE', time: '14:27:01.120', msg: 'Span #89012 HTTP/2 POST /order-service p99 latency 1.4ms [OK]' },
  { level: 'WARN', time: '14:27:01.445', msg: 'Postgres connection pool load reached 82% capacity on shard-04' },
  { level: 'DIAGNOSTIC', time: '14:27:01.490', msg: 'Root cause identified: Connection leak in db_pool.go:L142' },
  { level: 'METRIC', time: '14:27:01.810', msg: 'Reclaimed 400MB idle memory buffer across 12 pods' },
]

export const FeatureGrid: React.FC = () => {
  const [logs, setLogs] = useState(sampleLogs)

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
    <section id="features" aria-label="Product Features and Architecture" className="py-20 bg-[#0B0E14] relative border-b border-[#21262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B22] border border-[#21262D] text-xs font-mono font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture Specification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F0F6FC] tracking-tight">
            Engineered for high-scale microservices.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8B949E] leading-relaxed">
            Eliminate traditional APM sampling loss, high CPU overhead, and manual dashboards.
            Apex captures every single trace with zero bytecode modification.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* CARD 1 (Large - 2 Columns): Real-Time Telemetry Stream & Log Terminal */}
          <div className="lg:col-span-2 rounded-lg bg-[#0D1117] border border-[#21262D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded bg-[#161B22] border border-[#21262D] flex items-center justify-center text-[#10B981]">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161B22] text-emerald-400 border border-[#21262D] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  eBPF Telemetry Stream
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F0F6FC]">
                Zero-Bytecode Kernel Telemetry Stream
              </h3>
              <p className="mt-2 text-sm text-[#8B949E] max-w-xl leading-relaxed">
                Stream 100% of payload traces directly from Linux kernel probes. No SDK wrappers,
                no runtime patches, and zero impact on application throughput.
              </p>
            </div>

            {/* Interactive Terminal Window */}
            <div className="mt-8 rounded bg-[#161B22] border border-[#21262D] p-4 font-mono text-xs overflow-hidden shadow-subtle">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#21262D] text-[#8B949E] text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-semibold text-[#F0F6FC]">apex-agent@node-prod-01:~</span>
                </div>
                <span>tail -f /var/log/apex/telemetry.log</span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#8B949E] select-none">{log.time}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        log.level === 'WARN'
                          ? 'bg-[#FFBD2E]/10 text-[#FFBD2E] border border-[#FFBD2E]/30'
                          : log.level === 'DIAGNOSTIC'
                            ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {log.level}
                    </span>
                    <span className="text-[#F0F6FC] truncate">{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2 (Medium - 1 Column): AI Root Cause Analysis */}
          <div className="rounded-lg bg-[#0D1117] border border-[#21262D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded bg-[#161B22] border border-[#21262D] flex items-center justify-center text-[#10B981]">
                  <Brain className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-[#161B22] px-2 py-0.5 rounded border border-[#21262D]">
                  99.8% Accuracy
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F0F6FC]">
                Automated Root Cause Diagnostics
              </h3>
              <p className="mt-2 text-sm text-[#8B949E] leading-relaxed">
                Autonomous diagnostic engine maps cascading microservice dependencies and pinpoints exact commit culprits in seconds.
              </p>
            </div>

            {/* Diagnostic Card Preview */}
            <div className="mt-6 p-4 rounded bg-[#161B22] border border-[#21262D] space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between text-[#8B949E]">
                <span>Incident #INC-9402</span>
                <span className="text-[#FFBD2E]">Investigated 1.2s</span>
              </div>
              <div className="p-2.5 rounded bg-[#0D1117] border border-[#21262D]">
                <div className="font-semibold text-[#F0F6FC] mb-1">Root Cause</div>
                <p className="text-[#8B949E] text-[11px]">
                  Unindexed MongoDB query in <span className="text-[#10B981]">user_auth.go:88</span> causing buffer pool exhaustion.
                </p>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Patch Ready
                </span>
                <span className="text-[#10B981] hover:underline cursor-pointer">View Diff →</span>
              </div>
            </div>
          </div>

          {/* CARD 3 (Medium - 1 Column): Webhook & Slack Alerts */}
          <div className="rounded-lg bg-[#0D1117] border border-[#21262D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded bg-[#161B22] border border-[#21262D] flex items-center justify-center text-[#10B981]">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-[#8B949E] bg-[#161B22] px-2 py-0.5 rounded border border-[#21262D]">
                  &lt; 500ms Dispatch
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F0F6FC]">
                Webhook & Incident Routing
              </h3>
              <p className="mt-2 text-sm text-[#8B949E] leading-relaxed">
                Groups raw telemetry signals into consolidated incident reports sent directly to Slack, PagerDuty, or Microsoft Teams.
              </p>
            </div>

            {/* Notification Badge Preview */}
            <div className="mt-6 p-3.5 rounded bg-[#161B22] border border-[#21262D] space-y-2 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#21262D] flex items-center justify-center text-[#F0F6FC] text-[10px] font-bold">
                  #
                </div>
                <span className="text-xs font-bold text-[#F0F6FC]">#alerts-prod-oncall</span>
                <span className="text-[10px] text-[#8B949E] ml-auto">NOW</span>
              </div>
              <div className="p-2 bg-[#0D1117] rounded border border-[#21262D] text-xs space-y-1">
                <div className="text-[#FFBD2E] font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> High p99 Latency Spikes Mitigated
                </div>
                <div className="text-[11px] text-[#8B949E]">
                  Traffic automatically load-balanced across secondary regions.
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4 (Large - 2 Columns): Enterprise Security */}
          <div className="lg:col-span-2 rounded-lg bg-[#0D1117] border border-[#21262D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded bg-[#161B22] border border-[#21262D] flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-[#161B22] px-2.5 py-1 rounded font-semibold border border-[#21262D]">
                  Zero Trust Enforced
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F0F6FC]">
                Enterprise Security & Data Sovereignty
              </h3>
              <p className="mt-2 text-sm text-[#8B949E] max-w-xl leading-relaxed">
                Payload telemetry remains strictly inside your VPC. Fully compliant with SOC2 Type II, ISO 27001,
                and GDPR standard controls.
              </p>
            </div>

            {/* Compliance Badges Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded bg-[#161B22] border border-[#21262D] text-center space-y-1 font-mono">
                <Lock className="w-4 h-4 text-[#10B981] mx-auto" />
                <div className="text-xs font-bold text-[#F0F6FC]">SOC2 Type II</div>
                <div className="text-[10px] text-[#8B949E]">Audited</div>
              </div>

              <div className="p-3.5 rounded bg-[#161B22] border border-[#21262D] text-center space-y-1 font-mono">
                <FileCheck className="w-4 h-4 text-[#10B981] mx-auto" />
                <div className="text-xs font-bold text-[#F0F6FC]">ISO 27001</div>
                <div className="text-[10px] text-[#8B949E]">Certified</div>
              </div>

              <div className="p-3.5 rounded bg-[#161B22] border border-[#21262D] text-center space-y-1 font-mono">
                <Globe className="w-4 h-4 text-emerald-400 mx-auto" />
                <div className="text-xs font-bold text-[#F0F6FC]">GDPR</div>
                <div className="text-[10px] text-[#8B949E]">EU Residency</div>
              </div>

              <div className="p-3.5 rounded bg-[#161B22] border border-[#21262D] text-center space-y-1 font-mono">
                <Database className="w-4 h-4 text-[#FFBD2E] mx-auto" />
                <div className="text-xs font-bold text-[#F0F6FC]">AES-256</div>
                <div className="text-[10px] text-[#8B949E]">Encrypted</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
