<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

</script>

<template>
    <div>
        <router-link to="/">Home</router-link> |
            <router-link to="/live/home">Home (LiveEdit)</router-link> |
            <router-link to="/admin">Admin</router-link>
        <the-header />
        <slot />
        <the-footer />
    </div>
</template>
<script>

export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
        TheFooter,
    },
}
</script>

