<script>
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
	<div class="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
		<h2 class="text-3xl md:text-4xl font-bold">Ready to Transform Your Viewing Experience?</h2>
		<p class="text-primary-foreground/80 max-w-xl">
			Join thousands of satisfied users who have already made the switch to ShowBox
		</p>
		<Button variant="secondary" size="lg" class="mt-4">
			Get Started Now <ArrowRight class="ml-2 h-4 w-4" />
		</Button>
	</div>
</section>
