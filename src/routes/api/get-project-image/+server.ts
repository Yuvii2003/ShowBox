import { AWS_BUCKET_NAME } from '$env/static/private';
import { s3 } from '$lib/server/db/index.js';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const imageKey = url.searchParams.get('imageKey');
	if (!imageKey) {
		return json({ error: 'Image key is required' }, { status: 400 });
	}
	const command = new GetObjectCommand({
		Bucket: AWS_BUCKET_NAME,
		Key: imageKey
	});
	const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
	return json(signedUrl);
}
