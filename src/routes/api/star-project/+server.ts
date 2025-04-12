import { db } from '$lib/server/db/index.js';
import { starredProject } from '$lib/server/db/schema.js';
import { json } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';

export async function POST({ request }) {
	try {
		const { projectId, starred, userId }: { projectId: string; starred: boolean; userId: string } =
			await request.json();
		if (starred) {
			await db.insert(starredProject).values({ userId, projectId }).onConflictDoNothing();
		} else {
			await db
				.delete(starredProject)
				.where(and(eq(starredProject.userId, userId), eq(starredProject.projectId, projectId)));
		}

		return json({ success: true });
	} catch (err) {
		console.error('Error toggling star:', err);
		return json({ success: false, message: 'Something went wrong.' }, { status: 500 });
	}
}
