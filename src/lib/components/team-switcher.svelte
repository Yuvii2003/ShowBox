<script lang="ts">
	import { goto } from '$app/navigation';
	import { Menu, MenuItem, MenuButton } from '$lib/components/ui/sidebar/index.js';
	import { GalleryVerticalEnd } from '@lucide/svelte';
</script>

<Menu>
	<MenuItem>
		<MenuButton
			size="lg"
			class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
			aria-label="ShowBox"
			onclick={() => goto('/')}
		>
			<div
				class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
			>
				<GalleryVerticalEnd class="size-4" />
			</div>
			<div class="grid flex-1 text-left text-sm leading-tight">
				<span class="truncate font-semibold"> ShowBox </span>
				<span class="truncate text-xs">Student</span>
			</div>
		</MenuButton>
	</MenuItem>
</Menu>
