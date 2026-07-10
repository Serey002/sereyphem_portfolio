/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { handleContact } from '../server/contact';

const json = (body: unknown, status: number): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

// Vercel serverless function. The filesystem is read-only here, so submissions
// are logged (visible in Vercel function logs) rather than persisted to disk.
export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ success: false, error: 'Method not allowed.' }, 405);
  }

  const body = await request.json().catch(() => null);
  const result = handleContact(body);
  return json(result.body, result.status);
}
