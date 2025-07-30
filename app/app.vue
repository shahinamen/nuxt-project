<template>
  <Navbar />
  <NuxtLayout>
    <Header />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
