<script>
	import { Play } from '@lucide/svelte';
</script>

<footer class="bg-muted/60 py-12 px-4 md:px-6 lg:px-8 mt-auto border-t">
	<div class="max-w-7xl mx-auto">
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-2">
					<div class="bg-primary w-8 h-8 flex items-center justify-center rounded-md">
						<Play class="h-4 w-4 text-primary-foreground" />
					</div>
					<span class="text-xl font-bold">ShowBox</span>
				</div>
				<p class="text-muted-foreground text-sm">
					Redefining how you stream content, one view at a time.
				</p>
			</div>

			<div>
				<h3 class="font-semibold mb-4">Product</h3>
				<ul class="space-y-2">
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">Features</a>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">How It Works</a>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">Devices</a>
					</li>
					<li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">FAQ</a></li>
				</ul>
			</div>

			<div>
				<h3 class="font-semibold mb-4">Company</h3>
				<ul class="space-y-2">
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">About Us</a>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">Careers</a>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">Blog</a>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">Contact</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-semibold mb-4">Legal</h3>
				<ul class="space-y-2">
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary"
							>Terms of Service</a
						>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary"
							>Privacy Policy</a
						>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">Cookie Policy</a
						>
					</li>
					<li>
						<a href="#top" class="text-sm text-muted-foreground hover:text-primary">Licensing</a>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-col md:flex-row md:items-center justify-between mt-12 pt-8 border-t border-muted"
		>
			<p class="text-sm text-muted-foreground">
				© {new Date().getFullYear()} ShowBox. All rights reserved.
			</p>
			<div class="flex gap-4 mt-4 md:mt-0">
				<a href="#top" class="text-muted-foreground hover:text-primary">
					<span class="sr-only">Twitter</span>
					<!-- Twitter/X icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path
							d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
						></path></svg
					>
				</a>
				<a href="#top" class="text-muted-foreground hover:text-primary">
					<span class="sr-only">Instagram</span>
					<!-- Instagram icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path
							d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
						></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg
					>
				</a>
				<a href="#top" class="text-muted-foreground hover:text-primary">
					<span class="sr-only">GitHub</span>
					<!-- GitHub icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						></path></svg
					>
				</a>
			</div>
		</div>
	</div>
</footer>
