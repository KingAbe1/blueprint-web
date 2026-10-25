import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import {
  BRAND_NAME,
  GITHUB_CONTRIBUTE_URL,
  GITHUB_REPO_URL,
} from "@/constants/site";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="not-found-panel section-wrap">
        <p className="hero-brand not-found-brand">
          <BrandMark variant="mark" width={20} height={20} className="hero-brand-mark" />
          <span>{BRAND_NAME}</span>
        </p>
        <p className="section-eyebrow">404</p>
        <h1>This page is missing.</h1>
        <p className="not-found-copy">
          The link may be outdated, or the page never existed. The rest of {BRAND_NAME} is still here:
          planning, scanning, and local agent handoffs.
        </p>
        <div className="hero-actions not-found-actions">
          <Link className="button-primary" href="/">
            Back to home <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link" href="/#download">
            Download <span aria-hidden="true">→</span>
          </Link>
          <a className="text-link" href={GITHUB_CONTRIBUTE_URL} target="_blank" rel="noreferrer">
            Report on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="not-found-hint">
          Think this is a bug?{" "}
          <a href={`${GITHUB_REPO_URL}/issues`} target="_blank" rel="noreferrer">
            Open an issue
          </a>
          .
        </p>
      </div>
    </main>
  );
}
