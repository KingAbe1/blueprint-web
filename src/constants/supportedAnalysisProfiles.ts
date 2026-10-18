/** Keep in sync with blueprint `src/constants/supportedAnalysisProfiles.ts` for live profiles. */
export type SupportedDeepProfileAvailability = "live" | "planned";

export type SupportedDeepProfileDetail = {
  id: string;
  /** Full name for accessibility and FAQ copy */
  title: string;
  /** Shown under the logo in the scroll row */
  shortName: string;
  /** Path under `public/` — add SVG/PNG when you ship a profile */
  logoSrc: string;
  availability?: SupportedDeepProfileAvailability;
};

/** Append an entry (+ logo file in `public/frameworks/`) for each deep profile. */
export const SUPPORTED_DEEP_PROFILE_DETAILS: readonly SupportedDeepProfileDetail[] = [
  {
    id: "nextjs",
    title: "Next.js (JavaScript / TypeScript)",
    shortName: "Next.js",
    logoSrc: "/frameworks/nextjs.svg",
    availability: "live",
  },
  {
    id: "typescript",
    title: "TypeScript",
    shortName: "TypeScript",
    logoSrc: "/frameworks/typescript.svg",
    availability: "live",
  },
];

/** Live deep profiles only (FAQ copy; parity with the desktop app constant). */
export const SUPPORTED_DEEP_ANALYSIS_PROFILES = SUPPORTED_DEEP_PROFILE_DETAILS.filter(
  (profile) => (profile.availability ?? "live") === "live",
).map((profile) => profile.title);

export function supportedDeepProfilesSummary(): string {
  return SUPPORTED_DEEP_ANALYSIS_PROFILES.join(", ");
}

export function liveDeepProfileCount(): number {
  return SUPPORTED_DEEP_ANALYSIS_PROFILES.length;
}
