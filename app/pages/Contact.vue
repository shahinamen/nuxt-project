<template>
  <div class="min-h-96 flex flex-col justify-center items-center">
    <h1 class="text-3xl md:text-5xl font-bold text-center text-indigo-700">Get in Touch with Us</h1>
    <p class="px-2 mt-2 md:max-w-2xl text-sm md:text-lg text-center text-indigo-950">
        We’re here to assist you with any questions or concerns—reach out to our dedicated support team anytime.
    </p>
  </div>
  <div class="flex flex-col justify-center items-center px-4 py-12 bg-gray-50 min-h-screen mb-32">
  <h1 class="text-2xl md:text-4xl font-bold text-center text-indigo-700 mb-8">Send a Message</h1>

  <form class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
    <div class="flex flex-col">
      <label for="firstName" class="text-sm font-medium text-gray-700 mb-1">First Name</label>
      <input id="firstName" type="text" placeholder="John"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
    </div>

    <div class="flex flex-col">
      <label for="lastName" class="text-sm font-medium text-gray-700 mb-1">Last Name</label>
      <input id="lastName" type="text" placeholder="Doe"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
    </div>

    <div class="flex flex-col">
      <label for="email" class="text-sm font-medium text-gray-700 mb-1">Email</label>
      <input id="email" type="email" placeholder="you@example.com"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
    </div>

    <div class="flex flex-col">
      <label for="phone" class="text-sm font-medium text-gray-700 mb-1">Phone</label>
      <input id="phone" type="tel" placeholder="+880 1XXX XXX XXX"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
    </div>

    <div class="flex flex-col md:col-span-2">
      <label for="message" class="text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea id="message" rows="5" placeholder="Write your message here..."
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
    </div>

    <div class="md:col-span-2 text-center">
      <button type="submit"
        class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200">
        Send Message
      </button>
    </div>
  </form>
</div>

</template>
