<script lang="ts">
	import type { CustomProject } from '$lib/server/db/schema';
	import { Search } from '@lucide/svelte';
	let { projects = $bindable() }: { projects: CustomProject[] | null } = $props();
	let searchQuery = $state('');
	async function handleClick() {
		if (searchQuery && searchQuery.trim().length > 0) {
			const encodedQuery = encodeURIComponent(searchQuery.trim());
			const res = await fetch(`/projects/search?q=${encodedQuery}`);
			const data = await res.json();
			projects = data;
		}
	}
</script>

<div class="w-full max-w-sm min-w-[200px]">
	<div class="relative">
		<input
			class="w-full bg-transparent placeholder:text-slate-400 dark:placeholder:text-slate-300 text-slate-700 dark:text-white text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
			onkeypress={(e) => {
				if (e.key === 'Enter') {
					handleClick();
				}
			}}
			placeholder="search a project..."
			bind:value={searchQuery}
		/>
		<button
			class="absolute top-1 right-1 flex items-center rounded bg-primary py-1 px-2.5 border border-transparent text-center text-sm text-primary-foreground transition-all shadow-sm hover:shadow focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			type="button"
			onclick={handleClick}
		>
			<Search class="w-4 h-4 mr-2" />

			Search
		</button>
	</div>
</div>
