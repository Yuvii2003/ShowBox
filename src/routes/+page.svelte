<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
    import { Card } from "$lib/components/ui/card";
    import { ChevronRight, Play, ArrowRight, Laptop, CodeSquare, Star, Shield } from "lucide-svelte";
  </script>
  
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="w-full py-4 px-4 md:px-6 lg:px-8 border-b">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="bg-primary w-8 h-8 flex items-center justify-center rounded-md">
            <Play class="h-4 w-4 text-primary-foreground" />
          </div>
          <span class="text-xl font-bold">ShowBox</span>
        </div>
        
        <nav class="hidden md:flex items-center space-x-8">
          <a href="/" class="text-sm font-medium text-foreground hover:text-primary">Home</a>
          <a href="#features" class="text-sm font-medium text-muted-foreground hover:text-primary">Features</a>
          <a href="#how-it-works" class="text-sm font-medium text-muted-foreground hover:text-primary">How it Works</a>
          <a href="/blog" class="text-sm font-medium text-muted-foreground hover:text-primary">Blog</a>
        </nav>
        
        <div class="flex items-center gap-4">
          <Button variant="outline" class="hidden md:inline-flex">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  
    <main>
      <!-- Hero Section -->
      <section class="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/40">
        <div class="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div class="flex flex-col gap-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Stream Content <span class="text-primary">Seamlessly</span> Across Devices
            </h1>
            <p class="text-lg text-muted-foreground max-w-md">
              Simplify your entertainment experience with ShowBox - where content meets innovation for 
              your streaming needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg">Start Watching <ChevronRight class="ml-2 h-4 w-4" /></Button>
              <Button variant="outline" size="lg">Explore Features</Button>
            </div>
          </div>
          
          <div class="relative aspect-video bg-muted rounded-lg overflow-hidden border shadow-xl">
            <div class="absolute inset-0 flex items-center justify-center">
              <Play class="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section id="features" class="py-20 px-4 md:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p class="text-muted-foreground max-w-xl">
            Experience entertainment like never before with our cutting-edge streaming platform
          </p>
        </div>
        
        <div class="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Laptop class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-semibold">Multi-device Support</h3>
            <p class="text-muted-foreground flex-1">
              Watch your favorite content across all devices seamlessly with perfect synchronization.
            </p>
          </Card>
          
          <Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-semibold">Secure Streaming</h3>
            <p class="text-muted-foreground flex-1">
              Advanced encryption and secure protocols ensure your viewing experience remains private.
            </p>
          </Card>
          
          <Card class="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Star class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-semibold">Premium Content</h3>
            <p class="text-muted-foreground flex-1">
              Access a vast library of high-quality videos, shows, and exclusive content.
            </p>
          </Card>
        </div>
      </section>
  
      <!-- How it Works Section -->
      <section id="how-it-works" class="py-20 px-4 md:px-6 lg:px-8 bg-muted/40">
        <div class="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold">How ShowBox Works</h2>
          <p class="text-muted-foreground max-w-xl">
            Get started with ShowBox in three simple steps
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <div class="absolute left-8 top-0 bottom-0 border-l-2 border-dashed border-muted-foreground/30 hidden md:block"></div>
            
            {#each [
              {
                step: 1, 
                title: "Create your account",
                description: "Sign up for ShowBox in seconds with just a few simple details."
              },
              {
                step: 2, 
                title: "Customize your preferences",
                description: "Tell us what you enjoy watching so we can personalize your experience."
              },
              {
                step: 3, 
                title: "Start streaming",
                description: "Instantly access thousands of shows, movies, and exclusive content."
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
  
      <!-- CTA Section -->
      <section class="py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div class="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 class="text-3xl md:text-4xl font-bold">Ready to Transform Your Viewing Experience?</h2>
          <p class="text-primary-foreground/80 max-w-xl">
            Join thousands of satisfied users who have already made the switch to ShowBox
          </p>
          <Button variant="secondary" size="lg" class="mt-4">
            Get Started Now <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  
    <!-- Footer -->
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
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">How It Works</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Devices</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Cookie Policy</a></li>
              <li><a href="#" class="text-sm text-muted-foreground hover:text-primary">Licensing</a></li>
            </ul>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row md:items-center justify-between mt-12 pt-8 border-t border-muted">
          <p class="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShowBox. All rights reserved.
          </p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="text-muted-foreground hover:text-primary">
              <span class="sr-only">Twitter</span>
              <!-- Twitter/X icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary">
              <span class="sr-only">Instagram</span>
              <!-- Instagram icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary">
              <span class="sr-only">GitHub</span>
              <!-- GitHub icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  