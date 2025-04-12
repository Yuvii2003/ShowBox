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
		return !ignoredPatterns.some((pattern) => {
			pattern = pattern.replace(/^\/|\/$/g, '');
			const regexPattern = pattern
				.replace(/[.+^${}()|[\]\\]/g, '\\$&')
				.replace(/\*/g, '.*')
				.replace(/\?/g, '.');

			const fullRegex = new RegExp(
				pattern.startsWith('/') ? `^${regexPattern}$` : `(^|/)${regexPattern}($|/)`,
				'i'
			);

			return fullRegex.test(filePath);
		});
	});
}
