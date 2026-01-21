import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req });
  const isAdminOK = token?.email === "saad@gmail.com";
  const isAdminRoute = req.nextUrl.pathname.startsWith("/users");
  if (isAdminRoute && !isAdminOK) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/unauthorized?callbackUrl=${callbackUrl}`, req.url),
    );
  }
  return NextResponse.next();
}
