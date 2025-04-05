<script>
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<Toaster richColors />
<ModeWatcher />
{@render children()}
