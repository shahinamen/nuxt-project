<script setup>
</script>

<template>
  <nav class="bg-slate-950 shadow-md fixed bottom-0 left-0 w-full z-50 mt-8">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center text-white font-bold text-md">
        <NuxtLink to="/" class="cursor-pointer" exact-active-class="nuxt-link-active"><i class="pi pi-sparkles pr-2"></i> SPARKLES</NuxtLink>
        <span class="pl-2">|</span>
        <ul class="flex space-x-4 text-white font-medium pl-2">
            <li><NuxtLink to="/" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Product</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Privacy Policy</NuxtLink></li>
        </ul>
      </div>

      <!-- Desktop Buttons -->
      <div class="flex items-center space-x-2">
        <NuxtLink
          to="https://youtube.com"
          class=""
        >
          <i class="pi pi-youtube text-white mt-1"></i>
        </NuxtLink>
        <i class="pi pi-ellipsis-v text-white"></i>
        <NuxtLink
          to="https://facebook.com"
          class=""
        >
          <i class="pi pi-facebook text-white mt-1"></i>
        </NuxtLink>
      </div>
    </div>
    <hr class="text-white mb-4"/>
    <div class="text-center text-white m-3">&copy; 2025 | All rights reserved by SPARKLES</div>
  </nav>
</template>
