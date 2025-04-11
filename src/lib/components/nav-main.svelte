<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import {
		FolderCheck,
		FolderSearch2,
		Star,
		UserRoundSearch,
		CircleFadingPlus
	} from '@lucide/svelte';
	import { page } from '$app/state';
	import type { Project as ProjectType } from '$lib/server/db/schema';
	import { goto } from '$app/navigation';

	let myProjects = (page.data.allUserProjects as ProjectType[]).map((project: ProjectType) => {
		return {
			title: project.name,
			url: `/projects/${project.id}`
		};
	});

	let starredProjects = {
		items: [
			{
				title: 'Genesis',
				url: '#'
			},
			{
				title: 'Explorer',
				url: '#'
			},
			{
				title: 'Quantum',
				url: '#'
			}
		]
	};
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
	<Sidebar.Menu>
		<!-- My Projects -->

		<Sidebar.MenuItem>
			<Sidebar.MenuButton onclick={() => goto('/projects')}>
				{#snippet tooltipContent()}
					My Projects
				{/snippet}
				<FolderCheck />
				<span>My Projects</span>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>

		<!-- Starred Projects -->

		<Sidebar.MenuItem>
			<Sidebar.MenuButton onclick={() => goto('/projects/starred')}>
				{#snippet tooltipContent()}
					Starred Projects
				{/snippet}
				<FolderCheck />
				<span>Starred Projects</span>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>

		<!-- Search Projects -->

		<Sidebar.MenuItem>
			<Sidebar.MenuButton onclick={() => goto('/projects/search')}>
				{#snippet tooltipContent()}
					Search a Project
				{/snippet}
				<FolderSearch2 />
				<span>Search a Project</span>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
		{#if page.data.user.userType === 'faculty' || page.data.user.userType === 'admin'}
			<Sidebar.MenuItem>
				<Sidebar.MenuButton onclick={() => goto('/projects/search-student')}>
					{#snippet tooltipContent()}
						Search a Student
					{/snippet}
					<UserRoundSearch />
					<span>Search a Student</span>
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		{/if}
		<Sidebar.MenuItem>
			<Sidebar.MenuButton onclick={() => goto('/projects/upload')}>
				{#snippet tooltipContent()}
					Upload a new project
				{/snippet}
				<CircleFadingPlus />
				<span>Upload a Project</span>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
</Sidebar.Group>
