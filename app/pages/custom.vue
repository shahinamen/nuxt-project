<script setup>
definePageMeta({
  layout: "custom",
});

import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();


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
  <div>
    <h1>Counter</h1>
    <h2>{{ store.count }}</h2>
    <button class="cursor-pointer m-2 border-1 border-green-500" @click="store.increment">Increment</button>
    <button class="cursor-pointer m-2 border-1 border-green-500" @click="store.decrement">Decrement</button>
    <button class="cursor-pointer m-2 border-1 border-green-500" @click="store.reset">Reset</button>
  </div>
</template>