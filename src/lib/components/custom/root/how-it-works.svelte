<section id="how-it-works" class="py-20 px-4 md:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
	  <h2 class="text-3xl md:text-4xl font-bold">How ShowBox Works</h2>
	  <p class="text-muted-foreground max-w-xl">
		Get started with your academic project showcase in three simple steps
	  </p>
	</div>
	
	<div class="max-w-3xl mx-auto">
	  <div class="relative">
		<div class="absolute left-8 top-0 bottom-0 border-l-2 border-dashed border-muted-foreground/30 hidden md:block"></div>
		
		{#each [
		  {
			step: 1, 
			title: "Sign up with your college email",
			description: "Your institutional email address verifies you as a member of our academic community."
		  },
		  {
			step: 2, 
			title: "Upload your project",
			description: "Share your code, research papers, design files, or any academic work you want to showcase."
		  },
		  {
			step: 3, 
			title: "Collaborate and discover",
			description: "Connect with peers, receive feedback from professors, and explore projects from across campus."
		  }
		] as item, i}
		  <div class="flex gap-6 mb-12">
			<div class="relative z-10">
			  <div class="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
				{item.step}
			  </div>
			</div>
			<div class="flex-1 pt-4">
			  <h3 class="text-xl font-semibold mb-2">{item.title}</h3>
			  <p class="text-muted-foreground">{item.description}</p>
			</div>
		  </div>
		{/each}
	  </div>
	</div>
  </section>
