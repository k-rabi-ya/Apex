'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { useTrialModal } from './TrialModalContext'

export const Pricing: React.FC = () => {
  const { openModal } = useTrialModal()
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for fast-moving startups and small engineering pods.',
      monthlyPrice: 29,
      annualPrice: 23,
      popular: false,
      badge: null,
      ctaText: 'Start 14-Day Trial',
      ctaVariant: 'secondary',
      features: [
        'Up to 10 Microservices',
        '50 Million Spans / Month',
        '7-Day Telemetry Retention',
        'Basic Slack Notifications',
        'Community Support',
        'Standard eBPF Profiler',
      ],
    },
    {
      name: 'Pro',
      description: 'Built for scaling engineering orgs requiring AI root cause analysis.',
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      badge: 'Most Popular',
      ctaText: 'Start Pro Free Trial',
      ctaVariant: 'primary',
      features: [
        'Unlimited Microservices',
        '500 Million Spans / Month',
        '30-Day Telemetry Retention',
        'Autonomous AI Root Cause Analysis',
        'Cloud Cost Reclamation Engine',
        'PagerDuty & Teams Integration',
        'Priority 24/7 SLA Support',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Dedicated infrastructure, custom retention, and SSO governance.',
      monthlyPrice: 299,
      annualPrice: 249,
      popular: false,
      badge: null,
      ctaText: 'Contact Enterprise Sales',
      ctaVariant: 'secondary',
      features: [
        'Custom Microservice & Span Limits',
        '365-Day Extended Retention',
        'SAML SSO & SCIM User Sync',
        'Custom Data Sovereignty & VPC',
        'Dedicated Solutions Architect',
        '99.99% Uptime SLA Guarantee',
        'Custom Security Review',
      ],
    },
  ]

  return (
    <section id="pricing" aria-label="Pricing Plans" className="py-20 bg-[#0B0E14] border-b border-[#21262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F0F6FC] tracking-tight">
            Transparent pricing for teams of all sizes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8B949E]">
            Start free for 14 days. Scale as your microservice telemetry grows. No hidden ingress fees.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#161B22] border border-[#21262D] rounded-md font-mono text-xs">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded transition-colors duration-150 ${
                !isAnnual ? 'bg-[#21262D] text-[#F0F6FC] border border-[#30363D]' : 'text-[#8B949E]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded transition-colors duration-150 flex items-center gap-1.5 ${
                isAnnual ? 'bg-[#21262D] text-[#F0F6FC] border border-[#30363D]' : 'text-[#8B949E]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            return (
              <div
                key={plan.name}
                className={`rounded-lg bg-[#0D1117] border p-6 flex flex-col justify-between relative transition-all duration-150 ${
                  plan.popular ? 'border-[#10B981] shadow-panel' : 'border-[#21262D]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded bg-[#238636] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#F0F6FC]">{plan.name}</h3>
                  <p className="text-xs text-[#8B949E] mt-1.5 min-h-[32px]">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-mono font-bold text-[#F0F6FC]">${price}</span>
                    <span className="text-xs font-mono text-[#8B949E]">/ month / user</span>
                  </div>

                  <button
                    onClick={openModal}
                    className={`mt-6 w-full py-2.5 px-4 rounded-md text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-150 min-h-[44px] ${
                      plan.ctaVariant === 'primary'
                        ? 'bg-[#238636] hover:bg-[#2EA043] text-white'
                        : 'bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#C9D1D9] hover:text-[#F0F6FC]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-8 pt-6 border-t border-[#21262D] space-y-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8B949E]">Included Capabilities</span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#C9D1D9]">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
