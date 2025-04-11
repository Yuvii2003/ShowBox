<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import DarkToggler from '$lib/components/custom/dark-toggler.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { ArrowLeft } from '@lucide/svelte';
	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
		>
			<div class="flex items-center justify-between px-4 w-full">
				<Sidebar.Trigger class="-ml-1" />
				<div class="flex gap-x-2 items-center">
					<DarkToggler scale={0.8} />
					<Button size="sm" class="scale-90" onclick={() => history.back()}
						><ArrowLeft />Back</Button
					>
				</div>
			</div>
		</header>
		<Separator />
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>
