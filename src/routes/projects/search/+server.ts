import { db } from '$lib/server/db';
import { project } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { ilike, or, sql } from 'drizzle-orm';

export async function GET({ url }) {
	const q = url.searchParams.get('q');
	const projects = await db
		.select()
		.from(project)
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
