<script>
	import { Code } from '@lucide/svelte';
</script>

<footer class="bg-muted/60 py-12 px-4 md:px-6 lg:px-8 mt-auto border-t">
    <div class="max-w-7xl mx-auto">
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <div class="bg-primary w-8 h-8 flex items-center justify-center rounded-md">
              <Code class="h-4 w-4 text-primary-foreground" />
            </div>
            <span class="text-xl font-bold">ShowBox</span>
          </div>
          <p class="text-muted-foreground text-sm">
            Your college's secure platform for academic project sharing and collaboration.
          </p>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Platform</h3>
          <ul class="space-y-2">
            <li><a href="#features" class="text-sm text-muted-foreground hover:text-primary">Features</a></li>
            <li><a href="#how-it-works" class="text-sm text-muted-foreground hover:text-primary">How It Works</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">Security</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">Documentation</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">Tutorials</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">API</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">Support</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">College</h3>
          <ul class="space-y-2">
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">About</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">Departments</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">Faculty</a></li>
            <li><a href="#top" class="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row md:items-center justify-between mt-12 pt-8 border-t border-muted">
        <p class="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ShowBox. All rights reserved.
        </p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#top" class="text-muted-foreground hover:text-primary">
            <span class="sr-only">Twitter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#top" class="text-muted-foreground hover:text-primary">
            <span class="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="#top" class="text-muted-foreground hover:text-primary">
            <span class="sr-only">Discord</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01M15 12h.01M8.5 17.5l-1.5.5s1.5 2 4 2c2.5 0 4-2 4-2l-1.5-.5M8.5 6.5l-1.5-.5s1.5-2 4-2c2.5 0 4 2 4 2l-1.5.5"></path><path d="M8.5 6.5A11 11 0 0 0 17.5 6.5M8.5 17.5A11 11 0 0 1 17.5 17.5"></path><path d="M7 6.5V17.5M17 6.5V17.5"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
