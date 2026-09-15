import type { Metadata } from "next";
import Image from "next/image";
import { DefinitionSection } from "@/components/home/DefinitionSection";
import { HomeHero } from "@/components/home/HomeHero";
import { SolutionsCarousel } from "@/components/home/SolutionsCarousel";
import { PageRail } from "@/components/layout/PageRail";
import { HoverLift } from "@/components/motion/HoverLift";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME } from "@/lib/home";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

const INDEX_TITLE = "Geck — The Fullstack Platform for Agentic Commerce";

export const metadata: Metadata = buildMetadata({
  title: INDEX_TITLE,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/",
            name: INDEX_TITLE,
            description: SITE.description,
          }),
        ]}
      />
      <main className="min-w-0 overflow-x-hidden bg-surface text-ink">
        <HomeHero />

        <DefinitionSection />

        <section
          id="solutions"
          className="py-12 sm:py-16 lg:py-20"
          aria-labelledby="solutions-heading"
          data-testid="home-solutions"
        >
          <Reveal>
            <SolutionsCarousel />
          </Reveal>
        </section>

        <section
          id="impact"
          className="bg-[#1A1A1E] text-white"
          aria-labelledby="impact-heading"
          data-testid="home-impact"
        >
          <PageRail className="py-12 sm:py-16 lg:py-20">
            <Reveal>
              <p className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-medium tracking-tight text-[#B7B7B7] sm:px-5 sm:py-3 sm:text-sm">
                Impact
              </p>
              <h2
                id="impact-heading"
                className="mt-3 text-[clamp(1.5rem,4vw,2.75rem)] font-medium tracking-tight"
              >
                Real Results,{" "}
                <span className="font-semibold text-electric">Real Fast</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08} className="mt-8 sm:mt-10">
              <HoverLift>
                <figure className="flex flex-col gap-6 rounded-[16px] border border-[#D1D1D1] bg-surface p-5 text-[#535353] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.08)] sm:gap-8 sm:rounded-[20px] sm:p-8 md:flex-row md:items-stretch md:gap-10 md:p-10">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-full sm:size-16 md:size-20">
                        <Image
                          src={HOME.testimonial.avatar}
                          alt={HOME.testimonial.avatarAlt}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-lg font-medium tracking-tight sm:text-xl md:text-2xl">
                          {HOME.testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm font-medium tracking-tight sm:text-base md:text-lg">
                          {HOME.testimonial.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-5 text-base font-semibold leading-snug tracking-tight sm:mt-6 sm:text-lg md:text-xl lg:text-2xl">
                      <p>“{HOME.testimonial.quote}”</p>
                    </blockquote>
                  </div>
                  <aside className="flex w-full flex-col justify-center gap-3 rounded-[16px] border border-[#BCBCBC] p-5 sm:gap-4 sm:rounded-[20px] sm:p-6 md:max-w-[15rem]">
                    <p className="font-serif text-[clamp(2.5rem,8vw,4rem)] tracking-tight text-electric">
                      {HOME.testimonial.stat}
                    </p>
                    <p className="text-sm font-medium tracking-tight sm:text-base">
                      {HOME.testimonial.statLabel}
                    </p>
                  </aside>
                </figure>
              </HoverLift>
            </Reveal>
          </PageRail>
        </section>

        <section
          aria-labelledby="spotlight-heading"
          data-testid="home-spotlight"
        >
          <PageRail className="py-12 sm:py-16 lg:py-20">
            <Reveal>
              <p className="inline-flex rounded-full border border-[#E3E3E3] px-4 py-2 text-xs font-medium tracking-tight text-[#B7B7B7] sm:px-5 sm:py-3 sm:text-sm">
                Solutions
              </p>
              <h2
                id="spotlight-heading"
                className="mt-3 text-[clamp(1.5rem,4vw,2.75rem)] font-medium tracking-tight text-[#535353]"
              >
                Real Results,{" "}
                <span className="font-semibold text-electric">Real Fast</span>
              </h2>
            </Reveal>
            <Reveal delay={0.06} className="mt-8 sm:mt-10">
              <HoverLift>
                <article className="group flex flex-col gap-4 rounded-[16px] border border-[#D1D1D1] bg-surface p-4 sm:gap-6 sm:rounded-[20px] sm:p-6">
                  <div className="relative aspect-[21/10] w-full overflow-hidden rounded-2xl bg-[#F1F1F1]">
                    <Image
                      src={HOME.featureSpotlight.image}
                      alt={HOME.featureSpotlight.imageAlt}
                      fill
                      className="object-contain object-center p-1.5 sm:p-2"
                      sizes="(max-width: 768px) 100vw, 95rem"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-[clamp(1.35rem,3vw,2rem)] font-extrabold tracking-tight text-electric">
                      {HOME.featureSpotlight.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium tracking-tight text-[#535353] sm:mt-2 sm:text-base md:text-lg">
                      {HOME.featureSpotlight.body}
                    </p>
                  </div>
                </article>
              </HoverLift>
            </Reveal>
          </PageRail>
        </section>
      </main>
    </>
  );
}
