/** Homepage v2 copy — sourced from version.txt (UX-optimized marketing draft). */

export const VERSION_HOME = {
  eyebrow: "AI Transform & Growth Partner",
  headline: "Turn AI into working systems and measurable growth.",
  body: "Skip the endless strategy decks. We combine elite engineering, marketing systems, and proprietary AI products to help you automate work, build native experiences, and win in AI-driven commerce.",
  primaryCta: { label: "Talk to Geck", href: "/contact" },
  secondaryCta: { label: "Explore our products", href: "/v2#products" },
  microcopy:
    "Looking for software only? Spin up Geck Growth or map your GTM with DROSS.",

  engage: {
    headline: "One operating model. Three ways to plug in.",
    support:
      "Move at your own speed—whether you need self-serve software, expert co-pilots, or custom infrastructure.",
    modes: [
      {
        id: "use-it",
        title: "Use it",
        subtitle: "Self-Serve",
        lead: "Run your growth on Geck.",
        body: "Monitor your brand's AI footprint, automate multi-channel content pipelines, or build your GTM strategy independently.",
        cta: { label: "Explore products", href: "/v2#products" },
      },
      {
        id: "do-it",
        title: "Do it with us",
        subtitle: "Partnership",
        lead: "Add builders to your team.",
        body: "Embed our strategists, engineers, and growth operators to overhaul legacy workflows and execute high-stakes launches.",
        cta: { label: "Explore services", href: "/v2#services" },
      },
      {
        id: "build-it",
        title: "Build it with us",
        subtitle: "Custom",
        lead: "Build what doesn’t exist.",
        body: "We combine reusable Geck components with custom engineering to spin up proprietary workflows, internal apps, and agentic systems.",
        cta: { label: "Build with us", href: "/contact" },
      },
    ],
  },

  solutions: {
    headline: "What problem are we solving next?",
    items: [
      {
        id: "ai-transformation",
        title: "AI Transformation",
        body: "Move past pilot purgatory. Identify high-leverage workflows, build reliable architecture, and actually get your teams using AI where it counts.",
      },
      {
        id: "ai-marketing",
        title: "AI Marketing & Growth",
        body: "Stop drowning in generic copy. Modernize research, positioning, multi-channel distribution, and performance tracking into a single loop.",
      },
      {
        id: "ai-search",
        title: "AI Search & Visibility",
        body: "Buyers aren't just searching—they're asking LLMs for recommendations. Discover how AI sees your brand, fix the gaps, and become the default choice.",
      },
      {
        id: "agentic-commerce",
        title: "Agentic Commerce",
        body: "The next wave of buyers won't be human. Make your catalog, checkout flow, and support stack fully discoverable and transactable by AI agents.",
      },
    ],
  },

  products: {
    headline: "Software built from the trenches.",
    support:
      "We turn the repeatable parts of our transformation work into products so your team can move fast without reinventing the wheel.",
    items: [
      {
        id: "geck-growth",
        name: "Geck Growth Platform",
        tagline: "See what AI sees. Fix what it misses. Create what comes next.",
        overview:
          "Track your brand across AI answer engines and search. Turn those insights into on-brand content and multi-channel distribution from one workspace.",
        primary: { label: "Explore Geck Growth", href: "/contact" },
        secondary: { label: "Start free", href: "/contact" },
      },
      {
        id: "dross",
        name: "DROSS",
        tagline: "Build a GTM strategy your team can defend.",
        overview:
          "Take a product idea and turn it into a rigorous, evidence-backed strategy covering positioning, messaging, growth loops, and prioritized playbooks.",
        note: "GTM Strategy Engine",
        primary: { label: "Explore DROSS", href: "/contact" },
        secondary: { label: "Build my strategy", href: "/contact" },
      },
    ],
  },

  services: {
    headline: "Strategy that actually ships.",
    support:
      "Real transformation lives in production systems, updated workflows, and measurable revenue—not a PDF.",
    items: [
      {
        title: "AI Transformation",
        body: "Architecture, LLM gateways, governance, and operational automation.",
      },
      {
        title: "AI Marketing & Growth",
        body: "Modern operating models, content engines, and AEO/GEO optimization.",
      },
      {
        title: "GTM Strategy & Execution",
        body: "Market research, positioning hierarchies, and launch support.",
      },
      {
        title: "Custom AI Products",
        body: "Domain-specific copilots and bespoke agentic systems.",
      },
    ],
    cta: { label: "Explore all services", href: "/contact" },
  },

  loop: {
    headline: "From strategy to execution to feedback loop.",
    steps: [
      {
        title: "Decide",
        body: "Ground your moves in real market signals (powered by DROSS).",
      },
      {
        title: "Build",
        body: "Architect the workflows or content systems required to execute.",
      },
      {
        title: "Reach",
        body: "Push your message across human channels and AI discovery engines (powered by Geck Growth).",
      },
      {
        title: "Measure",
        body: "Track movement in visibility, behavior, and revenue.",
      },
      {
        title: "Improve",
        body: "Feed real-world performance data straight back into your next decision.",
      },
    ],
  },

  closing: {
    headline: "What are we building or breaking next?",
    body: "Tell us what you're trying to launch, automate, or scale. We’ll help you figure out if you need a software product, a focused sprint, or a custom build.",
    primaryCta: { label: "Talk to Geck", href: "/contact" },
    secondaryCta: { label: "Start free", href: "/contact" },
  },
} as const;
