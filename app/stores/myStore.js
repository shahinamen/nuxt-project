export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function decrement() {
    count.value-- 
  }
  function reset() {
    count.value = 0;
  }

  return { count, name, doubleCount, increment, decrement, reset }
})