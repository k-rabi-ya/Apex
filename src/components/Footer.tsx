'use client'

import React from 'react'
import { Activity, Github, Twitter, Linkedin, Disc as Discord, ShieldCheck } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0C] border-t border-[#27272A] pt-16 pb-12 text-xs text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Status Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#06B6D4] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0A0A0C] rounded-[6px] flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
              </div>
              <span className="text-lg font-bold text-[#F4F4F5]">Apex</span>
            </div>
            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
              The high-performance B2B APM and cloud cost intelligence platform. Zero-overhead eBPF tracing for modern engineering teams.
            </p>
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-[11px] font-mono text-[#F4F4F5]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F4F4F5] uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-[#F4F4F5] transition-colors">eBPF Telemetry</a></li>
              <li><a href="#features" className="hover:text-[#F4F4F5] transition-colors">AI Root Cause Engine</a></li>
              <li><a href="#features" className="hover:text-[#F4F4F5] transition-colors">Cloud Cost Intelligence</a></li>
              <li><a href="#features" className="hover:text-[#F4F4F5] transition-colors">Smart Alerting</a></li>
              <li><a href="#pricing" className="hover:text-[#F4F4F5] transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F4F4F5] uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-[#F4F4F5] transition-colors">Documentation</a></li>
              <li><a href="#faq" className="hover:text-[#F4F4F5] transition-colors">API Reference</a></li>
              <li><a href="#faq" className="hover:text-[#F4F4F5] transition-colors">Helm & K8s Install</a></li>
              <li><a href="#faq" className="hover:text-[#F4F4F5] transition-colors">Security & SOC2 Portal</a></li>
              <li><a href="#faq" className="hover:text-[#F4F4F5] transition-colors">Changelog v2.0</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F4F4F5] uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F4F4F5] transition-colors">About Apex</a></li>
              <li><a href="#" className="hover:text-[#F4F4F5] transition-colors">Careers <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#6366F1]/20 text-[#38BDF8]">We're Hiring</span></a></li>
              <li><a href="#" className="hover:text-[#F4F4F5] transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-[#F4F4F5] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F4F4F5] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Apex Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-[#18181B] hover:text-[#F4F4F5] border border-[#27272A]">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-[#18181B] hover:text-[#F4F4F5] border border-[#27272A]">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-[#18181B] hover:text-[#F4F4F5] border border-[#27272A]">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
