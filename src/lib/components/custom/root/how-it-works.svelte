<section id="how-it-works" class="py-20 px-4 md:px-6 lg:px-8 bg-muted/40">
	<div class="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
		<h2 class="text-3xl md:text-4xl font-bold">How ShowBox Works</h2>
		<p class="text-muted-foreground max-w-xl">Get started with ShowBox in three simple steps</p>
	</div>

	<div class="max-w-3xl mx-auto">
		<div class="relative">
			<div
				class="absolute left-8 top-0 bottom-0 border-l-2 border-dashed border-muted-foreground/30 hidden md:block"
			></div>

			{#each [{ step: 1, title: 'Create your account', description: 'Sign up for ShowBox in seconds with just a few simple details.' }, { step: 2, title: 'Customize your preferences', description: 'Tell us what you enjoy watching so we can personalize your experience.' }, { step: 3, title: 'Start streaming', description: 'Instantly access thousands of shows, movies, and exclusive content.' }] as item, i}
				<div class="flex gap-6 mb-12">
					<div class="relative z-10">
						<div
							class="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl"
						>
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
