<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Project } from '$lib/server/db/schema';

	let { project }: { project: Project } = $props();
</script>

<button
	class="max-w-[18rem] rounded overflow-hidden shadow-lg ring-1 ring-gray-300 bg-accent"
	onclick={() => goto(`/projects/${project.id}`)}
>
	{#if project.image}
		<img class="w-full h-32" src={project.image} alt={project.name} />
	{:else}
		<img class="w-full h-32" src="/card-top.jpg" alt="Sunset in the mountains" />
	{/if}
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
