<template>
  <div class="min-h-[24rem] flex flex-col justify-center items-center text-center px-4 py-12 bg-white">
    <h1 class="text-3xl md:text-5xl font-bold text-indigo-700">Login Credentials</h1>
    <p class="mt-3 md:max-w-2xl text-base md:text-lg text-indigo-950">
      We’re here to assist you with any questions or concerns—reach out to our dedicated support team anytime.
    </p>
  </div>

  <div class="flex justify-center items-center px-4 py-12 bg-gray-50 min-h-screen mb-16">
    <div class="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-8">Login</h2>

      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </div>
      </form>

      <div class="mt-6 text-sm text-center text-gray-600">
        Don't have an account?
        <NuxtLink to="/register" class="text-indigo-600 hover:underline">Register</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleLogin = () => {
  console.log('Login submitted')
}
</script>
