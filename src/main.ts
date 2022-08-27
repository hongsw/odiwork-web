import { createApp, h } from 'vue'
import routes from './router'
import './style.css'
import './index.css'
import { defineAsyncComponent } from 'vue'
import Home from './pages/Home.vue'

import App from './App.vue'
import store from './store'
import router from './router'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
