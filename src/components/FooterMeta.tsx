import { GitHubStars } from "@/components/GitHubStars";
import {
  BRAND_NAME,
  GITHUB_LICENSE_URL,
  GITHUB_RELEASES_URL,
  GITHUB_REPO_URL,
  GITHUB_SECURITY_URL,
} from "@/constants/site";
import { getGitHubStarCount } from "@/lib/githubRepo";

export async function FooterMeta() {
  const githubStars = await getGitHubStarCount();

  return (
    <span className="footer-meta">
      © 2026 {BRAND_NAME} ·{" "}
      <a className="footer-github-link" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
        GitHub <GitHubStars count={githubStars} variant="pill" />
      </a>{" "}
      ·{" "}
      <a href={GITHUB_LICENSE_URL} target="_blank" rel="noreferrer">
        License
      </a>{" "}
      ·{" "}
      <a href={GITHUB_SECURITY_URL} target="_blank" rel="noreferrer">
        Security
      </a>{" "}
      ·{" "}
      <a href={GITHUB_RELEASES_URL} target="_blank" rel="noreferrer">
        Releases
      </a>{" "}
      · MIT
    </span>
  );
}

export function FooterMetaFallback() {
  return (
    <span className="footer-meta">
      © 2026 {BRAND_NAME} ·{" "}
      <a className="footer-github-link" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
        GitHub
      </a>{" "}
      ·{" "}
      <a href={GITHUB_LICENSE_URL} target="_blank" rel="noreferrer">
        License
      </a>{" "}
      ·{" "}
      <a href={GITHUB_SECURITY_URL} target="_blank" rel="noreferrer">
        Security
      </a>{" "}
      ·{" "}
      <a href={GITHUB_RELEASES_URL} target="_blank" rel="noreferrer">
        Releases
      </a>{" "}
      · MIT
    </span>
  );
}
