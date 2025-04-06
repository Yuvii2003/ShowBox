<script lang="ts">
	import { buildTree, type FileType } from '$lib/components/custom/projects/tree';
	import TreeViewComponent from '$lib/components/custom/projects/TreeViewComponent.svelte';
	import CodeComponent from '$lib/components/custom/projects/CodeComponent.svelte';
	import { Separator } from '$lib/components/ui/separator/index';
	import type { PageData } from './$types';
	import { currentFile } from '$lib/store.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar';

	let { data }: { data: PageData } = $props();
	const allProjectFiles = data.allProjectFiles.Contents?.map((file) => {
		if (file.Key) {
			return {
				fileArray: file.Key.split('/').slice(3),
				fileAWSKey: file.Key
			};
		}
		return null;
	}).filter((file) => {
		if (!file) {
			return false;
		}
		return file.fileArray.length > 0;
	});
	const filePaths = buildTree(allProjectFiles as FileType[]);
	const sidebar = useSidebar();
	$inspect(currentFile);
</script>

<main
	class="flex h-full"
	style={`width: calc(100vw - var(${sidebar.state === 'collapsed' ? '--sidebar-width-icon' : '--sidebar-width'}))`}
>
	<div class="w-1/4 p-4 h-[calc(100vh-90px)]">
		<h2 class="text-xl font-bold mb-4">🗂️ {data.projectDetails.name}</h2>
		<TreeViewComponent {filePaths} />
	</div>
	<Separator orientation="vertical" />
	<div class="w-3/4 px-4 pt-6 pb-1">
		<CodeComponent />
	</div>
</main>
