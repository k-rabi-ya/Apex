'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: React.ReactNode
  category: string
}

export const TechnicalFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      category: 'Deployment',
      question: 'How fast can Apex be deployed into our Kubernetes clusters?',
      answer: (
        <div className="space-y-3">
          <p>
            Installation takes under 5 minutes using our official Helm chart or Terraform module. Because Apex leverages Linux eBPF kernel probes, there is zero need to add SDK dependencies or rewrite existing Dockerfiles.
          </p>
          <div className="bg-[#0D1117] border border-[#21262D] text-[#E6EDE3] font-mono text-xs p-3 rounded-md overflow-x-auto">
            helm install apex-agent apex/agent --namespace apex-system --create-namespace
          </div>
        </div>
      ),
    },
    {
      category: 'Performance',
      question: 'What is the exact CPU and memory overhead of the eBPF agent?',
      answer: (
        <p>
          Apex is designed for ultra-low latency workloads. Across production benchmarks handling 1M+ req/sec, the background kernel probe consumes strictly &lt; 0.1% CPU overhead and &lt; 45MB RAM per node.
        </p>
      ),
    },
    {
      category: 'Security',
      question: 'How does Apex guarantee data sovereignty and PII privacy?',
      answer: (
        <p>
          Apex includes an automatic, client-side PII regex sanitizer (scrubbing Authorization headers, credit card numbers, JWT payloads, and social security numbers) before telemetry packet serialization. We are fully SOC2 Type II, ISO 27001, and GDPR compliant.
        </p>
      ),
    },
    {
      category: 'Migration',
      question: 'Can we migrate seamlessly from Datadog, New Relic, or Dynatrace?',
      answer: (
        <p>
          Yes. Apex natively ingests OpenTelemetry (OTel) traces and Prometheus metrics. You can run Apex alongside your existing APM during a proof-of-concept phase with zero collision or duplicate telemetry charges.
        </p>
      ),
    },
    {
      category: 'Cost',
      question: 'How does the Cloud Cost Reclamation Engine calculate savings?',
      answer: (
        <p>
          Apex analyzes real-time CPU/RAM request-to-limit ratios across Kubernetes pods and identifies idle allocations, orphan persistent volumes, and over-provisioned cloud compute, providing automated PR recommendations.
        </p>
      ),
    },
  ]

  return (
    <section id="faq" aria-label="Technical FAQ" className="py-20 bg-[#0B0E14] border-b border-[#21262D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subhead */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Technical FAQ
          </h2>
          <p className="mt-1 text-sm text-[#8B949E]">
            Technical specifications, compliance information, and eBPF integration details.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="divide-y divide-[#21262D] border-t border-b border-[#21262D]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none min-h-[44px] group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-semibold tracking-wider transition-colors duration-150 ${
                      isOpen ? 'text-[#10B981]' : 'text-[#8B949E] group-hover:text-emerald-400'
                    }`}>
                      [{faq.category.toUpperCase()}]
                    </span>
                    <span className={`text-sm font-semibold transition-colors duration-150 ${
                      isOpen ? 'text-white font-bold' : 'text-[#C9D1D9] group-hover:text-[#F0F6FC]'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8B949E] transition-transform duration-150 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#10B981]' : 'group-hover:text-[#F0F6FC]'
                    }`}
                  />
                </button>

                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="pt-3 pb-2 text-xs text-[#8B949E] leading-relaxed font-sans pl-0 sm:pl-[100px]">
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
