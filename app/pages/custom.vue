<script setup>
definePageMeta({
  layout: "custom",
});

import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();

const { data, error } = await useLazyFetch('/api/hello')

const { data: products } = await useFetch('/api/products')

const {data: productCount, pending} = await useAsyncData("products", ()=>{
  $fetch('/api/counter')
});
const refresh = () => refreshNuxtData("products");


import { useMouse } from '@vueuse/core'

const { sayHello, capitalize } = useUtils();
const { x, y } = useMouse();
const nuxtApp = useNuxtApp();
const { data: sessions } = await useFetch('/api/sessions', {
  server: true,
})
</script>
<template>
  <h1>Counter</h1>
    <div>{{ pending ? "Loading" : productCount }}</div>
    <button @click="refresh" class="cursor-pointer border-1 border-red-600">Refresh</button>
  <p>This is Page for Custom Layout</p>
  <h1 class="text-8xl">{{ sayHello() }}</h1>
  <h1 class="text-8xl">{{ capitalize('this is nuxt js') }}</h1>
  <div>
    <h1 class="text-2xl font-bold mb-4">Active Sessions</h1>
    <ul class="space-y-2">
      <li
        v-for="session in sessions"
        :key="session.id"
        class="p-4 bg-gray-100 rounded shadow"
      >
        <p><strong>User:</strong> {{ session.user_agent }}</p>
        <p><strong>Login Time:</strong> {{ session.id }}</p>
      </li>
    </ul>
  </div>
  <h1 class="text-4xl">X: {{ x }} - Y: {{ y }}</h1>
  <h1>hello {{ nuxtApp.$hello }}</h1>
  <div>    
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
  <div>
    <h1 class="text-2xl font-bold mb-4">Active Sessions</h1>
    <ul class="space-y-2">
      <li
        v-for="session in sessions"
        :key="session.id"
        class="p-4 bg-gray-100 rounded shadow"
      >
        <p><strong>User:</strong> {{ session.user_name }}</p>
        <p><strong>Login Time:</strong> {{ session.login_time }}</p>
      </li>
    </ul>
  </div>
</template>