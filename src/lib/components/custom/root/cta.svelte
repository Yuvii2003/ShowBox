<script>
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from '@lucide/svelte';
</script>

<section class="py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
	<div class="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
	  <h2 class="text-3xl md:text-4xl font-bold">Ready to Showcase Your Academic Work?</h2>
	  <p class="text-primary-foreground/80 max-w-xl">
		Join your fellow students and faculty in building our college's collaborative project repository
	  </p>
	  <Button variant="secondary" size="lg" class="mt-4">
		Sign Up with College Email <ChevronRight class="ml-2 h-4 w-4" />
	  </Button>
	</div>
  </section>
