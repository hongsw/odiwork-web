// export default {
//     '/': 'Home',
//     '/party': 'Party',
//     '/interview': 'Interview',
//     '/try_learn': 'TryNLearn',
//     '/nocode': 'NoCode'
//   }
import { defineAsyncComponent } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/live/home',
      component: Home,
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
