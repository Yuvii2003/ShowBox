// src/lib/tree.ts

export type FileTree = {
	[name: string]: FileTree | null;
};

/**
 * Converts array of path segments into a nested file tree object.
 * @param paths - List of file paths represented as string arrays.
 */
export function buildTree(paths: string[][]): FileTree {
	const root: FileTree = {};

	for (const path of paths) {
		let current: FileTree = root;

		for (let i = 0; i < path.length; i++) {
			const part = path[i];
			const isFile = i === path.length - 1;

			if (!(part in current)) {
				current[part] = isFile ? null : {};
			}

			if (!isFile && current[part] !== null) {
				current = current[part] as FileTree;
			}
		}
	}

	return root;
}
