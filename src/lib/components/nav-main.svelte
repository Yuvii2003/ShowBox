<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { FolderCheck, Search, Star } from '@lucide/svelte';
	import { page } from '$app/state';
	import type { Project as ProjectType } from '$lib/server/db/schema';

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

		<Collapsible.Root class="group/collapsible">
			{#snippet child({ props })}
				<Sidebar.MenuItem {...props}>
					<Collapsible.Trigger>
						{#snippet child({ props })}
							<Sidebar.MenuButton {...props}>
								{#snippet tooltipContent()}
									My Projects
								{/snippet}
								<FolderCheck />
								<span>My Projects</span>
								<ChevronRight
									class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
								/>
							</Sidebar.MenuButton>
						{/snippet}
					</Collapsible.Trigger>
					<Collapsible.Content>
						{#if myProjects}
							<Sidebar.MenuSub>
								{#each myProjects as item (item.title)}
									<Sidebar.MenuSubItem>
										<Sidebar.MenuSubButton>
											{#snippet child({ props })}
												<a href={item.url} {...props}>
													<span>{item.title}</span>
												</a>
											{/snippet}
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								{/each}
							</Sidebar.MenuSub>
						{/if}
					</Collapsible.Content>
				</Sidebar.MenuItem>
			{/snippet}
		</Collapsible.Root>

		<!-- Starred Projects -->

		<Collapsible.Root class="group/collapsible">
			{#snippet child({ props })}
				<Sidebar.MenuItem {...props}>
					<Collapsible.Trigger>
						{#snippet child({ props })}
							<Sidebar.MenuButton {...props}>
								{#snippet tooltipContent()}
									Starred Projects
								{/snippet}
								<Star />
								<span>Starred Projects</span>
								<ChevronRight
									class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
								/>
							</Sidebar.MenuButton>
						{/snippet}
					</Collapsible.Trigger>
					<Collapsible.Content>
						{#if starredProjects.items}
							<Sidebar.MenuSub>
								{#each starredProjects.items as item (item.title)}
									<Sidebar.MenuSubItem>
										<Sidebar.MenuSubButton>
											{#snippet child({ props })}
												<a href={item.url} {...props}>
													<span>{item.title}</span>
												</a>
											{/snippet}
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								{/each}
							</Sidebar.MenuSub>
						{/if}
					</Collapsible.Content>
				</Sidebar.MenuItem>
			{/snippet}
		</Collapsible.Root>

		<!-- Search Projects -->

		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				{#snippet tooltipContent()}
					Search a Project
				{/snippet}
				<Search />
				<span>Search a Project</span>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
</Sidebar.Group>
