<script lang="ts">
	import { cn } from '$lib/utils';
	import { Star } from '@lucide/svelte';

	let {
		starred = $bindable(),
		projectId,
		userId
	}: { starred: Boolean; projectId: string; userId: string } = $props();
	async function toggleStarred(event: MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		starred = !starred;
		const res = await fetch('/api/star-project', {
			method: 'POST',
			body: JSON.stringify({
				starred,
				projectId,
				userId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (!res.ok) {
			starred = !starred;
		}
	}
</script>

<button class="relative h-6 w-6" onclick={toggleStarred}>
	<Star
		class={cn(
			'duration-300 ease-in-out absolute inset-0',
			starred && 'fill-yellow-500 scale-100',
			!starred && 'scale-0'
		)}
	/>
	<Star
		class={cn(
			'duration-300 ease-in-out absolute inset-0',
			starred && 'scale-0',
			!starred && 'scale-100 fill-white'
		)}
	/>
</button>
