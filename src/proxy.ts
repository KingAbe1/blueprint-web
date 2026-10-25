import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Canonical host is non-www (matches SITE_URL). Redirect www → apex with 301. */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (!host.toLowerCase().startsWith("www.")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.host = host.slice(4);
  url.protocol = "https:";
  return NextResponse.redirect(url, 301);
}
