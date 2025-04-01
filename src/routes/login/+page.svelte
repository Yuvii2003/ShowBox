<script>
	import Github from '$lib/components/custom/logos/Github.svelte';
	import Google from '$lib/components/custom/logos/Google.svelte';
	import { Button } from '$lib/components/ui/button/index';
</script>

<section class="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
	<div class="m-auto h-fit w-96 outline rounded-lg outline-gray-400 dark:outline-gray-300">
		<div class="pb-6 px-6 pt-1">
			<div class="text-center flex flex-col gap-y-1">
				<h1 class="mb-1 mt-4 text-xl font-semibold">Sign In to ShowBox</h1>
				<p>Good to see you! Let's Compile Your Projects</p>
			</div>

			<div class="mt-6">
				<Button type="button" variant="outline" class="w-full">
					<Google />
					<span>Google</span>
				</Button>
			</div>

			<div class="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
				<hr class="border-dashed" />
				<span class="text-muted-foreground text-xs">Or continue With</span>
				<hr class="border-dashed" />
			</div>

			<div class="mt-6">
				<Button type="button" variant="outline" class="w-full">
					<Github />
					<span>GitHub</span>
				</Button>
			</div>
		</div>
	</div>
</section>
