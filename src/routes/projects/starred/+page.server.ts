import { db } from '$lib/server/db/index.js';
import { project, starredProject } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export async function load({ locals }) {
	if (!locals.user) {
		throw new Error('Unauthorized access');
	}

	const starredProjects = await db
		.select({
			id: project.id,
			userId: project.userId,
			name: project.name,
			description: project.description,
			image: project.image,
			contributors: project.contributors,
			s3_prefix: project.s3_prefix,
			createdAt: project.createdAt,
			starredId: starredProject.id
		})
		.from(starredProject)
		.innerJoin(project, eq(starredProject.projectId, project.id))
		.where(eq(starredProject.userId, locals.user.id));

	return {
		starredProjects
	};
}
