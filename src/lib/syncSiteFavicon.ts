import { brandAppIconSrc } from "@/lib/brandAssets";

export function syncSiteFavicon(isDark: boolean): void {
  if (typeof document === "undefined") return;

  const href = brandAppIconSrc(isDark);
  let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");

  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }

  link.type = "image/svg+xml";
  link.href = href;
}
