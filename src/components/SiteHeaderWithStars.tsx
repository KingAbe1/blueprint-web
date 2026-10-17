import { SiteHeader } from "@/components/SiteHeader";
import { getGitHubStarCount } from "@/lib/githubRepo";

export async function SiteHeaderWithStars() {
  const githubStars = await getGitHubStarCount();
  return <SiteHeader githubStars={githubStars} />;
}
