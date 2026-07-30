'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Shield, Clock, Cpu, ArrowRight } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      category: 'Deployment',
      question: 'How fast can Apex be deployed into our Kubernetes clusters?',
      answer:
        'Installation takes under 5 minutes using our official Helm chart or Terraform module (`helm install apex-agent apex/agent`). Because Apex leverages Linux eBPF kernel probes, there is zero need to add SDK dependencies or rewrite existing Dockerfiles.',
    },
    {
      category: 'Performance',
      question: 'What is the exact CPU and memory overhead of the eBPF agent?',
      answer:
        'Apex is designed for ultra-low latency workloads. Across production benchmarks handling 1M+ req/sec, the background kernel probe consumes strictly < 0.1% CPU overhead and < 45MB RAM per node.',
    },
    {
      category: 'Security',
      question: 'How does Apex guarantee data sovereignty and PII privacy?',
      answer:
        'Apex includes an automatic, client-side PII regex sanitizer (scrubbing Authorization headers, credit card numbers, JWT payloads, and social security numbers) before telemetry packet serialization. We are fully SOC2 Type II, ISO 27001, and GDPR compliant.',
    },
    {
      category: 'Migration',
      question: 'Can we migrate seamlessly from Datadog, New Relic, or Dynatrace?',
      answer:
        'Yes. Apex natively ingests OpenTelemetry (OTel) traces and Prometheus metrics. You can run Apex alongside your existing APM during a proof-of-concept phase with zero collision or duplicate telemetry charges.',
    },
    {
      category: 'Cost',
      question: 'How does the Cloud Spend Reclamation Engine work?',
      answer:
        'Apex continuously analyzes CPU/Memory allocation vs. actual runtime utilization across your Kubernetes pods. It generates automated PRs to tune HPA thresholds and identify unattached cloud disk volumes, reducing monthly cloud bills by an average of 34%.',
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[#0A0A0C] relative border-t border-[#27272A]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F4F5] tracking-tight">
            Everything you need to know about Apex.
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA]">
            Have additional questions? Talk directly to our lead site reliability engineers.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#18181B] border-[#6366F1]/50 shadow-lg shadow-indigo-500/5'
                    : 'bg-[#18181B]/60 border-[#27272A] hover:border-[#3F3F46]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0A0A0C] text-[#38BDF8] border border-[#27272A]">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#F4F4F5]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A1A1AA] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#6366F1]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#A1A1AA] leading-relaxed border-t border-[#27272A]/50 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
