// export default {
//     '/': 'Home',
//     '/party': 'Party',
//     '/interview': 'Interview',
//     '/try_learn': 'TryNLearn',
//     '/nocode': 'NoCode'
//   }
import { defineAsyncComponent } from 'vue'
import Vue from 'vue';

import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Home2 from './pages/Home2.vue'
import Live from './pages/Live.vue'

const host = window.location.host;
const parts = host.split('.');
const domainLength = 3; // route1.example.com => domain length = 3
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/draft/home',
      component: Home,
      meta: { layout: 'DraftLayout' }
    },
    {
      path: '/preview/home',
      component: Home,
      meta: { layout: 'PreviewLayout' }
    },
    {
      path: '/live',
      component: Live,
      meta: { layout: 'LiveEditLayout' }
    },
    {
      path: '/live/home',
      component: Live,
      meta: { layout: 'LiveEditLayout' }
    },
    {
      path: '/party',
      component: defineAsyncComponent(() => 
        import(`./pages/Party.vue`))
    },
    {
      path: '/interview',
      component: defineAsyncComponent(() => 
        import(`./pages/Interview.vue`))
    },
    {
      path: '/try_learn',
      component: defineAsyncComponent(() => 
        import(`./pages/TryNLearn.vue`))
    },
    {
      path: '/nocode',
      component: defineAsyncComponent(() => 
        import(`./pages/NoCode.vue`))
    },
    {
      path: '/admin',
      component: () => import('./views/Admin.vue'),
      meta: { layout: 'AppLayoutAdmin' }
    }
  ]
})


router.beforeEach((to, from, next) => {
  let subdomain = window.location.host.split('.')[0]
  let domain = window.location.host.split(':')[0]
  console.log(subdomain)
  if (subdomain != 'www' && domain != '127.0.0.1') {
    to.params['subdomain'] = subdomain
  }
  next()
})

export default router;