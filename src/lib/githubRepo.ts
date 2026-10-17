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
