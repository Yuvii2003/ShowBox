<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Sparkles } from '@lucide/svelte';

	import { page } from '$app/state';
	import { enhance } from '$app/forms';

	const sidebar = useSidebar();
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						{...props}
					>
						<Avatar.Root class="h-8 w-8 rounded-lg">
							{#if page.data.user.image}
								<Avatar.Image
									src={page.data.user.image}
									referrerpolicy="no-referrer"
									alt={page.data.user.name}
								/>
							{:else}
								<Avatar.Fallback class="rounded-lg">
									{page.data.user.registrationNumber[0] + page.data.user.registrationNumber[1]}
								</Avatar.Fallback>
							{/if}
						</Avatar.Root>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">{page.data.user.name}</span>
							<span class="truncate text-xs">{page.data.user.email}</span>
						</div>
						<ChevronsUpDown class="ml-auto size-4" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-[var(--bits-dropdown-menu-anchor-width)] min-w-56 rounded-lg"
				side={sidebar.isMobile ? 'bottom' : 'right'}
				align="end"
				sideOffset={4}
			>
				<DropdownMenu.Label class="p-0 font-normal">
					<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar.Root class="h-8 w-8 rounded-lg">
							{#if page.data.user.image}
								<Avatar.Image
									src={page.data.user.image}
									referrerpolicy="no-referrer"
									alt={page.data.user.name}
								/>
							{:else}
								<Avatar.Fallback class="rounded-lg">
									{page.data.user.registrationNumber[0] + page.data.user.registrationNumber[1]}
								</Avatar.Fallback>
							{/if}
						</Avatar.Root>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">{page.data.user.name}</span>
							<span class="truncate text-xs">{page.data.user.email}</span>
						</div>
					</div>
				</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<BadgeCheck />
						Account
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<form method="post" action="/api/logout" use:enhance>
					<button class="w-full" type="submit">
						<DropdownMenu.Item>
							<LogOut />
							Log out
						</DropdownMenu.Item>
					</button>
				</form>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
