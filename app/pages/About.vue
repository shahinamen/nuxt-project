<script setup lang="ts">
import { useDateFormat, useNow, useImage } from '@vueuse/core'
const formattedYear = useDateFormat(useNow(), 'YYYY')
const today = useDateFormat(useNow(), 'DD MMM YYYY HH:mm:ss')

const avatarUrl = 'https://plus.unsplash.com/premium_photo-1723489482232-2e5bb5eb1e24?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const { isLoading } = useImage({ src: avatarUrl })
</script>
<template>
  <div class="min-h-96 flex flex-col justify-center items-center">
    <h1 class="text-3xl md:text-5xl font-bold text-center text-indigo-700 mt-24">
      <div>We build damn good products</div>
      <div> for web and mobile</div>
    </h1>
    <p class="px-2 mt-2 md:max-w-2xl text-sm md:text-lg text-center text-indigo-950">Discover a suite of robust tools and functionalities designed to optimize your marketing strategies and drive business growth.</p>
    <div class="flex space-x-2 mt-6 mb-16">
        <button class="bg-white border border-indigo-700 text-indigo-700 px-4 py-1 rounded-full hover:bg-indigo-50">Getting Started</button>
        <button class="bg-indigo-700 text-white px-4 py-1 rounded-full hover:bg-indigo-800">Explore Marketing</button>
    </div>
    <div class="w-full bg-indigo-50 py-8 px-4 mb-32">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 class="text-2xl md:text-3xl text-indigo-700 font-bold">SPARKLES Story</h1>
          <h1 class="text-2xl mt-2 font-medium"><i class="pi pi-flag-fill text-green-600"></i> Founded in {{ formattedYear }}</h1>
          <p class="text-justify"><span class="text-indigo-700 font-bold">SPARKLES</span> was founded in {{ formattedYear }} by a group of passionate creators with a shared vision—to design meaningful digital experiences that inspire, connect, and elevate. In the early days, we focused on delivering beautifully crafted solutions tailored to the unique needs of our clients. From clean code to captivating design, our goal was always to exceed expectations.</p>
          <p class="text-justify mt-2">Driven by a curiosity to do more than just build on demand, we immersed ourselves in learning from some of the most innovative minds in the tech and creative industries. Through mentorship, collaboration, and relentless experimentation, we evolved from a small team of implementers into a thoughtful, strategic product studio.</p>
          <p class="text-justify mt-2">Today, <span class="text-indigo-700 font-bold">SPARKLES</span> operates at the intersection of creativity and technology, combining product development services with our own in-house ventures. Whether we’re supporting a client’s dream or nurturing our own ideas, we apply the same principles—clarity, quality, and care. For us, every project is a chance to learn, grow, and create something that truly matters.</p>
        </div>
        <div>
          <h1 class="text-2xl md:text-3xl text-indigo-700 font-bold">What's Next?</h1>
          <h1 class="text-2xl mt-2 font-medium"><i class="pi pi-clock text-orange-600"></i> today {{ today }}</h1>
          <p class="text-justify">The experience and insights we gained while building tailored solutions for our clients became the foundation for <span class="text-indigo-700 font-bold">SPARKLES'</span> own product journey. What began as internal tools to support our workflow has evolved into a suite of promising products poised for long-term success.</p>
          <p class="text-justify mt-2">Our next bold ambition is to grow <span class="text-indigo-700 font-bold">SPARKLES</span> into a billion-dollar product studio—by staying true to what we do best: crafting purposeful, impactful digital experiences that make a difference.</p>
          <div class="mt-12 flex items-center">
            <div>
              <span v-if="isLoading">Loading</span>
              <img v-else :src="avatarUrl" class="rounded-full max-w-[170px]">
            </div>
            <div class="">
              <h1 class="text-4xl text-indigo-700 space-x-6">Mohammad<br/>Zibran Ali</h1>
              <h1 class="text-slate-300 space-x-6">Chief Executive Officer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>
