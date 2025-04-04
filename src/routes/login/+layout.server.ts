import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (locals.user && locals.session) {
		redirect(302, '/projects');
	}
}
