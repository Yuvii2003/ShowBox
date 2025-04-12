import { db } from '$lib/server/db/index.js';
import { project } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export async function load({ params }) {
	const projectId = params.projectId;
	const [projectData] = await db.select().from(project).where(eq(project.id, projectId));
	return {
		projectData
	};
}
