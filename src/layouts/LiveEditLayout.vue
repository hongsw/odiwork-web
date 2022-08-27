<script setup>
import SiteLiveEditor from '@/components/SiteLiveEditor.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

</script>

<template>
    <fregment>
        <site-live-editor></site-live-editor>
        <the-header />
        <slot />
        <the-footer />
    </fregment>
</template>
<script>

export default {
    name: 'LiveEditLayout',
    components: {
        SiteLiveEditor,
        TheHeader,
        TheFooter,
    },
}
</script>

