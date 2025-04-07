<script>
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Play } from '@lucide/svelte';
</script>

<section class="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/40">
	<div class="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
		<div class="flex flex-col gap-6">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
				Stream Content <span class="text-primary">Seamlessly</span> Across Devices
			</h1>
			<p class="text-lg text-muted-foreground max-w-md">
				Simplify your entertainment experience with ShowBox - where content meets innovation for
				your streaming needs.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 mt-2">
				<Button size="lg">Start Watching <ChevronRight class="ml-2 h-4 w-4" /></Button>
				<Button variant="outline" size="lg">Explore Features</Button>
			</div>
		</div>

		<div class="relative aspect-video bg-muted rounded-lg overflow-hidden border shadow-xl">
			<div class="absolute inset-0 flex items-center justify-center">
				<Play class="h-16 w-16 text-primary" />
			</div>
		</div>
	</div>
</section>
