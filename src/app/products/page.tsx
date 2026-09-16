import type { Metadata } from "next";
import {
  PrimaryButton,
  SecondaryButton,
  PageShell,
} from "@/components/layout/PageShell";
import { HoverCard } from "@/components/version/HoverCard";
import { ProductArt } from "@/components/version/VersionArt";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { VERSION_HOME } from "@/lib/version-home";

const TITLE = "Geck Products";
const DESCRIPTION = VERSION_HOME.products.support;

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/products",
});

export default function ProductsPage() {
  const products = VERSION_HOME.products;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/products",
            name: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
      />
      <PageShell
        eyebrow={products.eyebrow}
        title="Software built from"
        titleAccent="real-world execution."
        description={products.support}
        actions={
          <>
            <PrimaryButton href={products.cta.href}>
              {products.cta.label}
            </PrimaryButton>
            <SecondaryButton href="/contact">Talk to Geck</SecondaryButton>
          </>
        }
      >
        <Reveal variant="fadeUpSoft">
          <Stagger
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            slow={false}
          >
            {products.items.map((product, index) => {
              const featured = index === 0;
              return (
                <StaggerItem key={product.id} as="li" className="list-none">
                  <HoverCard featured={featured} className="h-full">
                    <article
                      className={`group flex h-full flex-col rounded-[20px] border bg-surface p-5 sm:p-7 ${
                        featured
                          ? "border-electric shadow-[0_12px_0_0_rgba(0,0,0,0.08)]"
                          : "border-[#D1D1D1] shadow-[0_12px_0_0_rgba(0,0,0,0.06)]"
                      }`}
                    >
                      <ProductArt kind={product.art} />
                      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[#B7B7B7]">
                        {product.note}
                      </p>
                      <h2 className="mt-2 font-serif text-[1.45rem] font-extrabold tracking-tight text-electric sm:text-[1.85rem]">
                        {product.name}
                      </h2>
                      <p className="mt-3 text-sm font-semibold tracking-tight text-[#535353] sm:text-base">
                        {product.tagline}
                      </p>
                      <p className="mt-3 flex-1 text-sm font-medium leading-relaxed tracking-tight text-[#8A8A8A]">
                        {product.overview}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <PrimaryButton href={product.primary.href}>
                          {product.primary.label}
                        </PrimaryButton>
                        <SecondaryButton href={product.secondary.href}>
                          {product.secondary.label}
                        </SecondaryButton>
                      </div>
                    </article>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Reveal>
      </PageShell>
    </>
  );
}
