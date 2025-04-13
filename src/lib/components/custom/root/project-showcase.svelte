<script>
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';

	import { Search } from '@lucide/svelte';
	const projects = [
		{
			title: 'Machine Learning Algorithm Visualizer',
			description:
				'Interactive tool for visualizing various ML algorithms and their decision boundaries.',
			author: 'Alex Chen',
			department: 'Computer Science',
			language: 'Python'
		},
		{
			title: 'Sustainable Architecture Models',
			description: '3D models of eco-friendly building designs with renewable energy integration.',
			author: 'Maya Johnson',
			department: 'Architecture',
			language: 'CAD'
		},
		{
			title: 'Historical Data Analysis Tool',
			description: 'Web application for analyzing and visualizing historical census data.',
			author: 'James Wilson',
			department: 'History',
			language: 'JavaScript'
		}
	];
</script>

<section class="py-20 px-4 md:px-6 lg:px-8 bg-muted/40">
	<div class="max-w-7xl mx-auto flex flex-col gap-8">
		<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
			<div>
				<h2 class="text-3xl font-bold">Featured Projects</h2>
				<p class="text-muted-foreground mt-2">Discover what your peers are building</p>
			</div>
			<div class="flex items-center gap-2">
				<div class="relative">
					<Search
						class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
					/>
					<input
						type="text"
						placeholder="Search projects..."
						class="pl-9 pr-4 py-2 rounded-md border bg-background w-full md:w-64"
						readonly
					/>
				</div>
				<Button variant="outline">Filter</Button>
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<Card class="overflow-hidden flex flex-col">
					<div class="h-40 bg-muted"></div>
					<div class="p-5 flex flex-col gap-3 flex-1">
						<h3 class="font-semibold text-lg">{project.title}</h3>
						<p class="text-muted-foreground text-sm flex-1">{project.description}</p>
						<div class="flex items-center justify-between mt-4">
							<div class="flex items-center gap-2">
								<Avatar class="h-8 w-8">
									<AvatarFallback
										>{project.author
											.split(' ')
											.map((n) => n[0])
											.join('')}</AvatarFallback
									>
								</Avatar>
								<div class="text-sm">
									<p class="font-medium">{project.author}</p>
									<p class="text-xs text-muted-foreground">{project.department}</p>
								</div>
							</div>
							<Badge variant="outline" class="text-xs">{project.language}</Badge>
						</div>
					</div>
				</Card>
			{/each}
		</div>

		<div class="flex justify-center mt-8">
			<Button variant="outline">View All Projects</Button>
		</div>
	</div>
</section>
