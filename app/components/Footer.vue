<script setup>
</script>

<template>
  <nav class="bg-white shadow-md fixed bottom-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center text-indigo-700 font-bold text-lg">
        <NuxtLink to="/" class="cursor-pointer" exact-active-class="nuxt-link-active"><i class="pi pi-sparkles pr-2"></i> SPARKLES</NuxtLink>
        <span class="pl-2">|</span>
        <ul class="hidden md:flex space-x-6 text-indigo-950 font-medium pl-2">
            <li><NuxtLink to="/" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">About</NuxtLink></li>
            <li><NuxtLink to="/price" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Price</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Contact</NuxtLink></li>
        </ul>
      </div>

      <!-- Desktop Buttons -->
      <div class="hidden md:flex space-x-2">
        <NuxtLink
          to="/login"
          class="bg-white border border-indigo-700 text-indigo-700 px-4 py-1 rounded-full hover:bg-indigo-50 transition-colors duration-200"
        >
          Login
        </NuxtLink>

        <NuxtLink
          to="/register"
          class="bg-indigo-700 text-white px-4 py-1 rounded-full hover:bg-indigo-800 transition-colors duration-200"
        >
          Register
        </NuxtLink>
      </div>
    </div>    
  </nav>
</template>
