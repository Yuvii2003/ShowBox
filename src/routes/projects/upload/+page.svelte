<script lang="ts">
	import type { PageData } from './$types.js';
	import SettingsForm from '$lib/components/custom/projects/upload/form-settings.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowLeftFromLine } from '@lucide/svelte';
	let { data }: { data: PageData } = $props();
</script>

<div class="flex justify-end px-10">
	<Button size="sm" href="/projects" class="flex items-center justify-center">
		<ArrowLeftFromLine />
		Back to Projects
	</Button>
</div>
<SettingsForm {data} />
