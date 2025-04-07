<script>
	import { Card } from '$lib/components/ui/card';
	import { GitBranch, Shield, Users } from '@lucide/svelte';
</script>

<section id="features" class="py-20 px-4 md:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
	  <h2 class="text-3xl md:text-4xl font-bold">Built for Academic Excellence</h2>
	  <p class="text-muted-foreground max-w-xl">
		ShowBox provides the tools students and faculty need to showcase their work and collaborate effectively
	  </p>
	</div>
	
	<div class="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
	  <Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
		<div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
		  <Shield class="h-6 w-6 text-primary" />
		</div>
		<h3 class="text-xl font-semibold">Institutional Security</h3>
		<p class="text-muted-foreground flex-1">
		  Access restricted to verified college email addresses, ensuring your projects remain within our academic community.
		</p>
	  </Card>
	  
	  <Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
		<div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
		  <GitBranch class="h-6 w-6 text-primary" />
		</div>
		<h3 class="text-xl font-semibold">Version Control</h3>
		<p class="text-muted-foreground flex-1">
		  Track changes, manage contributions, and maintain complete history of your academic and research projects.
		</p>
	  </Card>
	  
	  <Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
		<div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
		  <Users class="h-6 w-6 text-primary" />
		</div>
		<h3 class="text-xl font-semibold">Collaborative Learning</h3>
		<p class="text-muted-foreground flex-1">
		  Work together with classmates and professors on group projects with real-time collaboration tools.
		</p>
	  </Card>
	</div>
  </section>
