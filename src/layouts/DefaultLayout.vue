<script setup  lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TopNav from '@/components/TopNav.vue';
</script>
<template>
        <top-nav/>
    <the-header />
        <slot />
        <the-footer />
</template>
<script lang="ts">
export default {
    name: 'DefaultLayout',
    components: {
        TopNav,
        TheHeader,
        TheFooter,
    },
}
</script>

