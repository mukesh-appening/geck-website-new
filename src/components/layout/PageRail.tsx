import type { ReactNode } from "react";

/** Shared horizontal rail matching Figma content width (~1525px, ~197px side inset at 1920). */
export const pageRailClassName =
  "mx-auto w-full max-w-[95.3125rem] px-4 sm:px-6 lg:px-12 xl:px-[6.5rem]";

type PageRailProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function PageRail({
  children,
  className = "",
  as: Tag = "div",
}: PageRailProps) {
  return (
    <Tag className={`${pageRailClassName} ${className}`.trim()}>{children}</Tag>
  );
}
