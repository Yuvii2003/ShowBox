import { AWS_BUCKET_NAME } from '$env/static/private';
import { db, s3 } from '$lib/server/db/index.js';
import { project } from '$lib/server/db/schema.js';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function load({ params }) {
	const { projectId } = params;
	const [projectDetails] = await db.select().from(project).where(eq(project.id, projectId));
	if (!projectDetails) {
		error(404, 'Invalid project ID');
	}

	const command = new ListObjectsV2Command({
		Bucket: AWS_BUCKET_NAME,
		Prefix: projectDetails.s3_prefix
	});

	const allProjectFiles = await s3.send(command);

	return {
		projectDetails,
		allProjectFiles
	};
}
