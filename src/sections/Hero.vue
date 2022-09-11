<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-indigo-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="block.src" alt="" />
      <div class="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{{block.headline}}</h1>
      <p class="mt-6 text-xl text-indigo-100 max-w-3xl">{{block.text}}</p>
    </div>
  </div>
</template>


<script>
// https://codesandbox.io/s/dynamic-component-rendering-using-vuejs-5z6ff?from-embed=&file=/src/components/Foo.vue:89-107
export default {
    props: {
      block: Object
    },
    name: 'Hero',
}

</script>