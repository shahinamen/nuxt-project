<script setup>
definePageMeta({
  layout: "custom",
});

const { sayHello, capitalize } = useUtils();

</script>
<template>
  <p>This is Page for Custom Layout</p>
  <h1 class="text-8xl">{{ sayHello() }}</h1>
  <h1 class="text-8xl">{{ capitalize('this is nuxt js') }}</h1>
</template>