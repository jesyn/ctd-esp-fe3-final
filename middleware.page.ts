import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const access = req.cookies.get("Access");
  const url = req.nextUrl.pathname;

  if (url.includes("confirmacion-compra") && !access) {
    console.log("entro");
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: "/confirmacion-compra",
};
