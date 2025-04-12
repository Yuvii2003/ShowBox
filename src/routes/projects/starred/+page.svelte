<script lang="ts">
	import type { PageData } from './$types';
	import ProjectCard from '$lib/components/custom/ProjectCard.svelte';
	let { data }: { data: PageData } = $props();
</script>

{#if data.starredProjects && data.starredProjects.length > 0}
	<div class="flex gap-6 px-8 py-6 flex-wrap justify-between">
		{#each data.starredProjects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
{:else}
	<div class="flex justify-center">
		<div
			class="ring-1 ring-gray-300 p-10 my-20 rounded-lg shadow-md italic font-semibold text-muted-foreground"
		>
			No starred projects to show!
		</div>
	</div>
{/if}
