import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware';

export default withAuth(async function middleware(req) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  const { role, approved, isAdmin } = req.nextauth.token;

  if (!req.nextauth.token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (!approved) {
    return NextResponse.redirect(new URL('/pending-approval', req.url));
  }

  if (isAdmin) {
    if (pathname !== '/admin')
      return NextResponse.redirect(new URL('/admin', req.url));
  } else if (role === 'WORKER') {
    if (pathname !== '/worker')
      return NextResponse.redirect(new URL('/worker', req.url));
  } else if (role === 'EMPLOYER') {
    if (pathname !== '/employer')
      return NextResponse.redirect(new URL('/employer', req.url));
  }
}, {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/login',
    },
  })

export const config = { matcher: ['/((?!login|signup|$).*)'] }