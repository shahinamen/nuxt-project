<template>
    <nav class="navbar flex flex-row">
        <div>
            <i class="pi pi-sparkles"></i>SPARKLES
        </div>
        <ul class="flex space-x-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/">About</NuxtLink></li>
            <li><NuxtLink to="/">Price</NuxtLink></li>
            <li><NuxtLink to="/">Contact</NuxtLink></li>
            <!-- <li><NuxtLink to="/events">Events</NuxtLink></li>
            <li><NuxtLink to="/events/1">Event 1</NuxtLink></li>
            <li><NuxtLink to="/events/2">Event 2</NuxtLink></li>
            <li><NuxtLink to="/custom">Custom layout</NuxtLink></li> -->
        </ul>
        <div>
            <button class="bg-white text-indigo-950 px-3 py-1 rounded-full">Login</button>
            <button class="bg-indigo-700 text-white px-3 py-1 rounded-full">Register</button>
        </div>
    </nav>
</template>