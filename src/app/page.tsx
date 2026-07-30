import React from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeatureGrid } from '@/components/FeatureGrid'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Header Navigation with client-side modal integration */}
      <Header />

      <main id="main-content">
        {/* Hero Section with interactive metrics tabs & background radial glow */}
        <HeroSection />

        {/* 4-Card Bento Box Feature Grid */}
        <FeatureGrid />

        {/* Tiered Plan Pricing Section */}
        <Pricing />

        {/* Collapsible FAQ Accordion */}
        <FAQ />
      </main>

      {/* Enterprise Footer */}
      <Footer />
    </>
  )
}
