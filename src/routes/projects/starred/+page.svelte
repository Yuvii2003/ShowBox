<script lang="ts">
	import type { PageData } from './$types';
	import ProjectCard from '$lib/components/custom/ProjectCard.svelte';
	import { cn } from '$lib/utils';
	import { useSidebar } from '$lib/components/ui/sidebar';
	let { data }: { data: PageData } = $props();
	const sidebar = useSidebar();
</script>

<h3 class="px-8 pt-6 font-semibold text-2xl">Starred Projects</h3>

{#if data.starredProjects && data.starredProjects.length > 0}
	<div
		class={cn(
			'grid gap-6 px-8 py-6 sm:grid-cols-2 md:grid-cols-3 duration-300 ease-in-out',
			sidebar.state === 'collapsed' && 'lg:grid-cols-4'
		)}
	>
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
