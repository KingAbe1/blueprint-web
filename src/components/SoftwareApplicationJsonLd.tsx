import {
  BRAND_NAME,
  GITHUB_GET_STARTED_URL,
  GITHUB_RELEASES_URL,
  GITHUB_REPO_URL,
  SITE_URL,
} from "@/constants/site";

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND_NAME,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Windows, Linux, Web",
    description:
      "Local studio to plan new products or scan existing repos. Agent handoffs and codebase quality reports, on your machine.",
    url: SITE_URL,
    downloadUrl: GITHUB_RELEASES_URL,
    softwareHelp: GITHUB_GET_STARTED_URL,
    codeRepository: GITHUB_REPO_URL,
    license: "https://opensource.org/licenses/MIT",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
