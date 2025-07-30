<script setup>
import {ref} from 'vue'
const card = [
    {
        id: 1,
        title: 'Free',
        description: 'Basic features for individuals.',
        price: '$0/month',
        buttonText: 'Choose Plan',
        features: {
            feature1: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Access to basic templates</li>',
            feature2: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Limited storage space</li>',
            feature3: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Community support</li>',
            feature4: '<li class="text-red-600"><i class="pi pi-times-circle"></i> Chat Support</li>',
            feature5: '<li class="text-red-600"><i class="pi pi-times-circle"></i> Emails Support</li>',
            feature6: '<li class="text-red-600"><i class="pi pi-times-circle"></i> Phone Call Support</li>',
        },
        primaryBgColor: '#8C30F5',
        secondaryBgColor: '#6c1dcc'
    },
    {
        id: 2,
        title: 'Pro',
        description: 'Advanced features for professionals.',
        price: '$15/month',
        features: {
            feature1: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Access to basic templates</li>',
            feature2: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Limited storage space</li>',
            feature3: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Priority support</li>',
            feature4: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Chat Support</li>',
            feature5: '<li class="text-red-600"><i class="pi pi-times-circle"></i> Emails Support</li>',
            feature6: '<li class="text-red-600"><i class="pi pi-times-circle"></i> Phone Call Support</li>',

        },
        buttonText: 'Choose Plan',
        primaryBgColor: '#8C30F5',
        secondaryBgColor: '#6c1dcc'
    },
    {
        id: 3,
        title: 'Team',
        description: 'Advanced features for teams.',
        price: '$25/month',
        features: {
            feature1: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Access to all templates</li>',
            feature2: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Increased storage space</li>',
            feature3: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Priority support</li>',
            feature4: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Chat Support</li>',
            feature5: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Emails Support</li>',
            feature6: '<li class="text-red-600"><i class="pi pi-times-circle"></i> Phone Call Support</li>',
        },
        buttonText: 'Choose Plan',
        primaryBgColor: '#8C30F5',
        secondaryBgColor: '#6c1dcc'
    },
    {
        id: 4,
        title: 'Enterprise',
        description: 'Custom solutions for businesses.',
        price: 'Contact Us',
        features: {
            feature1: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Access to all templates</li>',
            feature2: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Increased storage space</li>',
            feature3: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Priority support</li>',
            feature4: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Chat Support</li>',
            feature5: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Emails Support</li>',
            feature6: '<li class="text-indigo-600"><i class="pi pi-check-circle"></i> Phone Call Support</li>',
        },
        buttonText: 'Contact Sales',
        primaryBgColor: '#8C30F5',
        secondaryBgColor: '#6c1dcc'
    }
]
</script>
<template>
  <div class="min-h-96 flex flex-col justify-center items-center">
    <h1 class="text-3xl md:text-5xl font-bold text-center text-indigo-700">
      <div>Choose the Right</div>
      <div>Plan for Your Financial Needs</div>
    </h1>
    <p class="px-2 mt-2 md:max-w-2xl text-sm md:text-lg text-center text-indigo-950">Explore our range of tailored banking packages designed to provide secure, efficient, and comprehensive financial services for individuals and teams.</p>
    <div class="flex space-x-2 mt-6">
        <button class="bg-white border border-indigo-700 text-indigo-700 px-4 py-1 rounded-full hover:bg-indigo-50">Getting Started</button>
        <button class="bg-indigo-700 text-white px-4 py-1 rounded-full hover:bg-indigo-800">Explore Marketing</button>
      </div>
  </div>
  <div class="mt-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
            <div v-for="item in card" :key="item.title" class="bg-white p-6 rounded-lg shadow-lg border-indigo-600 border-1 cursor-pointer">
                <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>
                <p class="text-gray-700 mb-4">{{ item.description }}</p>
                <p class="mb-4">
                    <span class="font-bold">Features:</span>
                    <ul>
                        <li v-html="item.features.feature1"></li>
                        <li v-html="item.features.feature2"></li>
                        <li v-html="item.features.feature3"></li>
                        <li v-html="item.features.feature4"></li>
                        <li v-html="item.features.feature5"></li>
                        <li v-html="item.features.feature6"></li>
                    </ul>
                </p>
                <p class="text-2xl font-bold mb-4">{{ item.price }}</p>
                <button class="bg-[#8C30F5] hover:bg-[#6c1dcc] text-white px-4 py-2 rounded-full right-0 cursor-pointer">{{ item.buttonText }}</button>
            </div>
        </div>
    </div>
</template>
