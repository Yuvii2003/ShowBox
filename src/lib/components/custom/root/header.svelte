<script>
	import { Button } from '$lib/components/ui/button';
	import { Play } from '@lucide/svelte';
</script>

<header class="w-full py-4 px-4 md:px-6 lg:px-8 border-b">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<div class="flex items-center gap-2">
			<div class="bg-primary w-8 h-8 flex items-center justify-center rounded-md">
				<Play class="h-4 w-4 text-primary-foreground" />
			</div>
			<span class="text-xl font-bold">ShowBox</span>
		</div>

		<nav class="hidden md:flex items-center space-x-8">
			<a href="/" class="text-sm font-medium text-foreground hover:text-primary">Home</a>
			<a href="#features" class="text-sm font-medium text-muted-foreground hover:text-primary"
				>Features</a
			>
			<a href="#how-it-works" class="text-sm font-medium text-muted-foreground hover:text-primary"
				>How it Works</a
			>
			<a href="/blog" class="text-sm font-medium text-muted-foreground hover:text-primary">Blog</a>
		</nav>

		<div class="flex items-center gap-4">
			<Button variant="outline" class="hidden md:inline-flex">Login</Button>
			<Button>Get Started</Button>
		</div>
	</div>
</header>
