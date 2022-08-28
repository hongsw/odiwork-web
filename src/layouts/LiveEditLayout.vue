<script setup  lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import SiteLiveEditor from '@/components/SiteLiveEditor.vue';
import TopNav from '@/components/TopNav.vue';
import IframeWrapper from "@/layouts/IframeWrapper.vue"

</script>
<template>
    <top-nav/>
<slot></slot>
 </template>
<script lang="ts">

import { h } from 'vue'
import { createSSRApp } from 'vue'
export default {
    components: {
        IframeWrapper,
        SiteLiveEditor,
        TheFooter,
        TopNav,
    }
}
</script>

