/** Homepage body copy — exact Website Copy Package (Updated).
 * Hero lives in `HomeHero` + `HOME` (package eyebrow, headline, CTAs).
 */

export const VERSION_HOME = {
  engage: {
    headline: "One operating model. Three ways to plug in.",
    modes: [
      {
        id: "use-it",
        title: "Use it",
        subtitle: "Self-Serve",
        lead: "Run your growth on Geck.",
        body: "Monitor your brand's AI footprint, automate multi-channel content pipelines, or build your GTM strategy independently.",
        cta: { label: "Explore products", href: "/products" },
      },
      {
        id: "do-it",
        title: "Do it with us",
        subtitle: "Partnership",
        lead: "Add builders to your team.",
        body: "Embed our strategists, engineers, and growth operators to overhaul legacy workflows and execute high-stakes launches.",
        cta: { label: "Explore services", href: "/#services" },
      },
      {
        id: "build-it",
        title: "Build it with us",
        subtitle: "Custom Engineering",
        lead: "",
        body: "We custom build applications, workflows, and agentic systems around your exact data, tech stack, and business logic.",
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
      {
        id: "ai-voice-video",
        title: "AI Voice & Video Agents",
        body: "Deploy custom voice and video systems for customer support, transcription, and real-time interactions built natively into your workflows.",
      },
    ],
  },

  products: {
    eyebrow: "GECK PRODUCTS",
    headline: "Software built from real-world execution.",
    support:
      "We turn hard-earned operational insights into production-ready software—so your team can move fast without starting from a blank page.",
    cta: { label: "Explore the products", href: "/products" },
    items: [
      {
        id: "geck-growth",
        name: "Growth",
        note: "Visibility & Content",
        tagline: "See what AI sees. Fix what it misses. Create what comes next.",
        overview:
          "Track your brand across AI answer engines and search, then turn visibility gaps into multi-channel content from one workspace.",
        art: "growth" as const,
        primary: { label: "Explore Growth", href: "/contact" },
        secondary: { label: "Start free", href: "/contact" },
      },
      {
        id: "geck-voice",
        name: "Voice",
        note: "Voice",
        tagline: "Conversational AI built for production.",
        overview:
          "Deploy advanced voice and transcription systems designed to handle real-time customer workflows and internal communication.",
        art: "voice" as const,
        primary: { label: "Explore Voice", href: "/contact" },
        secondary: { label: "Talk to us", href: "/contact" },
      },
      {
        id: "geck-vision",
        name: "Vision",
        note: "Image & Video Generation",
        tagline: "Generate rich media from your core context.",
        overview:
          "Produce on-brand images and explanatory video assets natively from your approved product materials and briefs.",
        art: "vision" as const,
        primary: { label: "Explore Vision", href: "/contact" },
        secondary: { label: "Talk to us", href: "/contact" },
      },
      {
        id: "dross",
        name: "Dross",
        note: "GTM Strategy Engine",
        tagline: "Build a GTM strategy your team can defend.",
        overview:
          "Take a product idea and turn it into a rigorous, evidence-backed strategy covering positioning, messaging, and prioritized playbooks.",
        art: "dross" as const,
        primary: { label: "Explore Dross", href: "/contact" },
        secondary: { label: "Build my strategy", href: "/contact" },
      },
      {
        id: "geck-test",
        name: "Test",
        note: "AI-Enabled Testing",
        tagline: "Intelligent software testing powered by AI.",
        overview:
          "Automate and scale software testing infrastructure using autonomous agents designed to navigate and validate digital system",
        art: "test" as const,
        primary: { label: "Explore Test", href: "/contact" },
        secondary: { label: "Talk to us", href: "/contact" },
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
    headline: "How might we help",
    body: "Tell us what you're trying to launch, automate, or scale. We’ll help you figure out if you need a software product, a focused sprint, or a custom build.",
    primaryCta: { label: "Talk to Geck", href: "/contact" },
    secondaryCta: { label: "Start free", href: "/contact" },
  },
} as const;
