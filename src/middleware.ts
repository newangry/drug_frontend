import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
export const config = {
    matcher: [
        '/((?!_next/|_proxy/|_auth/|_root/|_static|static|_vercel|[\\w-]+\\.\\w+).*)',
    ],
};
export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
    NextResponse.next();
}