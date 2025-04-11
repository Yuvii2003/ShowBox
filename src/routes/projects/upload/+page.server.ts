import { message, fail } from 'sveltekit-superforms';
import { projectUpload } from '$lib/client/schema.js';
import type { PageServerLoad, Actions } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { Buffer } from 'buffer';

import { zod } from 'sveltekit-superforms/adapters';
import { db, s3 } from '$lib/server/db/index.js';
import { project } from '$lib/server/db/schema.js';
import { AWS_BUCKET_NAME } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(projectUpload))
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(projectUpload));
		if (!form.valid) {
			return fail(400, { form });
		}
		const s3_prefix = `${locals.user?.registrationNumber}/${form.data.projectName}/`;
		const uploadPromises = form.data.files.map(async (file) => {
			const key = file.webkitRelativePath || file.name;

			const buffer = await file.arrayBuffer();

			const uploadCommand = new PutObjectCommand({
				Bucket: AWS_BUCKET_NAME,
				Key: `${s3_prefix}${key}`,
				Body: Buffer.from(buffer),
				ContentType: file.type
			});

			return s3.send(uploadCommand);
		});
		await Promise.all(uploadPromises);
		const [newProject] = await db
			.insert(project)
			.values({
				userId: locals.user?.id as string,
				name: form.data.projectName,
				description: form.data.description,
				contributors: form.data.contributors.split(','),
				s3_prefix
			})
			.returning();
		return message(form, { message: 'Posted OK!', id: newProject.id });
	}
};
