# ⚡ ForgeFlow

**An intelligent B2B manufacturing marketplace** that connects buyers ("Generators") with suppliers ("Enablers") through AI-powered technical analysis, smart supplier matching, and automated contract management.

## 🎯 Mission

**To bridge the gap between design and production by digitizing the B2B manufacturing lifecycle.** Through AI-powered technical analysis, intelligent supplier matching, and automated governance, ForgeFlow empowers engineers to build faster and manufacturers to grow smarter.

## 🤖 The Intelligence Layer (AI/ML)

ForgeFlow is built on a **Learn-to-Improve Flywheel**: every transaction, correction, and outcome feeds back into the platform's core intelligence. We decompose the manufacturing lifecycle into four intelligent domains:

### 1. Technical Extraction & Analysis
- **Drawing Analyzer**: Predictive extraction of material specs, GD&T tolerances (ISO/ANSI), and surface finishes from PDF/DXF/STEP files using Vision LLMs.
- **BOM Parser**: Automated mapping of raw spreadsheet data to the ForgeFlow parts taxonomy with material equivalency matching.
- **Automated DFM**: Real-time geometry analysis suggesting cost-optimizing design improvements before RFQ publication.

### 2. Smart Match & Marketplace Dynamics
- **Matching Engine**: Multi-dimensional ranking of suppliers based on machine envelopes, material history, and real-time capacity signals.
- **Dynamic Pricing**: Proprietary "Market Rate" benchmarking for custom parts (process × material × volume) to ensure fair value for both sides.
- **Supplier Discovery**: Collaborative filtering to recommend high-performing suppliers outside of traditional networks.

### 3. Predictive Operations
- **Quoting Assistant**: Helping sellers draft accurate quotes in minutes by surfacing similar past jobs and predictive price ranges.
- **Resilience Predictor**: Monitoring global supply chain signals to alert buyers of potential material or logistics risks.
- **Delay Warning System**: Survival-model analytics tracking production milestones to predict and mitigate lead-time variances.

### 4. Automated Governance & Trust
- **Contract Risk Analyzer**: AI-assisted flagging of ambiguous clauses, IP gaps, or missing quality requirements in manufacturing agreements.
- **Computer Vision QA**: Automated quality verification by comparing physical production photos against original CAD specs at the "QA Gate."
- **KPI Performance Layer**: Objective, data-driven scoring of on-time delivery, quality, and quote-to-actual variance.

> **Status:** Active Development — Frontend Prototype (Transitioning to backend integration)


---

## What It Does

ForgeFlow digitizes the entire procurement-to-production pipeline for custom manufactured parts:

1. **Upload a drawing** → The AI extracts materials, tolerances, finishes, and geometry from PDF technical drawings.
2. **Structure the project** → Parts are organized into typed Work Packages (Manufacturing, Assembly, Finishing, Inspection, Packaging, Shipping, Design Optimization, Storage).
3. **Publish to Marketplace** → Qualified suppliers browse, filter, and bid on published Work Packages.
4. **Smart Match** → A weighted scoring algorithm ranks suppliers by capability, material, certifications, and timeline fit.
5. **Award & Plan** → Accept bids, assign suppliers, and schedule production on an interactive Gantt chart with change management.
6. **Generate Contracts** → An engine auto-generates master agreements and supplier sub-contracts with milestone-based payment schedules and verification oracles.

---

## Architecture Overview

```
ForgeFlow/
├── App.tsx                  # Root layout — sidebar nav + role-based routing
├── index.tsx                # React entry point
├── store.ts                 # Central state management (useStore hook)
├── types.ts                 # All TypeScript interfaces & enums
├── constants.ts             # Tolerance levels, AQL, Incoterms, cert pool, etc.
│
├── schemas/
│   └── supplier.ts          # SupplierProfile, ServiceCapabilityConfig schemas
│
├── services/
│   └── contractEngine.ts    # Master & Supplier contract generation engine
│
├── utils/
│   ├── forgeFlowAssistant.ts  # AI drawing analysis (Gemini Vision)
│   └── matchScoring.ts        # Smart Match scoring algorithm
│
├── views/                   # Full-page views
│   ├── ActivityLogView.tsx
│   ├── BidBuilderView.tsx
│   ├── BidComparisonView.jsx
│   ├── CompanyProfileView.tsx
│   ├── ContractDashboard.tsx    # Mockup
│   ├── DeviationReviewView.jsx
│   ├── EnablerDashboard.tsx
│   ├── EnablerProfileView.tsx
│   ├── GeneratorDashboard.tsx
│   ├── GeneratorProfileView.tsx
│   ├── JobDetailView.tsx
│   ├── JobManagementView.tsx
│   ├── MarketplaceView.tsx
│   ├── MessageCenterView.tsx
│   ├── OnboardingWizardView.tsx
│   ├── PlannerSandbox.tsx       # Mockup
│   ├── ProjectDetailView.tsx
│   ├── ProjectManagementView.tsx
│   ├── RfqTriageView.jsx
│   ├── SupplierMapView.tsx
│   ├── SupplierPipelineView.tsx
│   ├── TeamManagementView.tsx
│   └── public/
│       ├── LandingPage.tsx
│       ├── HowItWorksPage.tsx
│       ├── AboutPage.tsx
│       ├── LoginPage.tsx
│       ├── SignUpPage.tsx
│       └── PublicLayout.tsx
│
├── geminiService.ts         # AI BOM parsing & Work Package generation
│
└── components/
    ├── shared/              # Reusable UI — SectionHeader, FieldLabel, MaterialMultiSelect, etc.
    ├── planner/             # Visual Planner components (Mockup)
    ├── marketplace/         # Search sidebar, Match Score breakdown, competitive intel
    └── profile/             # Capability editor, machine inventory, team management
```

---

## Key Features

### Two User Roles

| Role | Label | Purpose |
|------|-------|---------|
| **Generator** | Buyer / OEM | Creates projects, uploads drawings, reviews bids, manages production |
| **Enabler** | Supplier / Machine Shop | Browses marketplace, submits bids, manages shop profile & machines |

Switch between roles instantly via the sidebar to experience both perspectives.

### 🤖 AI-Powered Drawing Analysis
- Upload a PDF technical drawing and **Google Gemini Vision** extracts part geometry, materials, tolerances, surface finishes, and finishing treatments.
- Multi-part and variant detection (e.g., same drawing, different specs).
- Confidence scoring per extracted field (`HIGH / MEDIUM / LOW`) with source tracing.
- Auto-populates Work Package fields from the analysis.

### 📦 Work Package System
Each project is broken into granular, biddable scopes of work:
- **Types:** Manufacturing, Assembly, Finishing, Inspection, Packaging, Shipping, Design Optimization, Storage
- **Rich fields:** Specialty, tolerances, surface finish Ra, AQL levels, transport modes, Incoterms, certifications, inspection criteria, and more.

### 🏪 Marketplace & Bidding
- Suppliers browse published Work Packages with powerful filters (specialty, region, certifications).
- **Bid Builder** supports itemized and lot pricing, quantity-based price tiers, technical proposals, and capacity declarations.
- Generators can accept, reject, or request partial scope from bids.
- In-platform messaging between parties on active bids.

### 🎯 Smart Match Scoring
A multi-factor scoring algorithm (`matchScoring.ts`) ranks suppliers against Work Package requirements:
- **60% Capability** — Process method, tolerance, machine envelope, surface finish, finishing, inspection, packaging, shipping, AQL, assembly method.
- **30% Material** — Fuzzy material matching across machine inventory.
- **10% Certifications** — Normalized matching of required vs. held certifications.
- Per-dimension audit trail with `match / partial / low` status badges.

### 📊 Bid Comparison & Deviation Management
ForgeFlow provides buyers with sophisticated tools to evaluate and normalize bids:
- **Comparison Matrix**: Side-by-side technical and commercial comparison of suppliers across work packages.
- **Technical Deviations**: Suppliers can propose "Deviations" (alternate materials, tolerances, or processes). Buyers can **Accept, Reject, or Counter** these in a dedicated review flow (`DeviationReviewView.jsx`).
- **Recommendation Modes**: Intelligent sorting by "Cheapest," "Fastest," "Closest," or "Best Conformance."
- **Modular Awarding**: Flexibility to award a single part to one supplier (Full Lot) or split individual work packages across multiple specialized shops.

### ⭐️ Ratings & Performance
- **Post-Job Reviews**: Buyers rate suppliers across Quality, Lead Time, and Communication after job closure.
- **Performance Analytics**: Data-driven visibility into a supplier's on-time delivery ratio and historical quality score.
- **Verification Oracles**: Automatic rating adjustments based on objective delivery data.

### 💳 Payment & Escrow Management (Mockup)
- **Milestone Payments**: Funds are held in escrow and released upon completion of specific work package milestones.
- **Automated Triggers**: Payment releases can be triggered by digitizing shipping signals or buyer-approved QC reports.
- **Financial Transparency**: Itemized breakdown of agreed prices, fees, and remaining balances.

### 📅 Production Planner (Mockup)
- **Visual Concepts:** Interactive **Gantt chart** with drag-to-reschedule and dependency arrows.
- **WBS Tree** view for hierarchical Work Package breakdown.
- **Change management** — tracked pending changes with proposal statuses (`DRAFT → SENT → REVIEWED → ACCEPTED`).
- Full **change log** history per Work Package.
- **Excel export** of the project schedule.

### 📝 Contract Generation Engine (Mockup)
- **Master Contract** per project — IP rights, confidentiality, dispute resolution, governing law.
- **Supplier Sub-Contracts** per awarded bid — scope of work, schedule, technical requirements.
- **Milestone-based payments** with verification oracles (Buyer Approval, QC Report Upload, Shipping API).
- AI risk analysis placeholder for flagging high-risk clauses.

### 🗺️ Supplier Map
- Geographic view of supplier manufacturing locations.
- Region-based production constraints (global, country, or custom radius).

### 🏭 Enabler Profile Management
- Multi-location facility management with per-location capabilities.
- **Machine Inventory** — detailed specs per machine (bounding box, max weight, accuracy, surface finish, supported materials).
- **Service Profiles** — declare capabilities across all Work Package types.
- Team member management and certification tracking.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 6 |
| **Routing** | React Router v7 |
| **State** | Custom `useStore` hook (React `useState`) |
| **AI** | Google Gemini API (`@google/generative-ai`) |
| **Icons** | Lucide React |
| **Spreadsheet** | SheetJS (`xlsx`) for Excel export |
| **Styling** | Utility-first CSS classes (Tailwind-style) |

---

## Getting Started

### Prerequisites
- **Node.js** ≥ 18
- A **Google Gemini API key** (for AI features)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd ForgeFlow

# Install dependencies
npm install

# Create environment file
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Environment Variables

| Variable | Description |
|----------|------------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key — enables AI drawing analysis and BOM parsing |

> AI features degrade gracefully if no key is provided.

---

## Current State & Roadmap

### ✅ Implemented (Core Prototype)
- Full Generator & Enabler role-based experience
- AI-powered PDF drawing analysis with multi-part/variant detection
- Project creation, part management, and Work Package editor
- Marketplace with search, filters, and Smart Match scoring
- Bid Builder with lot/itemized pricing and technical proposals
- Bid comparison and triage views for Generators
- Bid acceptance workflow with partial scope negotiation
- Supplier Map view
- Enabler profile management (locations, machines, capabilities, certs)
- Notification system for bid lifecycle events
- Unsaved changes protection across navigation

### 🎨 Visual Mockups (In Design)
- **Production Planner** (`PlannerSandbox.tsx`): Interactive Gantt chart and WBS tree concepts.
- **Contract Dashboard** (`ContractDashboard.tsx`): Legal instrument generation and milestone-based payment visual concepts.
- **Service Blueprint**: Visual mapping of the manufacturing lifecycle.

### 🔜 Coming Next
- Backend API & database persistence (Supabase integration)
- Authentication & multi-user accounts
- Real-time collaboration and messaging
- Payment integration (escrow, milestone releases)
- Document management (CAD file storage, revision tracking)
- Advanced AI features (DFM analysis, market intelligence, predictive delays)

---

## License

*License TBD*
