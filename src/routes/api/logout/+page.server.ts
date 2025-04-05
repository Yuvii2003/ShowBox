import { invalidateSession, deleteSessionTokenCookie } from '$lib/server/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		console.log('Logging out...');
		if (!event.locals.session) {
			return fail(401);
		}
		await invalidateSession(event.locals.session.id);
		deleteSessionTokenCookie(event);

		return redirect(302, '/login');
	}
};
