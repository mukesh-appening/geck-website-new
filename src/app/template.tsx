import type { ReactNode } from "react";
import { PageTransition } from "@/components/motion/PageTransition";

/** Remounts on route change so page transitions run. */
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
