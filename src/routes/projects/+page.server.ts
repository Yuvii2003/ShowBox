import { db } from '$lib/server/db';
import { project } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function load({ locals }) {
	if (!locals.user) {
		redirect(308, '/login');
	}
	const myProjects = await db.select().from(project).where(eq(project.userId, locals.user.id));
	return {
		projects: myProjects
	};
}
