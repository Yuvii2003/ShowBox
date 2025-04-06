import { AWS_BUCKET_NAME } from '$env/static/private';
import { s3 } from '$lib/server/db';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { json } from '@sveltejs/kit';
import type { Readable } from 'stream';

async function streamToString(stream: Readable): Promise<string> {
	let data = '';
	for await (const chunk of stream) {
		data += typeof chunk === 'string' ? chunk : chunk.toString('utf-8');
	}
	return data;
}

export async function GET({ url }) {
	const fileAWSKey = url.searchParams.get('fileAWSKey');
	if (!fileAWSKey) {
		return json({ error: 'fileAWSKey is required' }, { status: 400 });
	}

	const command = new GetObjectCommand({
		Bucket: AWS_BUCKET_NAME,
		Key: fileAWSKey
	});

	try {
		const result = await s3.send(command);

		if (!result.Body) {
			return json({ error: 'Empty file body returned' }, { status: 500 });
		}

		const stream = result.Body as Readable;
		const content = await streamToString(stream);

		return json({ content });
	} catch (error) {
		console.error('Error fetching file:', error);
		return json({ error: 'Error fetching file' }, { status: 500 });
	}
}
