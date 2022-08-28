<template>
    <component :is="layout" >
        <slot  />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LiveEditLayout from '@/layouts/LiveEditLayout.vue';
import MobileLayout from '@/layouts/MobileLayout.vue';

  import { markRaw, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const layout = ref()
  const route = useRoute()

  watch(
    () => route.meta?.layout as string | undefined,
    async (metaLayout) => {
      try {
        console.log(metaLayout)
        const component = metaLayout && await import(/* @vite-ignore */ `./${metaLayout}.vue`)
        layout.value = markRaw(component?.default || DefaultLayout)
      } catch (e) {
        layout.value = markRaw(DefaultLayout)
      }
    },
    { immediate: true }
  )
</script>