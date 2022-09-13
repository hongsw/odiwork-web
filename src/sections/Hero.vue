<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-indigo-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="block.src" alt="" />
      <div class="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-4xl">{{block.headline}}</h1>
      <p class="mt-6 text-xl text-indigo-100 max-w-3xl">{{block.text}}</p>
      <a v-if="block.button_text"
       v-bind:href="block.button_url" 
       class="inline-block bg-indigo-500 my-5 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
        {{block.button_text}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      block: Object
    },
    name: 'Hero',
}
</script>