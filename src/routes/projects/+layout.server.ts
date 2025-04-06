import { db } from '$lib/server/db/index.js';
import { project } from '$lib/server/db/schema.js';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function load({ locals }) {
	if (!locals.user || !locals.session) {
		redirect(302, '/login');
	}

	const allUserProjects = await db.select().from(project).where(eq(project.userId, locals.user.id));

	return {
		user: locals.user,
		session: locals.session.expiresAt,
		allUserProjects
	};
}
