<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Plus } from '@lucide/svelte';
	import type { PageData } from './$types';
	import ProjectCard from '$lib/components/custom/ProjectCard.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import { cn } from '$lib/utils';
	let { data }: { data: PageData } = $props();
	const sidebar = useSidebar();
</script>

<h3 class="px-8 pt-6 font-semibold text-2xl">My Projects</h3>
{#if data.projects.length > 0}
	<div
		class={cn(
			'grid gap-6 px-8 py-6 sm:grid-cols-2 md:grid-cols-3 duration-300 ease-in-out',
			sidebar.state === 'collapsed' && 'lg:grid-cols-4'
		)}
	>
		{#each data.projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
{:else}
	<div class="flex flex-1 gap-4 px-10">
		<div class="flex items-center flex-1 mb-52 ml-14">
			<Button
				size="lg"
				href="/projects/upload"
				variant="ghost"
				class="flex items-center justify-center underline italic font-semibold text-xl"
			>
				<Plus />
				Create A New ShowBox
			</Button>
		</div>
	</div>
{/if}
