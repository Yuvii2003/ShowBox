<script lang="ts">
	import { Folder, File } from '$lib/components/ui/tree-view';
	import Node from './Node.svelte';
	import type { TreeNode } from './tree';

	let { node }: { node: TreeNode } = $props();
	import { currentFile } from '$lib/store.svelte';
	import { toast } from 'svelte-sonner';
	async function handleFileCode() {
		currentFile.name = node.name;
		currentFile.fileAWSKey = node.fileAWSKey;
		const response = await fetch(
			`/api/getFileCode?fileAWSKey=${encodeURIComponent(node.fileAWSKey)}`
		);
		const codeData = await response.json();
		if (codeData.error && codeData.error !== '') {
			toast.error(codeData.error);
			return;
		}
		currentFile.code = codeData.content;
	}
</script>

{#if node.children}
	<Folder name={node.name} open={false}>
		{#each node.children as child (child.name)}
			<Node node={child} />
		{/each}
	</Folder>
{:else}
	<File name={node.name} onclick={handleFileCode} />
{/if}
