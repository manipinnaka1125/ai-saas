import { auth, clerkMiddleware ,createRouteMatcher} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { request } from "http";


export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};