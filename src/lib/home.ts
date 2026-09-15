/** Homepage copy sourced from Figma frame 2721:1462 (geck — Project 42). */

export const HOME = {
  headlineLead: "The",
  headlinePill: "Full stack",
  headlineMid: "Platform for",
  headlineAccent: "Agentic Commerce",
  support:
    "Help AI agents find, recommend, and transact with your brand",
  brandInputPrimary: "Enter your Brand.",
  brandInputSecondary: " Get instant insights",
  definitionLead: "Agentic commerce",
  definitionRest:
    "is the next evolution of digital shopping where AI agents act autonomously, on behalf of users to research, compare, negotiate, and complete purchases.",
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
      imageAlt: "Geck Brand Visibility dashboard for Ridezum with AI visibility score and platform breakdown",
    },
    {
      title: "Agent Optimization",
      body: "Structure your content for AI agents to understand and cite.",
      image: "/media/solution-agent-optimization-full.jpg",
      imageAlt: "Geck Agent test flows for Ridezum showing passed demo CTA execution steps",
    },
    {
      title: "Search Optimization",
      body: "Monitor sentiment, mentions, and brand perception.",
      image: "/media/solution-search-optimization-full.jpg",
      imageAlt: "Geck Site Audit dashboard for Ridezum with score trends and audit history",
    },
    {
      title: "Online Reputation",
      body: "Monitor sentiment, mentions, and brand perception.",
      image: "/media/solution-online-reputation-full.jpg",
      imageAlt: "Geck ORM reputation dashboard for Ridezum with sentiment and source channels",
    },
  ],
  testimonial: {
    name: "Shivansh Kapoor",
    role: "Head of Growth",
    quote:
      "Geck for Enterprise has been a game-changer for our marketing teams. It’s helped us work more efficiently, cutting down on manual tasks so we can focus on what really matters, engaging with our audience and driving growth.",
    stat: "125%",
    statLabel: "Increase in Visibility across all major AI Platforms",
    avatar: "/media/avatar-shivansh.jpg",
    avatarAlt: "Portrait of Shivansh Kapoor, Head of Growth",
  },
  featureSpotlight: {
    title: "Agent Optimization",
    body: "Structure your content for AI agents to understand and cite.",
    image: "/media/spotlight-agent-optimization-full.jpg",
    imageAlt: "Geck Agent Optimization workspace for Ridezum with passed flow execution",
  },
} as const;
