<script lang="ts">
	import { Root } from '$lib/components/ui/tree-view';
	import Node from './Node.svelte';
	import type { TreeNode } from './tree';

	let { filePaths }: { filePaths: TreeNode[] } = $props();
</script>

<div class="w-full h-full overflow-y-auto">
	<Root class="text-nowrap">
		{#each filePaths as node (node.name)}
			<Node {node} />
		{/each}
	</Root>
</div>
