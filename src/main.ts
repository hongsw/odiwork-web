import { createApp, h } from 'vue'
import routes from './routes'
import './style.css'
import './index.css'
import { defineAsyncComponent } from 'vue'
import Home from './pages/Home.vue'

const SimpleRouterApp = {
    data: () => ({
      currentRoute: window.location.pathname
    }),
  
    computed: {
      ViewComponent (): any{
        const matchingPage = routes[this.currentRoute] || '404'
        return defineAsyncComponent(() => import(`./pages/${matchingPage}.vue`));
      }
    },
  
    render () {
      return h(this.ViewComponent)
    },
  
    created () {
      window.addEventListener('popstate', () => {
        this.currentRoute = window.location.pathname
      })
    }
  }


const app = createApp(SimpleRouterApp)
app.mount('#app')