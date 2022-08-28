<script setup  lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>
<template>
    <a class="logo-odi-floating fixed z-40 m-3 p-2 float-left rounded-lg bg-yellow-500 hover:bg-yellow-600 text-sm text-black hover:text-teal-200 font-extrabold outline hover:outline-offset-2 shadow-lg shadow-gray-500/40 hover:shadow-gray-500/40 "
        href="/live/home">
        Odi
    </a>
    <the-header />
    <slot></slot>
    <the-footer />
</template>
<script lang="ts">
export default {
    name: 'PreviewLayout',
    components: {
        TheHeader,
        TheFooter,
    },
}
</script>
<style scoped>
.logo-odi-floating{
    bottom:10px;
    left: 10px;
}
</style>

