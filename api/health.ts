/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Vercel serverless function.
export default async function handler(): Promise<Response> {
  return new Response(JSON.stringify({ status: 'ok' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
