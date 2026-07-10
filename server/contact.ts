/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'node:fs';
import path from 'node:path';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  data?: ContactPayload;
  error?: string;
}

export interface ContactResult {
  status: number;
  body: { success: boolean; error?: string };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(body: unknown): ValidationResult {
  if (typeof body !== 'object' || body === null) {
    return { error: 'Invalid request body.' };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string'
  ) {
    return { error: 'All fields are required.' };
  }

  const data: ContactPayload = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };

  if (!data.name || !data.email || !data.subject || !data.message) {
    return { error: 'Please fill out all fields before submitting.' };
  }
  if (!EMAIL_RE.test(data.email)) {
    return { error: 'Please provide a valid email address.' };
  }

  return { data };
}

/**
 * Validates and records a contact submission.
 *
 * @param persistDir Optional writable directory to append submissions to.
 *   Omit on read-only/serverless hosts (e.g. Vercel) where the submission is
 *   only logged.
 */
export function handleContact(body: unknown, persistDir?: string): ContactResult {
  const { data, error } = validateContact(body);
  if (error || !data) {
    return { status: 400, body: { success: false, error: error || 'Invalid request body.' } };
  }

  const record = { ...data, receivedAt: new Date().toISOString() };
  console.log(
    `[contact] New message from ${record.name} <${record.email}>: ${record.subject}`,
  );

  if (persistDir) {
    try {
      fs.mkdirSync(persistDir, { recursive: true });
      fs.appendFileSync(
        path.join(persistDir, 'contact-submissions.jsonl'),
        `${JSON.stringify(record)}\n`,
      );
    } catch (err) {
      console.error('[contact] Failed to persist submission:', err);
      return {
        status: 500,
        body: { success: false, error: 'Failed to send message. Please try again later.' },
      };
    }
  }

  return { status: 201, body: { success: true } };
}
