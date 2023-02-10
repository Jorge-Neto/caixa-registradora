import { createApp } from 'vue/dist/vue.esm-bundler';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import '@/style.css';
import { useCounterStore } from '@/store/counter';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

// @ts-ignore
if (window.Cypress) {
  const TodoStore = useCounterStore()
  // @ts-ignore
  window.__store__ = TodoStore
}

createApp(App).use(store).use(router).use(vuetify).mount('#app')
