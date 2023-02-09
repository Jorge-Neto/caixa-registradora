import { createApp } from 'vue/dist/vue.esm-bundler';
import '@/style.css';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

createApp(App).use(store).use(router).mount('#app')
