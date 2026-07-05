import { NextRequest, NextResponse } from "next/server";

// Simple shared-password gate for the preview deployment.
//
// Set the password in Vercel: Project → Settings → Environment Variables →
// add SITE_PASSWORD = <your chosen password>. If it is not set, the fallback
// below is used so the gate still works. Viewers see a browser login prompt and
// only need the PASSWORD (any username is accepted).
//
// To turn the gate OFF entirely (e.g. once the site goes public on the real
// domain), set SITE_PASSWORD to an empty value, or delete this file.

const PASSWORD = process.env.SITE_PASSWORD ?? "changeme";

export function middleware(req: NextRequest) {
  // Empty password disables the gate.
  if (!PASSWORD) return NextResponse.next();

  const header = req.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6)); // "username:password"
      const supplied = decoded.slice(decoded.indexOf(":") + 1);
      if (supplied === PASSWORD) return NextResponse.next();
    } catch {
      // fall through to the 401 below
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Personalized Pathways preview"',
    },
  });
}

// Gate every route except Next.js internal assets.
export const config = {
  matcher: ["/((?!_next/).*)"],
};
