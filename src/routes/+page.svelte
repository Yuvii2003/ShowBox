<script lang="ts">
	import { Header, Hero, Features, HowItWorks, Footer, Cta, ProjectShowcase } from '$lib/components/custom/root';

</script>

<div class="flex flex-col min-h-screen overflow-auto">
	<Header />
	<main>
        <Hero />
        <ProjectShowcase />
		<Features />
        <HowItWorks />  
        <Cta />
	</main>
	<Footer />
</div>
