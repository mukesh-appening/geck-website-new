/** Homepage copy — Website Copy Package hero + classic `/v1` sections. */

export const HOME = {
  eyebrow: "AI Transformation and Growth",
  /** Exact package headline; visual split in HomeHero. */
  headline: "Turn AI into working systems and Measurable Growth.",
  /** Single black line in the hero lockup. */
  headlineLead: "Turn AI into working systems",
  /** Second line — dark "and" + electric growth. */
  headlineAnd: "and",
  headlineGrowth: "Measurable Growth.",
  headlineTail: "and Measurable Growth.",
  support:
    "From strategy and engineering to proprietary products, we help you automate work, build native experiences, and scale faster.",
  brandInputPrimary: "Enter your Brand.",
  brandInputSecondary: " Get instant insights",
  primaryCta: { label: "Talk to Geck", href: "/contact" },
  secondaryCta: { label: "Explore our products", href: "/products" },
  definitionLead: "Agentic commerce",
  /** Line breaks match Figma 2802:4723 (4 lines at ~1525px). */
  definitionRest:
    "is the next evolution of\ndigital shopping where AI agents act\nautonomously, on behalf of users to\nresearch, compare, negotiate, and complete purchases.",
  stats: [
    {
      value: "25%",
      label: "organic traffic will drop by 2026",
      source: "Gartner",
      sourceLogo: "/sources/gartner.svg",
      emphasized: true,
    },
    {
      value: "$1T",
      label: "agentic commerce market by 2030",
      source: "McKinsey & Company",
      sourceLogo: "/sources/mckinsey.svg",
      emphasized: false,
    },
    {
      value: "16%",
      label: "higher conversions than traditional channels",
      source: "Adobe",
      sourceLogo: "/sources/adobe.svg",
      emphasized: false,
    },
  ],
  solutions: [
    {
      title: "AI Visibility",
      body: "Get discovered in ChatGPT, Gemini, and AI search.",
      image: "/media/solution-ai-visibility-full.jpg",
      imageAlt:
        "Geck Brand Visibility dashboard for Ridezum with AI visibility score and platform breakdown",
    },
    {
      title: "Agent Optimization",
      body: "Structure your content for AI agents to understand and cite.",
      image: "/media/solution-agent-optimization-full.jpg",
      imageAlt:
        "Geck Agent test flows for Ridezum showing passed demo CTA execution steps",
    },
    {
      title: "Search Optimization",
      body: "Monitor sentiment, mentions, and brand perception.",
      image: "/media/solution-search-optimization-full.jpg",
      imageAlt:
        "Geck Site Audit dashboard for Ridezum with score trends and audit history",
    },
    {
      title: "Online Reputation",
      body: "Monitor sentiment, mentions, and brand perception.",
      image: "/media/solution-online-reputation-full.jpg",
      imageAlt:
        "Geck ORM reputation dashboard for Ridezum with sentiment and source channels",
    },
  ],
  testimonial: {
    name: "Shivansh Kapoor",
    role: "Head of Growth",
    quote:
      "Geck for Enterprise has been a game changer for our marketing teams. It’s helped us work more efficiently, cutting down on manual tasks so we can focus on what really matters, engaging with our audience and driving growth.",
    stat: "125%",
    statLabel: "Increase in Visibility across all major AI Platforms",
    avatar: "/media/avatar-shivansh.jpg",
    avatarAlt: "Portrait of Shivansh Kapoor, Head of Growth",
  },
  featureSpotlight: {
    title: "Agent Optimization",
    body: "Structure your content for AI agents to understand and cite.",
    image: "/media/spotlight-agent-optimization-full.jpg",
    imageAlt:
      "Geck Agent Optimization workspace for Ridezum with passed flow execution",
  },
} as const;
