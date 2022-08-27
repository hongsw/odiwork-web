<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50 overflow-hidden">
    <div class="relative pt-6 pb-16 sm:pb-24">
      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">회의실 사용예약 SlackApp</span>
            {{ ' ' }}
            <span class="block text-indigo-600 xl:inline">공간을 더 풍요롭게</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            공유오피스에서 회의실은 매력적입니다. 다양한 고객의 회의실예약 요청을 간편하게 기록하고 공유하여 중복이 없도록하세요. 1월간 사용량을 측정하여 VIP고객을 확인하세요.</p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
           
          </div>
        </div>
      </main>
    </div>
    <Hero></Hero>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import routes from '../router.ts'
import Hero from '../sections/Hero.vue'

</script>
<script>
export default {
  components: {
    Hero : Hero,
  },
  methods : {
    handler(msg) {
     console.log(msg)
    }
  }
}
</script>