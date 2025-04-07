<script>
	import { Card } from '$lib/components/ui/card';
	import { Laptop, Shield, Star } from '@lucide/svelte';
</script>

<section id="features" class="py-20 px-4 md:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
		<h2 class="text-3xl md:text-4xl font-bold">Powerful Features</h2>
		<p class="text-muted-foreground max-w-xl">
			Experience entertainment like never before with our cutting-edge streaming platform
		</p>
	</div>

	<div class="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		<Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
			<div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
				<Laptop class="h-6 w-6 text-primary" />
			</div>
			<h3 class="text-xl font-semibold">Multi-device Support</h3>
			<p class="text-muted-foreground flex-1">
				Watch your favorite content across all devices seamlessly with perfect synchronization.
			</p>
		</Card>

		<Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
			<div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
				<Shield class="h-6 w-6 text-primary" />
			</div>
			<h3 class="text-xl font-semibold">Secure Streaming</h3>
			<p class="text-muted-foreground flex-1">
				Advanced encryption and secure protocols ensure your viewing experience remains private.
			</p>
		</Card>

		<Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
			<div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
				<Star class="h-6 w-6 text-primary" />
			</div>
			<h3 class="text-xl font-semibold">Premium Content</h3>
			<p class="text-muted-foreground flex-1">
				Access a vast library of high-quality videos, shows, and exclusive content.
			</p>
		</Card>
	</div>
</section>
