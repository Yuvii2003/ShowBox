<script lang="ts">
	import { Code } from '$lib/components/ui/code';
	import { currentFile } from '$lib/store.svelte';
	import { bundledLanguagesKeys } from '$lib/components/ui/code/shiki';
	import { onMount } from 'svelte';
	const fileLastWord = $derived(currentFile.name?.split('.').pop()?.toLowerCase());
	const fileExtension = $derived(bundledLanguagesKeys.find((key) => key === fileLastWord));
	onMount(() => {
		if (!currentFile.code) {
			currentFile.code = 'YOUR CODE HERE';
		}
	});
</script>

<div class="flex flex-col gap-y-4">
	<code>
		{currentFile.name || 'SOURCE CODE'}
	</code>
	<Code lang={fileExtension} class="w-full" bind:code={currentFile.code as string} />
</div>
