import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  onMounted(() => {
    AOS.init({
      // optional settings:
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  })
})
