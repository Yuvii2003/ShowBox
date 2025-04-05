<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import Bell from '@lucide/svelte/icons/bell';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import CreditCard from '@lucide/svelte/icons/credit-card';
	import LogOut from '@lucide/svelte/icons/log-out';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	// import { toast } from 'svelte-sonner';
	import { page } from '$app/state';
	import { enhance } from '$app/forms';

	const sidebar = useSidebar();
	// async function handleLogout() {
	// 	const res = await fetch('/api/logout');
	// 	if (res.ok) {
	// 		toast.success('User logged out!');
	// 		page.data.user = null;
	// 		window.location.reload();
	// 	}
	// }
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
						<Sparkles />
						Upgrade to Pro
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<BadgeCheck />
						Account
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CreditCard />
						Billing
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Bell />
						Notifications
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<form method="post" action="/api/logout" use:enhance>
					<DropdownMenu.Item>
						<LogOut />
						Log out
					</DropdownMenu.Item>
				</form>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
