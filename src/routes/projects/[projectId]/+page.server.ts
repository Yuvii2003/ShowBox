import { db } from '$lib/server/db/index.js';
import { project, starredProject } from '$lib/server/db/schema.js';
import { and, eq } from 'drizzle-orm';

export async function load({ params, locals }) {
	if (!locals.user) {
		throw new Error('User not found');
	}
	const projectId = params.projectId;
	const [result] = await db
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
		.from(project)
		.leftJoin(
			starredProject,
			and(eq(starredProject.projectId, project.id), eq(starredProject.userId, locals.user.id))
		)
		.where(eq(project.id, projectId));
	if (!result) {
		throw new Error(`Project with ID ${projectId} not found`);
	}

	const { starredId, ...projectData } = result;
	const isStarred = Boolean(starredId);

	return {
		projectData,
		isStarred
	};
}
