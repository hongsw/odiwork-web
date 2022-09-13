<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="container" style="padding: 50px 0 100px 0">
    supabaseStore.user :  <Profile v-if="supabaseStore.user" />
    <Auth v-else />
  </div>

  <div v-for="block in content.body" v-bind:key="block._uid">
    <component :is="block.component" :block="block" :key="block._uid"></component>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import routes from '@/router.ts'
import Cta from '@/sections/Cta.vue'
import Hero from '@/sections/Hero.vue'
import LogoCloud from '@/sections/LogoCloud.vue'
import Newsletter from '@/sections/Newsletter.vue'

import { supabaseStore } from '@/supabaseStore.js'
import { supabase } from '@/supabase.js'
import Auth from '@/components/Auth.vue'
import Profile from '@/components/Profile.vue'
</script>
<script>
export default {
  components: {
    Cta,
    Hero,
    LogoCloud: LogoCloud,
    Newsletter,
    Auth,
    Profile,
  },
  setup() {
    supabaseStore.user = supabase.auth.user()
    supabase.auth.onAuthStateChange((_, session) => {
      supabaseStore.user = session.user
    })
    return { supabaseStore }
  },
  data() {
    return {
      content: {
        body: [

        {
            _uid: "213123",
            component: "cta",
            headline: "아이디어가 있으신가요?",
            headline2: "오디웤에서 현실로 만들어보세요",
            p: "웹사이트를 빠르게 만드세요. 만들어지는 과정을 바로 보면서 글과 이미지만 넣으면 됩니다.",
            img_src: "https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg",
            button_text: "시작하기",
            button_url: "/start",
          },
          {
            _uid: "1",
            component: "hero",
            headline: "쉬운 편집 방식",
            text: "웹사이트를 빠르게 만드세요. 만들어지는 과정을 바로 보면서 글과 이미지만 넣으면 됩니다.",
            src: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
            button_text: "시작하기",
            button_url: "/start",
          },
        {
            _uid: "2",
            component: "LogoCloud",
            bg_color: "bg-indigo-700",
            text_color: "text-3xl font-normal tracking-tight text-white",
            headline: "혁신적인 우리의 고객사들",
            logo_src1: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
            logo_src2: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
            logo_src3: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
            logo_src4: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
            logo_src5: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
            logo_src6: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white",
          },
          {
            _uid: "123213",
            component: "Newsletter",
            bg_color: "bg-indigo-700",
            text_color: "text-3xl font-normal tracking-tight text-white",
            headline: "제품 뉴스 및 업데이트를 원하십니까?",
            headline2: "뉴스레터를 구독하세요.",
            label_text: "이메일을 입력하세요",
            button_text: "구독",
          }
        ]
      }
    };
  }
}
</script>