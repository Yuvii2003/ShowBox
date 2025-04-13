import { db } from '$lib/server/db';
import { project, starredProject } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { and, eq, ilike, or, sql } from 'drizzle-orm';

export async function GET({ url, locals }) {
	if (!locals.user) {
		throw new Error('User not found');
	}
	const q = url.searchParams.get('q');
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
		.where(
			or(
				ilike(project.name, `%${q}%`),
				sql`
	      EXISTS (
	        SELECT 1 FROM unnest(${project.contributors}) AS contributor
	        WHERE contributor ILIKE ${`%${q}%`}
	      )
	    `
			)
		);
	return json(projects);
}
