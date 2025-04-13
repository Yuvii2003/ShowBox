<script lang="ts">
	import ProjectCard from '$lib/components/custom/ProjectCard.svelte';
	import SearchComponent from '$lib/components/custom/projects/search/search-component.svelte';
	import type { CustomProject } from '$lib/server/db/schema';

	let projects = $state<CustomProject[] | null>([]);
</script>

<h3 class="px-6 pt-6 font-semibold text-2xl">Search Projects</h3>
<p class="px-6 pt-2 text-gray-500">Search for projects by project name or contributors' name.</p>

<div class="w-full flex justify-center mt-10">
	<SearchComponent bind:projects />
</div>

{#if projects && projects.length > 0}
	<div class="text-2xl font-bold m-8">Search Results</div>
	<div class="flex gap-6 px-8 py-6 flex-wrap justify-between">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
{/if}
