import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { Google, MicrosoftEntraId } from 'arctic';
import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	MICROSOFT_CLIENT_ID,
	MICROSOFT_CLIENT_SECRET,
	MICROSOFT_TENANT_ID
} from '$env/static/private';
import { dev } from '$app/environment';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = postgres(env.DATABASE_URL);

export const db = drizzle(client, { schema });

export const google = new Google(
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	dev
		? 'http://localhost:5173/login/google/callback'
		: 'https://showbox.vercel.app/login/google/callback'
);

export const microsoft = new MicrosoftEntraId(
	MICROSOFT_TENANT_ID,
	MICROSOFT_CLIENT_ID,
	MICROSOFT_CLIENT_SECRET,
	dev
		? 'http://localhost:5173/login/microsoft/callback'
		: 'https://showbox.vercel.app/login/microsoft/callback'
);
