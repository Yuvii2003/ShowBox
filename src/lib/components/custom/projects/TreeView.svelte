<script lang="ts">
	import type { FileTree } from './tree';
	import TreeView from './TreeView.svelte';

	let { tree }: { tree: FileTree } = $props();

	let open: Record<string, boolean> = $state({});

	function toggle(name: string) {
		open[name] = !open[name];
	}
</script>

<ul class="pl-3 space-y-1">
	{#each Object.entries(tree) as [name, content]}
		<li>
			{#if content !== null}
				<button class="cursor-pointer text-blue-600 hover:underline" onclick={() => toggle(name)}>
					{open[name] ? '📂' : '📁'}
					{name}
				</button>
				{#if open[name]}
					<TreeView tree={content} />
				{/if}
			{:else}
				<div class="pl-4 text-gray-700">📄 {name}</div>
			{/if}
		</li>
	{/each}
</ul>
