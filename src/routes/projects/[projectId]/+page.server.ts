import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { projectId } = params;
	if (isNaN(Number(projectId))) {
		error(404, 'Invalid project ID');
	}
}
