import Image from "next/image";
import { SUPPORTED_DEEP_PROFILE_DETAILS } from "@/constants/supportedAnalysisProfiles";

export function SupportedFrameworkProfilesSection() {
  return (
    <section
      className="supported-profiles-section"
      id="supported-profiles"
      aria-labelledby="supported-profiles-heading"
    >
      <div className="section-wrap supported-profiles-strip">
        <div className="supported-profiles-copy">
          <span className="supported-profiles-label">Brownfield analysis</span>
          <h2 id="supported-profiles-heading">Framework-aware analysis</h2>
        </div>

        <ul className="supported-framework-logos" aria-label="Frameworks with deep analysis support">
          {SUPPORTED_DEEP_PROFILE_DETAILS.map((profile) => (
            <li key={profile.id} title={profile.title}>
              <Image src={profile.logoSrc} alt={profile.title} width={64} height={64} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
