import React from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Metrics } from '@/components/Metrics'
import { DashboardPreview } from '@/components/DashboardPreview'
import { TrialCard } from '@/components/TrialCard'
import { FeatureGrid } from '@/components/FeatureGrid'
import { Pricing } from '@/components/Pricing'
import { TechnicalFAQ } from '@/components/TechnicalFAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Top Header Navigation */}
      <Header />

      <main id="main-content">
        {/* Humanized Hero Section */}
        <Hero />

        {/* 4-Column Border-Separated Metrics Strip */}
        <Metrics />

        {/* Developer Console & Telemetry Dashboard Preview */}
        <DashboardPreview />

        {/* Trial Onboarding Section */}
        <section className="py-16 bg-[#0B0E14] border-b border-[#21262D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
              Provision your sandbox instantly.
            </h2>
            <TrialCard />
          </div>
        </section>

        {/* Architecture & Feature Grid */}
        <FeatureGrid />

        {/* Pricing Plans */}
        <Pricing />

        {/* Technical FAQ */}
        <TechnicalFAQ />
      </main>

      {/* Enterprise Footer */}
      <Footer />
    </>
  )
}
