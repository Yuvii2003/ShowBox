import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function parseFile(file: File): Promise<string[]> {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.onload = () => {
			const lines = (reader.result as string)
				.split('\n')
				.map((line) => line.trim())
				.filter((line) => line && !line.startsWith('#'));
			resolve(lines);
		};
		reader.readAsText(file);
	});
}

export function filterIgnoredFiles(files: File[], ignoredPatterns: string[]) {
	return files.filter((f) => {
		const filePath = f.webkitRelativePath || f.name;
		// const fileSize = f.size;
		// if (fileSize === 0) {
		// 	console.log('File is empty:', filePath);
		// }
		return !ignoredPatterns.some((pattern) => {
			// Remove leading and trailing slashes
			pattern = pattern.replace(/^\/|\/$/g, '');

			// Escape special regex characters except * and ?
			const regexPattern = pattern
				.replace(/[.+^${}()|[\]\\]/g, '\\$&') // Escape regex special chars
				.replace(/\*/g, '.*') // * becomes .* (any characters)
				.replace(/\?/g, '.'); // ? becomes . (single character)

			// Check if pattern starts with /, which means it should match from root
			const fullRegex = new RegExp(
				pattern.startsWith('/') ? `^${regexPattern}$` : `(^|/)${regexPattern}($|/)`,
				'i' // Case insensitive
			);

			return fullRegex.test(filePath);
		});
	});
}

// async function handleFilter() {
// 	try {
// 		const toastId = toast.loading('Loading files...');
// 		const gitignoreFile = $formData.files.find(
// 			(file) => file.name === '.gitignore' || file.webkitRelativePath?.endsWith('/.gitignore')
// 		);
// 		if (!gitignoreFile) {
// 			toast.success('Files filtered successfully!', { id: toastId });
// 			return;
// 		}

// 		const ignoredPatterns = await parseGitignore(gitignoreFile);
// 		const filteredFiles = filterIgnoredFiles($formData.files, ignoredPatterns);
// 		$formData.files = filteredFiles;
// 		console.log($files);
// 		console.log($formData.files);
// 		toast.success('Files filtered successfully!', { id: toastId });
// 	} catch (error) {
// 		console.error('Error filtering files:', error);
// 		toast.error('Error filtering files: ');
// 	}
// }
