<script>
	import { Google, Microsoft } from '$lib/components/custom/logos/index';
	import { Button } from '$lib/components/ui/button/index';
	import { onMount } from 'svelte';
	let visible = $state(false);
	onMount(() => {
		visible = true;
	});
</script>

<div
	class="flex w-full items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-900 md:w-1/2 lg:w-5/12"
>
	<div
		class="w-full max-w-md transition-all duration-500 ease-out {visible
			? 'opacity-100 translate-y-0'
			: 'opacity-0 translate-y-4'}"
	>
		<!-- Mobile logo (visible only on small screens) -->
		<div class="mb-8 flex justify-center md:hidden">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
					></path>
					<path d="m3.3 7 8.7 5 8.7-5"></path>
					<path d="M12 22V12"></path>
				</svg>
			</div>
		</div>

		<!-- Card -->
		<div class="overflow-hidden rounded-xl bg-white shadow-xl dark:bg-zinc-800">
			<div class="p-8">
				<div class="text-center">
					<h1 class="text-2xl font-bold tracking-tight">Sign In to ShowBox</h1>
					<p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
						Good to see you! Let's Box Your Projects
					</p>
				</div>

				<div class="mt-8 space-y-6">
					<!-- Google Button -->
					<Button
						type="button"
						variant="outline"
						class="w-full border-zinc-200 bg-white transition-all hover:bg-zinc-50 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700/50"
						href="/login/google"
					>
						<Google />
						<span class="ml-2">Continue with Google</span>
					</Button>

					<!-- Divider -->
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-dashed border-zinc-200 dark:border-zinc-700"></div>
						</div>
						<div class="relative flex justify-center text-xs">
							<span class="bg-white px-2 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">Or</span
							>
						</div>
					</div>

					<!-- Microsoft Button -->
					<Button
						type="button"
						variant="outline"
						class="w-full border-zinc-200 bg-white transition-all hover:bg-zinc-50 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700/50"
						href="/login/microsoft"
					>
						<Microsoft />
						<span class="ml-2">Continue with Microsoft</span>
					</Button>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div class="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
			<p>
				Need help? <a href="#top" class="font-medium text-primary hover:underline"
					>Contact Support</a
				>
			</p>
		</div>

		<!-- Additional info -->
		<div class="mt-12">
			<div class="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800/50">
				<h3 class="mb-2 font-medium">New to ShowBox?</h3>
				<p class="text-sm text-zinc-600 dark:text-zinc-400">
					ShowBox is exclusively available to students and faculty of VIT. Sign in with your
					institutional email to get started.
				</p>
			</div>
		</div>
	</div>
</div>
