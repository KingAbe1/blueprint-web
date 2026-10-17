import {
  GITHUB_CHANGELOG_URL,
  GITHUB_GET_STARTED_URL,
  GITHUB_RELEASES_URL,
} from "@/constants/site";
import { getLatestRelease } from "@/lib/githubRepo";

export async function DownloadSection() {
  const latestRelease = await getLatestRelease();

  return (
    <section className="download-section section-wrap" id="download">
      <div className="download-inner">
        <div className="download-copy">
          <span className="section-eyebrow">Run it locally</span>
          <h2>Browser or desktop.</h2>
          <p>
            Clone the repo and follow the README for <code>npm run dev</code> or <code>npm run tauri:dev</code>.
            {latestRelease
              ? ` Latest tagged release: ${latestRelease.tagName}.`
              : " Pre-built desktop installers will show up on GitHub Releases when they are published."}
          </p>
        </div>
        <div className="download-actions">
          <a className="button-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
            Build from source <span>↗</span>
          </a>
          {latestRelease?.macDownloadUrl ? (
            <a className="download-secondary-cta" href={latestRelease.macDownloadUrl} target="_blank" rel="noreferrer">
              Download for macOS
              <span className="download-asset-name">{latestRelease.macAssetName}</span>
            </a>
          ) : null}
          <a className="text-link" href={GITHUB_RELEASES_URL} target="_blank" rel="noreferrer">
            {latestRelease ? "All release assets" : "GitHub Releases"} <span>↗</span>
          </a>
          {latestRelease ? (
            <a className="text-link" href={GITHUB_CHANGELOG_URL} target="_blank" rel="noreferrer">
              Changelog <span>↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function DownloadSectionFallback() {
  return (
    <section className="download-section section-wrap" id="download" aria-busy="true">
      <div className="download-inner">
        <div className="download-copy">
          <span className="section-eyebrow">Run it locally</span>
          <h2>Browser or desktop.</h2>
          <p>Clone the repo and follow the README for <code>npm run dev</code> or <code>npm run tauri:dev</code>.</p>
        </div>
        <div className="download-actions">
          <a className="button-primary" href={GITHUB_GET_STARTED_URL} target="_blank" rel="noreferrer">
            Build from source <span>↗</span>
          </a>
          <a className="text-link" href={GITHUB_RELEASES_URL} target="_blank" rel="noreferrer">
            GitHub Releases <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
