<script lang="ts">
	import type { PageData } from './$types.js';
	import SettingsForm from '$lib/components/custom/projects/upload/form-settings.svelte';
	let { data }: { data: PageData } = $props();
</script>

<SettingsForm {data} />
