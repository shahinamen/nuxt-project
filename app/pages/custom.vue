<script setup>
definePageMeta({
  layout: "custom",
});

import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();

const { data, pending, error } = await useFetch('/api/hello')

const { data: products } = await useFetch('/api/products')

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
    <h2 class="text-2xl">{{ store.count }}</h2>
    <button class="cursor-pointer m-2 border-1 border-green-500" @click="store.increment">Increment</button>
    <button class="cursor-pointer m-2 border-1 border-green-500" @click="store.decrement">Decrement</button>
    <button class="cursor-pointer m-2 border-1 border-green-500" @click="store.reset">Reset</button>
  </div>
  <div>
    <h1 class="text-4xl">
      <div>
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <p v-else>Server API Response: {{ data }}</p>
  </div>
    </h1>
  </div>
  <div>
    <h1 class="text-xl">Fetch Data:</h1>
    <div>{{ products }}</div>
    <ul>
      <li v-for="(item, index) in products" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>