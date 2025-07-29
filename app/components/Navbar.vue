<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center text-indigo-700 font-bold text-lg">
        <i class="pi pi-sparkles pr-2"></i> SPARKLES
      </div>

      <!-- Hamburger Icon -->
      <button
        class="md:hidden text-2xl text-indigo-700 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-indigo-950 font-medium">
        <li><NuxtLink to="/" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">About</NuxtLink></li>
        <li><NuxtLink to="/price" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Price</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-indigo-600" exact-active-class="nuxt-link-active">Contact</NuxtLink></li>
      </ul>

      <!-- Desktop Buttons -->
      <div class="hidden md:flex space-x-2">
        <button class="bg-white border border-indigo-700 text-indigo-700 px-4 py-1 rounded-full hover:bg-indigo-50">Login</button>
        <button class="bg-indigo-700 text-white px-4 py-1 rounded-full hover:bg-indigo-800">Register</button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4">
        <ul class="flex flex-col space-y-2 text-indigo-950 font-medium">
            <li><NuxtLink to="/" @click="isOpen = false" class="block hover:text-indigo-600" exact-active-class="nuxt-link-active">Home</NuxtLink></li>
            <li><NuxtLink to="/about" @click="isOpen = false" class="block hover:text-indigo-600" exact-active-class="nuxt-link-active">About</NuxtLink></li>
            <li><NuxtLink to="/price" @click="isOpen = false" class="block hover:text-indigo-600" exact-active-class="nuxt-link-active">Price</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="isOpen = false" class="block hover:text-indigo-600" exact-active-class="nuxt-link-active">Contact</NuxtLink></li>
        </ul>
        <div class="mt-3 flex space-x-2">
            <button class="w-full bg-white border border-indigo-700 text-indigo-700 px-4 py-1 rounded-full hover:bg-indigo-50">Login</button>
            <button class="w-full bg-indigo-700 text-white px-4 py-1 rounded-full hover:bg-indigo-800">Register</button>
        </div>
    </div>
  </nav>
</template>
