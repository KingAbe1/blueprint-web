const GITHUB_REPO_API = "https://api.github.com/repos/KingAbe1/blueprint";

function githubApiHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "blueprint-web",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN?.trim();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

export async function getGitHubStarCount(): Promise<number | null> {
  try {
    const res = await fetch(GITHUB_REPO_API, {
      headers: githubApiHeaders(),
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export type ReleasePlatform = "apple" | "windows" | "linux";

export type ReleaseDownload = {
  id: string;
  label: string;
  detail: string;
  url: string;
  fileName: string;
  platform: ReleasePlatform;
};

export type GitHubReleaseSummary = {
  tagName: string;
  htmlUrl: string;
  publishedAt: string;
  /** @deprecated Prefer `downloads` */
  macDownloadUrl: string | null;
  /** @deprecated Prefer `downloads` */
  macAssetName: string | null;
  downloads: ReleaseDownload[];
};

type GitHubAsset = { name?: string; browser_download_url?: string };

function pickAsset(assets: GitHubAsset[], predicate: (name: string) => boolean): GitHubAsset | null {
  return assets.find((asset) => predicate(asset.name?.toLowerCase() ?? "")) ?? null;
}

function toDownload(
  id: string,
  label: string,
  detail: string,
  platform: ReleasePlatform,
  asset: GitHubAsset | null,
): ReleaseDownload | null {
  if (!asset?.name || !asset.browser_download_url) return null;
  return {
    id,
    label,
    detail,
    platform,
    url: asset.browser_download_url,
    fileName: asset.name,
  };
}

function collectDownloads(assets: GitHubAsset[]): ReleaseDownload[] {
  const picks = [
    toDownload(
      "mac-arm",
      "macOS",
      "Apple Silicon",
      "apple",
      pickAsset(assets, (name) => name.endsWith(".dmg") && name.includes("aarch64")),
    ),
    toDownload(
      "mac-intel",
      "macOS",
      "Intel",
      "apple",
      pickAsset(assets, (name) => name.endsWith(".dmg") && (name.includes("_x64") || name.includes("x64."))),
    ),
    toDownload(
      "windows",
      "Windows",
      "Installer",
      "windows",
      pickAsset(assets, (name) => name.endsWith("-setup.exe") || name.endsWith(".msi")),
    ),
    toDownload(
      "linux",
      "Linux",
      "AppImage",
      "linux",
      pickAsset(assets, (name) => name.endsWith(".appimage")),
    ),
  ];

  return picks.filter((item): item is ReleaseDownload => item !== null);
}

export async function getLatestRelease(): Promise<GitHubReleaseSummary | null> {
  try {
    const res = await fetch(`${GITHUB_REPO_API}/releases/latest`, {
      headers: githubApiHeaders(),
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      tag_name?: string;
      html_url?: string;
      published_at?: string;
      assets?: GitHubAsset[];
    };
    if (!data.tag_name || !data.html_url) return null;

    const assets = data.assets ?? [];
    const downloads = collectDownloads(assets);
    const macDownload = downloads.find((item) => item.id.startsWith("mac-")) ?? null;

    return {
      tagName: data.tag_name,
      htmlUrl: data.html_url,
      publishedAt: data.published_at ?? "",
      macDownloadUrl: macDownload?.url ?? null,
      macAssetName: macDownload?.fileName ?? null,
      downloads,
    };
  } catch {
    return null;
  }
}

export function formatStarCount(count: number): string {
  if (count >= 10_000) {
    return `${Math.round(count / 1000)}k`;
  }
  if (count >= 1000) {
    const thousands = count / 1000;
    const rounded = Math.round(thousands * 10) / 10;
    return Number.isInteger(rounded) ? `${rounded}k` : `${rounded.toFixed(1)}k`;
  }
  return count.toLocaleString("en-US");
}
