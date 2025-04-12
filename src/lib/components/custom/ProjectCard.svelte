<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Project } from '$lib/server/db/schema';
	import { onMount } from 'svelte';

	let { project }: { project: Project } = $props();
	let projectImage = $state({
		url: '/card-top.jpg',
		alt: 'Sunset in the mountains'
	});
	async function fetchProjectImage() {
		const res = await fetch(`/api/get-project-image?imageKey=${project.image}`);
		if (res.ok) {
			const data = await res.json();
			projectImage = {
				url: data,
				alt: project.name
			};
		} else {
			console.error('Error fetching project image:', res.statusText);
		}
	}
	onMount(() => {
		if (project.image) {
			fetchProjectImage();
		}
	});
</script>

<button
	class="w-[18rem] rounded overflow-hidden shadow-lg ring-1 ring-gray-300 bg-accent"
	onclick={() => goto(`/projects/${project.id}`)}
>
	<img class="w-full h-32" src={projectImage.url} alt={projectImage.alt} />

	<div class="font-bold text-xl my-2 text-center">{project.name}</div>
	<div class="px-6 pt-4 pb-2">
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>{project.contributors[0]}</span
		>
		{#if project.contributors[1]}
			<span
				class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
				>{project.contributors[1]}</span
			>
		{/if}
		{#if project.contributors.length > 2}
			<span
				class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
				>and {project.contributors.length - 2} more</span
			>
		{/if}
	</div>
</button>
