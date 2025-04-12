import { db } from '$lib/server/db';
import { starredProject } from '$lib/server/db/schema';
import { project } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { and } from 'drizzle-orm';
import { eq } from 'drizzle-orm';

export async function load({ locals }) {
	if (!locals.user) {
		redirect(308, '/login');
	}
	const myProjects = await db
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
		.where(eq(project.userId, locals.user.id));
	return {
		projects: myProjects
	};
}
