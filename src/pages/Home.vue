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
            route.params
            {{
            $route.params
           }}
          </div>
        </div>
      </main>
      <div v-for="block in content.body" v-bind:key="block._uid">
        <component :is="block.component" :block="block" :key="block._uid"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import routes from '@/router.ts'
import Hero from '@/sections/Hero.vue'

import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

</script>
<script>
export default {
  components: {
    Hero,
    Bar,
    Foo
  },
  data() {
    return {
      content: {
        body: [
          {
            _uid: "BUY6Drn9e1",
            component: "foo",
            headline: "Foo"
          },
          {
            _uid: "gJZoSLkfZV",
            component: "bar",
            title: "Bar"
          },
          {
            _uid: "X1JAfdsZxy",
            component: "foo",
            headline: "Another headline"
          },
          {
            _uid: "123123asa",
            component: "hero",
            headline: "Another headline",
            text: "Another headlineAnother headlineAnother headlineAnother headline",
            src: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          }
        ]
      }
    };
  },
  methods : {
    handler(msg) {
     console.log(msg)
    }
  }
}
</script>