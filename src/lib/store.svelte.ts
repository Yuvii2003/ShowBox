type ProjectType = {
	id: string;
	userId: string;
	name: string;
	description: string;
	contributors: string[];
	s3_prefix: string;
	starred?: boolean;
	createdAt: Date;
};
export const currentFile = $state<{
	name: string | null;
	code: string | null;
	fileAWSKey: string | null;
}>({
	name: null,
	code: null,
	fileAWSKey: null
});

export const currentProjects = $state<ProjectType[]>();
