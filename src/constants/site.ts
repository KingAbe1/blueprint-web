/** User-facing product name (always lowercase), matches the desktop app. */
export const BRAND_NAME = "blueprint studio";
export const GITHUB_REPO_URL = "https://github.com/KingAbe1/blueprint";
export const GITHUB_GET_STARTED_URL = `${GITHUB_REPO_URL}#readme`;
export const GITHUB_CONTRIBUTE_URL = GITHUB_REPO_URL;
export const GITHUB_LICENSE_URL = `${GITHUB_REPO_URL}/blob/main/LICENSE`;
export const GITHUB_SECURITY_URL = `${GITHUB_REPO_URL}/blob/main/SECURITY.md`;
export const GITHUB_RELEASES_URL = `${GITHUB_REPO_URL}/releases`;
export const GITHUB_CHANGELOG_URL = GITHUB_RELEASES_URL;
export const HERO_SCREENSHOT_PATH = "/hero-screenshot.png";
export { BRAND_ICON_PATH } from "@/lib/brandAssets";

/** Prefer `NEXT_PUBLIC_SITE_URL` (custom domain) when set; keep a trailing slash. */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueprint-web-chi.vercel.app/";
export const SITE_URL = rawSiteUrl.endsWith("/") ? rawSiteUrl : `${rawSiteUrl}/`;
export const SITE_ORIGIN = SITE_URL.slice(0, -1);

/** Absolute share image (OG/Twitter). Uses the hero screenshot until a dedicated 1200×630 asset exists. */
export const OG_IMAGE_URL = `${SITE_ORIGIN}${HERO_SCREENSHOT_PATH}`;
export const OG_IMAGE_ALT = `${BRAND_NAME}: local studio to plan products, scan repos, and export agent handoffs`;

export const SITE_DESCRIPTION =
  "Local studio to plan new products or scan existing repos. Agent handoffs and codebase quality reports, on your machine.";

export const SITE_TITLE = `${BRAND_NAME} · Plan products, scan repos, agent handoffs`;
