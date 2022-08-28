<template>
  <main>
    <the-layout>
      <router-view />
    </the-layout>
  </main>
</template>

<script setup>
</script>

<script>
import {
  defineComponent
} from "vue";
import TheLayout from "./layouts/TheLayout.vue";
export default defineComponent({
  name: "App",
  components: {
    TheLayout,
  },
});
</script>

<style>
</style>
