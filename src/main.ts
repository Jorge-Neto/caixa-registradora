import { createApp } from 'vue/dist/vue.esm-bundler';
import '@/style.css';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(store).use(router).use(vuetify).mount('#app')
