export const currentFile = $state<{
	name: string | null;
	code: string | null;
	fileAWSKey: string | null;
}>({
	name: null,
	code: null,
	fileAWSKey: null
});
