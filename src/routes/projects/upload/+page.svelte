<script lang="ts">
	import type { PageData } from './$types.js';
	import SettingsForm from '$lib/components/custom/projects/upload/form-settings.svelte';
	let { data }: { data: PageData } = $props();
</script>

<h3 class="px-6 pt-6 font-semibold text-2xl">Upload Your Project</h3>

<SettingsForm {data} />
