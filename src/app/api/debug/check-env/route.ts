/**
 * Environment Variables Check Endpoint
 *
 * This endpoint helps diagnose environment variable configuration issues.
 *
 * Usage: GET /api/debug/check-env
 *
 * WARNING: Remove this endpoint before going to production or add authentication!
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const envVars = {
    // Storage configuration
    STORAGE_REGION: process.env.STORAGE_REGION,
    STORAGE_BUCKET_NAME: process.env.STORAGE_BUCKET_NAME,
    STORAGE_ENDPOINT: process.env.STORAGE_ENDPOINT,
    STORAGE_PUBLIC_URL: process.env.STORAGE_PUBLIC_URL,
    STORAGE_ACCESS_KEY_ID: process.env.STORAGE_ACCESS_KEY_ID
      ? '✅ SET (hidden)'
      : '❌ NOT SET',
    STORAGE_SECRET_ACCESS_KEY: process.env.STORAGE_SECRET_ACCESS_KEY
      ? '✅ SET (hidden)'
      : '❌ NOT SET',

    // Runtime info
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_REGION: process.env.VERCEL_REGION,
    NODE_OPTIONS: process.env.NODE_OPTIONS,

    // Database
    DATABASE_URL: process.env.DATABASE_URL ? '✅ SET (hidden)' : '❌ NOT SET',

    // Auth
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET
      ? '✅ SET (hidden)'
      : '❌ NOT SET',
  };

  // Check for missing critical variables
  const missingVars: string[] = [];

  if (!process.env.STORAGE_REGION) missingVars.push('STORAGE_REGION');
  if (!process.env.STORAGE_BUCKET_NAME) missingVars.push('STORAGE_BUCKET_NAME');
  if (!process.env.STORAGE_ENDPOINT) missingVars.push('STORAGE_ENDPOINT');
  if (!process.env.STORAGE_ACCESS_KEY_ID)
    missingVars.push('STORAGE_ACCESS_KEY_ID');
  if (!process.env.STORAGE_SECRET_ACCESS_KEY)
    missingVars.push('STORAGE_SECRET_ACCESS_KEY');

  return NextResponse.json({
    status: missingVars.length === 0 ? 'OK' : 'ERROR',
    message:
      missingVars.length === 0
        ? 'All critical environment variables are set'
        : `Missing ${missingVars.length} critical environment variable(s)`,
    missingVars,
    envVars,
    timestamp: new Date().toISOString(),
    warning: '⚠️ Remove this endpoint in production or add authentication!',
  });
}
