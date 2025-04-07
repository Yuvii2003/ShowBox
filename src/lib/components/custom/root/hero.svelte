<script>
	import {Badge} from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, GraduationCap } from '@lucide/svelte';
</script>

<section class="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/40">
	<div class="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
	  <div class="flex flex-col gap-6">
		<div class="flex items-center gap-2">
		  <Badge variant="outline" class="px-3 py-1">
			<GraduationCap class="h-3.5 w-3.5 mr-1" />
			Campus Exclusive
		  </Badge>
		</div>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
		  Share Your <span class="text-primary">Academic Projects</span> Securely
		</h1>
		<p class="text-lg text-muted-foreground max-w-md">
		  ShowBox is your college's private repository for showcasing student and faculty projects, 
		  fostering collaboration within our academic community.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 mt-2">
		  <Button size="lg">Explore Projects <ChevronRight class="ml-2 h-4 w-4" /></Button>
		  <Button variant="outline" size="lg">Join Community</Button>
		</div>
	  </div>
	  
	  <div class="relative rounded-lg overflow-hidden border shadow-xl bg-card">
		<div class="p-4 border-b bg-muted/50">
		  <div class="flex items-center gap-2">
			<div class="w-3 h-3 rounded-full bg-destructive/70"></div>
			<div class="w-3 h-3 rounded-full bg-warning/70"></div>
			<div class="w-3 h-3 rounded-full bg-success/70"></div>
			<div class="ml-2 text-xs text-muted-foreground">project-showcase.js</div>
		  </div>
		</div>
		<div class="p-4 text-sm font-mono overflow-hidden">
		  <pre class="text-xs md:text-sm text-muted-foreground"><code>{`import { Project } from '@/lib/models';

// Fetch featured projects
export async function getFeaturedProjects() {
const projects = await Project.find()
  .where('featured', true)
  .limit(6)
  .populate('author')
  .sort('-createdAt');
  
return projects;
}

// College-specific access control
function ensureCollegeMember(userId) {
// Verify user belongs to this institution
return verifyInstitutionalEmail(userId);
}`}</code></pre>
		</div>
	  </div>
	</div>
  </section>

