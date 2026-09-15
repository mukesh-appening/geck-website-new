import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — Agentic Commerce Platform`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#FFFFFF",
          color: "#0E1A16",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 800, color: "#344FFE" }}>GECK</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 980,
              color: "#344FFE",
            }}
          >
            The fullstack platform for Agentic Commerce
          </div>
          <div style={{ fontSize: 28, color: "#5C6B63", maxWidth: 820 }}>
            Help AI agents find, recommend, and transact with your brand
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
