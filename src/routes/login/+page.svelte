<script>
	import { Google, Microsoft } from '$lib/components/custom/logos/index';
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
				<Button type="button" variant="outline" class="w-full" href="/login/google">
					<Google />
					<span>Google</span>
				</Button>
			</div>

			<div class="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
				<hr class="border-dashed" />
				<span class="text-muted-foreground text-xs">Or Continue With</span>
				<hr class="border-dashed" />
			</div>

			<div class="mt-6">
				<Button type="button" variant="outline" class="w-full" href="/login/microsoft">
					<Microsoft />
					<span>Microsoft</span>
				</Button>
			</div>
		</div>
	</div>
</section>
