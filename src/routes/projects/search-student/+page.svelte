<script lang="ts">
	import ProjectCard from '$lib/components/custom/ProjectCard.svelte';
	import SearchStudentComponent from '$lib/components/custom/projects/search-student/search-student-component.svelte';
	import type { Project } from '$lib/server/db/schema';
	let projects = $state<Project[] | null>([]);
</script>

<div class="w-full flex justify-center mt-10">
	<SearchStudentComponent bind:projects />
</div>

{#if projects && projects.length > 0}
	<div class="text-2xl font-bold m-8">Search Results</div>
	<div class="flex gap-6 px-8 py-6 flex-wrap justify-between">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
{/if}
