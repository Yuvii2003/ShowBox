<script lang="ts">
	import { buildTree } from '$lib/components/custom/projects/tree';
	import TreeView from '$lib/components/custom/projects/TreeView.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const allProjectFiles = data.allProjectFiles.Contents?.map((file) => {
		if (file.Key) {
			return file.Key.split('/').slice(3);
		}
		return null;
	}).filter((file) => {
		if (!file) {
			return false;
		}
		return file.length > 0;
	});
	console.log(allProjectFiles);
	const fileTree = buildTree(allProjectFiles as string[][]);
	// 21BCG10156/chat-app/chat-app/src/lib/components/ui/breadcrumb/breadcrumb.svelte
	// [src, lib, components, ui, breadcrumb, breadcrumb.svelte]
</script>

<div class="w-full h-full flex">
	<div class="w-1/4 h-full">
		<h2 class="text-xl font-bold mb-4">🗂️ {data.projectDetails.name}</h2>
		<TreeView tree={fileTree} />
	</div>
	<div class="w-3/4 bg-red-500 h-full"></div>
</div>
