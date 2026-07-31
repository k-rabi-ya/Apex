'use client'

import React from 'react'
import { Github, Twitter, Linkedin, Disc as Discord } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0E14] border-t border-[#21262D] pt-16 pb-12 text-xs text-[#8B949E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Status Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#21262D] border border-[#30363D] flex items-center justify-center font-mono font-bold text-xs text-[#F0F6FC]">
                A
              </div>
              <span className="text-lg font-bold text-[#F0F6FC]">Apex</span>
            </div>
            <p className="text-xs text-[#8B949E] max-w-sm leading-relaxed">
              Real-time APM and cloud cost intelligence platform. Zero-overhead eBPF tracing for modern microservices.
            </p>
            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#161B22] border border-[#21262D] text-[11px] font-mono text-[#F0F6FC]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#F0F6FC] uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-[#F0F6FC] transition-colors">eBPF Telemetry</a></li>
              <li><a href="#features" className="hover:text-[#F0F6FC] transition-colors">Diagnostics Engine</a></li>
              <li><a href="#features" className="hover:text-[#F0F6FC] transition-colors">Cost Reclamation</a></li>
              <li><a href="#features" className="hover:text-[#F0F6FC] transition-colors">Incident Routing</a></li>
              <li><a href="#pricing" className="hover:text-[#F0F6FC] transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#F0F6FC] uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-[#F0F6FC] transition-colors">Documentation</a></li>
              <li><a href="#faq" className="hover:text-[#F0F6FC] transition-colors">API Reference</a></li>
              <li><a href="#faq" className="hover:text-[#F0F6FC] transition-colors">Helm Install</a></li>
              <li><a href="#faq" className="hover:text-[#F0F6FC] transition-colors">SOC2 Security Portal</a></li>
              <li><a href="#faq" className="hover:text-[#F0F6FC] transition-colors">Changelog v2.0</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#F0F6FC] uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F0F6FC] transition-colors">About Apex</a></li>
              <li><a href="#" className="hover:text-[#F0F6FC] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#F0F6FC] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F0F6FC] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#F0F6FC] transition-colors">Contact Engineering</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Social Bar */}
        <div className="pt-8 border-t border-[#21262D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-[#8B949E]">
            © {new Date().getFullYear()} Apex Systems Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#8B949E]">
            <a href="#" className="hover:text-[#F0F6FC] transition-colors" aria-label="GitHub"><Github className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#F0F6FC] transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#F0F6FC] transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#F0F6FC] transition-colors" aria-label="Discord"><Discord className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
