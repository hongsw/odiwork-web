<script setup  lang="ts">
import TopNav from '@/components/TopNav.vue';
</script>
<template>
        <top-nav/>
        <slot />
</template>
<script lang="ts">
export default {
    name: 'DefaultLayout',
    components: {
        TopNav
    },
}
</script>

