import { NextResponse } from 'next/server'
import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
        signIn:"/login"
    }
  }
)
 
export const config = { matcher: ["/((?!login|signup).*)"] }