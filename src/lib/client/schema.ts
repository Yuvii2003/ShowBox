import { z } from 'zod';

export const projectUpload = z.object({
	projectName: z
		.string()
		.min(2, 'Project name must be at least 2 characters')
		.max(50, 'Project name cannot exceed 50 characters'),
	description: z
		.string()
		.min(2, 'Description must be at least 2 characters')
		.max(500, 'Description cannot exceed 500 characters'),
	contributors: z
		.string()
		.min(2, 'Contributors must be at least 2 characters')
		.max(100, 'Contributors cannot exceed 100 characters'),
	files: z
		.instanceof(File, { message: 'Please upload a file.' })
		.array()
		.refine(
			(files) => {
				return files.length > 0;
			},
			{
				message: 'Please upload at least one file.'
			}
		)
});

export type ProjectUpload = typeof projectUpload;
