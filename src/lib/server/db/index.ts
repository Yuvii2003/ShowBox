import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { Google, MicrosoftEntraId } from 'arctic';
import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	MICROSOFT_CLIENT_ID,
	MICROSOFT_CLIENT_SECRET,
	MICROSOFT_TENANT_ID,
	DATABASE_URL,
	AWS_REGION,
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY
} from '$env/static/private';
import { dev } from '$app/environment';
import { S3Client } from '@aws-sdk/client-s3';

const client = postgres(DATABASE_URL);

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

export const s3 = new S3Client({
	region: AWS_REGION,
	credentials: {
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY
	}
});
