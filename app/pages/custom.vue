<script setup>
definePageMeta({
  layout: "custom",
});

import { useMouse } from '@vueuse/core'

const { sayHello, capitalize } = useUtils();
const { x, y } = useMouse();
const nuxtApp = useNuxtApp();
</script>
<template>
  <p>This is Page for Custom Layout</p>
  <h1 class="text-8xl">{{ sayHello() }}</h1>
  <h1 class="text-8xl">{{ capitalize('this is nuxt js') }}</h1>
  <h1 class="text-4xl">X: {{ x }} - Y: {{ y }}</h1>
  <h1>hello {{ nuxtApp.$hello }}</h1>
</template>