<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Button } from '$lib/components/ui/button';
	import { FileCode2 } from '@lucide/svelte';

	let { data }: { data: PageData } = $props();

	let projectImage = $state({
		url: '/card-top.jpg',
		alt: 'Sunset in the mountains'
	});
	async function fetchProjectImage() {
		console.log(data.projectData);
		const res = await fetch(`/api/get-project-image?imageKey=${data.projectData.image}`);
		if (res.ok) {
			const result = await res.json();
			projectImage = {
				url: result,
				alt: data.projectData?.name
			};
		} else {
			console.error('Error fetching project image:', res.statusText);
		}
	}
	onMount(() => {
		if (data.projectData.image) {
			fetchProjectImage();
		}
	});
</script>

<div class="flex justify-between gap-x-2 py-8 px-10">
	<div class="w-[55%] flex flex-col gap-y-8 mr-10">
		<div class="flex items-center justify-between mr-8">
			<h2 class="text-3xl font-bold">{data.projectData.name}</h2>
			<Button href={`/projects/${data.projectData.id}/code`} size="sm">
				<FileCode2 />
				View Source Code
			</Button>
		</div>

		<ScrollArea
			class="mt-4 ring-1 ring-neutral-300 rounded-lg p-4 bg-background flex flex-col gap-y-4 max-h-[20ch]"
		>
			<h5 class="text-foreground font-bold text-lg mb-4">Contributors</h5>
			<div class="flex gap-2 flex-wrap">
				{#each data.projectData.contributors as contributor (contributor)}
					<span
						class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>
						{contributor}
					</span>
				{/each}
			</div>
		</ScrollArea>
		<ScrollArea class="ring-1 ring-neutral-300 rounded-lg p-4 bg-background max-h-[30ch]">
			<h5 class="text-foreground font-bold text-lg mb-4">Description</h5>
			{data.projectData.description}
		</ScrollArea>
	</div>
	<div class="w-[45%] h-80 ring-1 ring-gray-300 rounded-lg overflow-hidden">
		<img src={projectImage.url} alt={projectImage.alt} class="h-full w-full rounded-lg" />
	</div>
</div>
