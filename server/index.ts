/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const PORT = Number(process.env.PORT) || 3001;
const dataDir = path.join(rootDir, 'data');
const submissionsFile = path.join(dataDir, 'contact-submissions.jsonl');

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationResult {
  data?: ContactPayload;
  error?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(body: unknown): ValidationResult {
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

const app = express();
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  const { data, error } = validateContact(req.body);
  if (error || !data) {
    res.status(400).json({ success: false, error: error || 'Invalid request body.' });
    return;
  }

  const record = { ...data, receivedAt: new Date().toISOString() };
  try {
    fs.mkdirSync(dataDir, { recursive: true });
    fs.appendFileSync(submissionsFile, `${JSON.stringify(record)}\n`);
    console.log(
      `[contact] New message from ${record.name} <${record.email}>: ${record.subject}`,
    );
    res.status(201).json({ success: true });
  } catch (err) {
    console.error('[contact] Failed to store submission:', err);
    res
      .status(500)
      .json({ success: false, error: 'Failed to send message. Please try again later.' });
  }
});

// Serve the built frontend in production (after `npm run build`).
const distDir = path.join(rootDir, 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
