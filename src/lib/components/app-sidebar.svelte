<script lang="ts">
	import NavMain from '$lib/components/nav-main.svelte';
	import NavUser from '$lib/components/nav-user.svelte';
	import TeamSwitcher from '$lib/components/team-switcher.svelte';
	import { Root, Header, Content, Footer, Rail } from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Root> = $props();
</script>

<Root bind:ref {collapsible} {...restProps}>
	<Header>
		<TeamSwitcher />
	</Header>
	<Content>
		<NavMain />
	</Content>
	<Footer>
		<NavUser />
	</Footer>
	<Rail />
</Root>
