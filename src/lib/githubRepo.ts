const GITHUB_REPO_API = "https://api.github.com/repos/KingAbe1/blueprint";

export async function getGitHubStarCount(): Promise<number | null> {
  try {
    const res = await fetch(GITHUB_REPO_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "blueprint-web",
      },
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export type GitHubReleaseSummary = {
  tagName: string;
  htmlUrl: string;
  publishedAt: string;
  macDownloadUrl: string | null;
  macAssetName: string | null;
};

export async function getLatestRelease(): Promise<GitHubReleaseSummary | null> {
  try {
    const res = await fetch(`${GITHUB_REPO_API}/releases/latest`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "blueprint-web",
      },
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      tag_name?: string;
      html_url?: string;
      published_at?: string;
      assets?: { name?: string; browser_download_url?: string }[];
    };
    if (!data.tag_name || !data.html_url) return null;

    const macAsset =
      data.assets?.find((asset) => {
        const name = asset.name?.toLowerCase() ?? "";
        return (
          name.includes("darwin") ||
          name.includes("macos") ||
          name.includes("mac") ||
          name.endsWith(".dmg") ||
          name.endsWith(".app.tar.gz")
        );
      }) ?? null;

    return {
      tagName: data.tag_name,
      htmlUrl: data.html_url,
      publishedAt: data.published_at ?? "",
      macDownloadUrl: macAsset?.browser_download_url ?? null,
      macAssetName: macAsset?.name ?? null,
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
