import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  const isFacebookBot =
    userAgent.includes('facebookexternalhit') || userAgent.includes('Facebot');

  if (isFacebookBot) {
    return NextResponse.rewrite(new URL('/safe', request.url));
  }

  return NextResponse.rewrite(new URL('/real', request.url));
}
