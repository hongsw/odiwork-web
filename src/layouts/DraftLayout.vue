<script setup  lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>
<template>
    <the-header />
        <slot />
        <the-footer />
</template>
<script lang="ts">
export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
        TheFooter,
    },
}
</script>

