import { createApp } from "vue/dist/vue.esm-bundler"
import App from "@/App.vue"
import store from "@/store"
import router from "@/router"
import "@/style.css"
import { useCounterStore } from "@/store/counter"

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { Store } from "pinia"

const vuetify = createVuetify({
    components,
    directives,
})

declare global {
    interface Window {
        Cypress?: Cypress.Cypress
        __counter_store__?: Store
    }
}

if (window.Cypress) {
    const CounterStore = useCounterStore()
    window.__counter_store__ = CounterStore
}

createApp(App).use(store).use(router).use(vuetify).mount("#app")
