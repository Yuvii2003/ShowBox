<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { CirclePlus, Plus } from '@lucide/svelte';
	let isProjects = $state(false);
</script>

{#if isProjects}
	<div class="flex flex-col gap-4 flex-1 px-10 py-8">
		<div class="flex justify-end">
			<Button size="sm" href="/projects/upload">
				<CirclePlus />
				Create ShowBox
			</Button>
		</div>
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
