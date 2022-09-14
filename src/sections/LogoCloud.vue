<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div :class="block.bg_color">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class=""
        :class="block.text_style">
            {{block.headline}}
        </h2>
        <div class="mt-8 flow-root lg:mt-10">
          <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div v-if="block.logo_src1" class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img class="h-12" :src="block.logo_src1"/>
            </div>
            <div v-if="block.logo_src2" class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img class="h-12" :src="block.logo_src2"/>
            </div>
            <div v-if="block.logo_src3" class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img class="h-12" :src="block.logo_src3"/>
            </div>
            <div v-if="block.logo_src4" class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img class="h-12" :src="block.logo_src4"/>
            </div>
            <div v-if="block.logo_src5" class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img class="h-12" :src="block.logo_src5"/>
            </div>
            <div v-if="block.logo_src6" class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img class="h-12" :src="block.logo_src6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    props: {
        block: Object
    },
    name: 'LogoCloud',
}
</script>