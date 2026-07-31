# Apex - Real-Time APM & Cloud Cost Intelligence Platform

## 1. Commercial Proposition & Value Architecture
Apex is a high-performance, enterprise-grade Application Performance Monitoring (APM) and cloud cost reclamation platform built for modern microservices architectures. Utilizing Linux eBPF kernel probes, Apex provides zero-bytecode telemetry ingestion, root-cause diagnostics, and automated infrastructure spend optimization without runtime performance penalties.

## 2. Tech Stack & Primary Dependencies
- **Framework:** Next.js 14+ (App Router, Server Components)
- **Language:** TypeScript 5+ (Strict Mode)
- **Styling:** Tailwind CSS v3+ (Obsidian `#0B0E14` palette & hairline `#21262D` borders)
- **Icons & Motion:** Lucide React (`lucide-react`), Framer Motion

## 3. Quick Start & Execution Commands

```bash
# Install exact dependencies
npm install

# Run local hot-reloading development server
npm run dev

# Run TypeScript static validation
npx tsc --noEmit

# Trigger production build & static page analysis
npm run build

# Launch production server
npm run start
```

## 4. Environment Setup (`.env.example`)

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 5. Directory Tree Map

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── DashboardPreview.tsx
│   ├── FAQ.tsx
│   ├── FeatureGrid.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Metrics.tsx
│   ├── Pricing.tsx
│   └── TrialModalContext.tsx
```