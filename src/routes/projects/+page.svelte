<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Plus } from '@lucide/svelte';
	import type { PageData } from './$types';
	import ProjectCard from '$lib/components/custom/ProjectCard.svelte';
	let { data }: { data: PageData } = $props();
</script>

{#if data.projects.length > 0}
	<div class="flex gap-6 px-8 py-6 flex-wrap justify-between">
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
