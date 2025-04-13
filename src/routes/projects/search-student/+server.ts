import { db } from '$lib/server/db';
import { project, starredProject } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { and } from 'drizzle-orm';
import { ilike } from 'drizzle-orm';

export async function GET({ url, locals }) {
	if (!locals.user) {
		throw new Error('User not found');
	}
	const q = url.searchParams.get('q')?.toUpperCase().trim();
	const projects = await db
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
		.where(ilike(project.s3_prefix, `${q}%`));
	return json(projects);
}
