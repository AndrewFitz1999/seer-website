# SEER Health — Website Build Brief

## What this is
A public marketing site for SEER Health, a metabolic health-tech company. Their core product is MDT+ (Metabolic Digital Twin), a patented AI platform that turns real-world glucose/insulin/activity data into predictive insight. Audience is a mix of prospective users, clinical/industry partners, and collaborators — not a full investor deck (see "What to leave out" below).

## Tech stack
No existing codebase — starting fresh. Recommend: Next.js + Tailwind CSS, with a small number of hand-written CSS animations for the hero (avoid a heavy animation library for something this contained). Static export is fine; no backend/CMS needed yet beyond a simple contact form.

## Brand assets
- Logo file: `seer-logo.png` (attached) — the signal/pulse mark, concentric arcs + solid quarter-circle
- Primary purple: `#661FE4` (sampled directly from the logo)
- Wordmark: "SEER Health" set in the same purple
- Tagline: "The future of metabolic health starts here."

## Design direction (already approved by client)
- Near-black violet background (`#0B0714`), not pure black — ties the dark mode to the brand hue
- Montserrat for headlines/wordmark, Inter for body/UI (client's standing font preference for formal materials)
- The logo's concentric signal rings, redrawn large and faint, as a recurring visual motif — not a generic gradient blob
- One orchestrated hero animation on load: rings fade in → wordmark appears → tagline types out character-by-character with a blinking caret → subhead/CTAs/trust bar cascade in after. No video assets — this is done in CSS/JS, for load speed and crisp rendering at any size.
- Tone follows january.ai: credibility through restraint (plain stats, clinical trust signals, calm typography) rather than a feature-catalog or heavy-stat-dashboard look like glucotwin.com. Borrow glucotwin's instinct for one clean animated diagram to explain "what is a digital twin," but keep it minimal.
- Avoid: tracked-out all-caps eyebrows, em dashes anywhere in copy, generic SaaS rounded-card-with-shadow grids, numbered 01/02/03 markers unless content is genuinely sequential.
- A working prototype of the hero + trust bar exists (`seer-hero.html`, attached) — use it as the literal starting point for section 1 and 2 below; keep its animation timing and visual treatment.

## Site map & content

### 1. Hero
Logo + typewriter tagline animation (built — see seer-hero.html). Eyebrow: "A patented Metabolic Digital Twin platform." Subhead: "Real-world glucose, insulin and activity data, turned into predictive insight, so people and the systems that support them can make better metabolic decisions." CTAs: "See how it works" / "Talk to us."

### 2. Trust bar (built)
Four plain stats: patent granted (2026), clinical validation in T1D/T2D (peer-reviewed, Diabetes Technology & Therapeutics), collaboration with Medtronic Diabetes Care, up to 24h forecast accuracy from 5 days of training data.

### 3. The problem
From the deck: ~30% of adults live with a metabolic disorder; ~1.5 billion people affected by 2025; drives 80% of chronic disease and 74% of global deaths; largely preventable and reversible. Framing line: "Glucose drives energy, weight and disease. Yet people are handed raw data and told to become experts in nutrition and metabolism." Sources: CDC, IDF.

### 4. What a Metabolic Digital Twin is
One simple animated diagram (input → twin → insight, plain-language, no jargon per client preference — no statistical terms). Core line: "Our Metabolic Digital Twin (MDT+) is a scalable, AI-enabled model that turns real-world data into predictive insights, unlocking better decisions, safety, efficiency and new opportunities."

### 5. Validation
Plain numbers, no stats jargon:
- Study 1 (T1D, n=20): 20 days of data trains the model to forecast glucose 1 hour ahead
- Study 2 (T1D n=30 + T2D n=70, with Medtronic Diabetes Care): 5 days of data trains simulations accurate up to 24 hours

### 6. Mission & Vision
"SEER Health's vision is to create a new standard of care for the metabolic healthcare category and the technologies servicing it."

### 7. Team / Collaborators
- Dean Minnock — PhD, Molecular Physiology, 10+ years Medical Device & Digital Health
- Chloë Royston — PhD, AI/ML, 5+ years AI/ML & Digital Twin
- Yuri Matsumoto — MSci Medical Physics, 10+ years Medical Devices & Pharma
- Benedikt Baumgartner — PhD Computer Science, 15+ years SaMD & MedTech
- Maria Cristina Foss-Freitas — MD, PhD Endocrinology & Cardiometabolism, 25+ years physician-scientist
Plus: collaboration with Medtronic Diabetes Care; published studies in Diabetes Technology & Therapeutics (2020, 2022); patent WO2021165747A1.

### 8. Support our mission (data participation)
Not in the deck — needs copy written from scratch. Core idea: user data (with consent) helps train and validate the Twin; framed as an invitation to participate in ongoing studies, not a generic "donate data" ask.

### 9. News
Nothing real yet — placeholder section/empty state until there's actual news to post.

### 10. Contact
Dean Minnock, dean@seerhealth.tech

## What to leave out
The source deck also contains investor-only material: ARR projections, TAM/SAM/SOM figures, per-persona willingness-to-pay, and competitive positioning against named companies. None of that belongs on the public site. If a gated investor page is wanted later, that's a separate build.

## Reference sites
- https://january.ai/ — primary tonal reference (credibility-first, restrained)
- https://glucotwin.com/ — reference only for how to visually explain the digital-twin mechanism; not for overall tone (too feature-dense/technical for this audience)
