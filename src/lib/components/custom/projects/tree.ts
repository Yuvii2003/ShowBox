export type TreeNode = {
	name: string;
	fileAWSKey: string;
	children?: TreeNode[];
};

export type FileType = {
	fileArray: string[];
	fileAWSKey: string;
};

export function buildTree(files: FileType[]): TreeNode[] {
	const root: TreeNode[] = [];

	for (const file of files) {
		const path = file.fileArray;
		let current = root;

		for (let i = 0; i < path.length; i++) {
			const segment = path[i];
			let existing = current.find((node) => node.name === segment);

			if (!existing) {
				existing = {
					name: segment,
					fileAWSKey: i === path.length - 1 ? file.fileAWSKey : ''
				};
				current.push(existing);
			}

			if (i < path.length - 1) {
				if (!existing.children) existing.children = [];
				current = existing.children;
			}
		}
	}

	const sortTree = (nodes: TreeNode[]) => {
		nodes.sort((a, b) => {
			const isAFolder = !!a.children;
			const isBFolder = !!b.children;

			if (isAFolder && !isBFolder) return -1;
			if (!isAFolder && isBFolder) return 1;

			return a.name.localeCompare(b.name);
		});

		for (const node of nodes) {
			if (node.children) sortTree(node.children);
		}
	};

	sortTree(root);
	return root;
}
