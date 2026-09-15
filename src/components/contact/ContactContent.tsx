"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { MotionButton } from "@/components/motion/MotionLink";
import { Reveal } from "@/components/motion/Reveal";
import { springSoft } from "@/components/motion/variants";
import { SITE } from "@/lib/site";

export function ContactContent({ description }: { description: string }) {
  const reduce = useReducedMotion();

  return (
    <PageShell
      eyebrow="Contact"
      title="Request"
      titleAccent="Access"
      description={description}
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:items-start">
        <Reveal variant="slideLeft">
          <div>
            <h2
              id="reach-us"
              className="text-[clamp(1.35rem,3vw,2rem)] font-medium tracking-tight text-[#535353]"
            >
              Reach us
            </h2>
            <ul className="mt-6 space-y-4 text-sm font-medium tracking-tight text-[#535353] sm:text-base">
              <li className="rounded-[16px] border border-[#D1D1D1] px-5 py-4 sm:rounded-[20px]">
                Email{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-electric transition-colors hover:text-electric-hover"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="rounded-[16px] border border-[#D1D1D1] px-5 py-4 sm:rounded-[20px]">
                Typical response within{" "}
                <span className="text-electric">1–2 business days</span>
              </li>
              <li className="rounded-[16px] border border-[#D1D1D1] px-5 py-4 sm:rounded-[20px]">
                Best for demos, partnerships, and product questions
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08} variant="fadeScale">
          <motion.form
            className="rounded-[16px] border border-[#D1D1D1] bg-surface p-5 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.08)] sm:rounded-[20px] sm:p-8"
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
            data-testid="contact-form"
            data-agent-form="contact"
            whileHover={
              reduce
                ? undefined
                : { y: -2, boxShadow: "0px 10px 0px 0px rgba(0,0,0,0.1)" }
            }
            transition={springSoft}
          >
            <div className="grid gap-5">
              <Field label="Name">
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="h-12 rounded-full border border-[#C8C8C8] bg-surface px-5 text-sm font-medium tracking-tight text-[#535353] outline-none transition-[border-color,box-shadow] duration-[var(--ease)] placeholder:text-[#A7A7A7] focus:border-electric focus:shadow-[0_0_0_3px_rgba(52,79,254,0.12)] sm:text-base"
                />
              </Field>
              <Field label="Work email">
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="h-12 rounded-full border border-[#C8C8C8] bg-surface px-5 text-sm font-medium tracking-tight text-[#535353] outline-none transition-[border-color,box-shadow] duration-[var(--ease)] placeholder:text-[#A7A7A7] focus:border-electric focus:shadow-[0_0_0_3px_rgba(52,79,254,0.12)] sm:text-base"
                />
              </Field>
              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="rounded-[16px] border border-[#C8C8C8] bg-surface px-5 py-3.5 text-sm font-medium tracking-tight text-[#535353] outline-none transition-[border-color,box-shadow] duration-[var(--ease)] placeholder:text-[#A7A7A7] focus:border-electric focus:shadow-[0_0_0_3px_rgba(52,79,254,0.12)] sm:rounded-[20px] sm:text-base"
                />
              </Field>
              <MotionButton
                type="submit"
                variant="pill"
                className="inline-flex h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-medium tracking-tight text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover"
              >
                Send message
              </MotionButton>
            </div>
            <p className="mt-4 text-xs font-medium tracking-tight text-[#B7B7B7]">
              Submitting opens your email client to reach {SITE.email}. A
              server-backed form can replace this later without changing page
              structure.
            </p>
          </motion.form>
        </Reveal>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium tracking-tight text-[#535353]">
      {label}
      {children}
    </label>
  );
}
