'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react'
import { useTrialModal } from './TrialModalContext'

export const Pricing: React.FC = () => {
  const { openModal } = useTrialModal()
  const [isAnnual, setIsAnnual] = useState(true)

  const springTransition = {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  }

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
        'Instant Slack & PagerDuty Alerts',
        'Cloud Spend Reclamation Engine',
        'Priority 24/7 Technical Support',
        'Custom Webhooks & SAML SSO',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Custom cluster isolation, dedicated SLAs, and VPC peering.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      popular: false,
      badge: 'Dedicated Infra',
      ctaText: 'Contact Enterprise Team',
      ctaVariant: 'outline',
      features: [
        'Custom Span Volume & Unlimited Nodes',
        '1-Year Telemetry Retention',
        'Self-Hosted or Private Cloud VPC',
        'SOC2, ISO 27001 & HIPAA BAA',
        '99.99% Guaranteed Uptime SLA',
        'Dedicated Solutions Architect',
        'Custom Data Masking Rules',
        'Custom Contract & Invoicing',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-[#0A0A0C] relative border-t border-[#27272A]/60">
      {/* Glow Background Center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#6366F1]/10 via-[#06B6D4]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-semibold text-[#06B6D4] uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent, Predictable Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F4F5] tracking-tight">
            Scale your telemetry, not your bill.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            No unexpected overage penalties. Pay strictly for active nodes with 14 days of free trial on all plans.
          </p>

          {/* Interactive Billing Toggle */}
          <div className="mt-10 inline-flex items-center bg-[#18181B] p-1.5 rounded-full border border-[#27272A] relative">
            <button
              onClick={() => setIsAnnual(false)}
              className="relative min-h-[44px] px-6 py-2 rounded-full text-xs font-bold transition-colors duration-200 z-10 focus:outline-none"
            >
              {!isAnnual && (
                <motion.span
                  layoutId="billingToggle"
                  className="absolute inset-0 bg-[#0A0A0C] border border-[#27272A] rounded-full -z-0"
                  transition={springTransition}
                />
              )}
              <span className={`relative z-10 ${!isAnnual ? 'text-[#F4F4F5]' : 'text-[#A1A1AA] hover:text-[#F4F4F5]'}`}>
                Monthly Billing
              </span>
            </button>
            
            <button
              onClick={() => setIsAnnual(true)}
              className="relative min-h-[44px] px-6 py-2 rounded-full text-xs font-bold transition-colors duration-200 z-10 flex items-center gap-2 focus:outline-none"
            >
              {isAnnual && (
                <motion.span
                  layoutId="billingToggle"
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] rounded-full -z-0 shadow-md"
                  transition={springTransition}
                />
              )}
              <span className={`relative z-10 ${isAnnual ? 'text-white' : 'text-[#A1A1AA] hover:text-[#F4F4F5]'}`}>
                Annual Billing
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/40 text-white font-bold relative z-10">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = typeof plan.monthlyPrice === 'number' 
              ? isAnnual ? plan.annualPrice : plan.monthlyPrice 
              : 'Custom'

            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#18181B] border-2 border-[#6366F1] shadow-2xl shadow-indigo-500/20'
                    : 'bg-[#18181B]/80 border border-[#27272A] hover:border-[#3F3F46]'
                }`}
              >
                {/* Popular Glow Badge */}
                {plan.popular && (
                  <div className="absolute -top-4.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white text-xs font-bold shadow-md uppercase tracking-wider flex items-center gap-1.5 z-10">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-[#F4F4F5]">{plan.name}</h3>
                    {!plan.popular && plan.badge && (
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-[#0A0A0C] text-[#A1A1AA] border border-[#27272A]">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price Tag with Animated Value */}
                  <div className="mt-6 flex items-baseline gap-1">
                    {typeof price === 'number' ? (
                      <>
                        <span className="text-4xl sm:text-5xl font-extrabold text-[#F4F4F5] font-mono tracking-tight">
                          ${price}
                        </span>
                        <span className="text-sm text-[#A1A1AA] font-medium">/ month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-extrabold text-[#F4F4F5] font-mono">
                        Custom
                      </span>
                    )}
                  </div>
                  {isAnnual && typeof price === 'number' && (
                    <div className="text-[11px] text-[#10B981] mt-1 font-mono">
                      Billed annually (${price * 12}/yr)
                    </div>
                  )}

                  {/* Divider */}
                  <div className="my-6 border-t border-[#27272A]/80" />

                  {/* Features List */}
                  <ul className="space-y-3.5 text-xs text-[#A1A1AA]">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 p-0.5 rounded-full ${plan.popular ? 'bg-[#6366F1]/20 text-[#38BDF8]' : 'bg-[#27272A] text-[#10B981]'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[#F4F4F5] leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Button with touch targets */}
                <div className="mt-8 pt-4">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    transition={springTransition}
                    onClick={openModal}
                    className={`w-full min-h-[44px] py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:from-[#4F46E5] hover:to-[#0891B2] text-white shadow-lg shadow-indigo-500/25'
                        : plan.ctaVariant === 'secondary'
                        ? 'bg-[#0A0A0C] hover:bg-[#222226] text-[#F4F4F5] border border-[#27272A] hover:border-[#3F3F46]'
                        : 'bg-transparent border border-[#3F3F46] hover:border-[#F4F4F5] text-[#F4F4F5]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
