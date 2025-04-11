import { db } from '$lib/server/db';
import { project } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { ilike } from 'drizzle-orm';

export async function GET({ url }) {
	const q = url.searchParams.get('q')?.toUpperCase().trim();
	const projects = await db
		.select()
		.from(project)
		.where(ilike(project.s3_prefix, `${q}%`));
	return json(projects);
}
