import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  console.log('User-Agent:', userAgent); // Add this for debugging

  const isFacebookBot =
    userAgent.includes('facebookexternalhit') || userAgent.includes('Facebot');

  if (isFacebookBot) {
    console.log('Redirecting to /safe'); // Add this for debugging
    return NextResponse.rewrite(new URL('/safe', request.url));
  }

  console.log('Redirecting to /real'); // Add this for debugging
  return NextResponse.rewrite(new URL('/real', request.url));
}

export const config = {
  matcher: '/', // Apply middleware to the homepage
};
