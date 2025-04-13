<script lang="ts">
	import ProjectCard from '$lib/components/custom/ProjectCard.svelte';
	import SearchStudentComponent from '$lib/components/custom/projects/search-student/search-student-component.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import type { CustomProject } from '$lib/server/db/schema';
	import { cn } from '$lib/utils';
	let projects = $state<CustomProject[] | null>([]);
	const sidebar = useSidebar();
</script>

<h3 class="px-6 pt-6 font-semibold text-2xl">Search Projects</h3>
<p class="px-6 pt-2 text-gray-500">Search for projects by student's registration number.</p>

<div class="w-full flex justify-center mt-10">
	<SearchStudentComponent bind:projects />
</div>

{#if projects && projects.length > 0}
	<div class="text-2xl font-bold m-8">Search Results</div>
	<div
		class={cn(
			'grid gap-6 px-8 py-6 sm:grid-cols-2 md:grid-cols-3 duration-300 ease-in-out',
			sidebar.state === 'collapsed' && 'lg:grid-cols-4'
		)}
	>
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
{/if}
