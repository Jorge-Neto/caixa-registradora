/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from "vue/dist/vue.esm-bundler"
import App from "@/App.vue"
import store from "@/store"
import router from "@/router"
import { Store } from "pinia"
import { useProductStore } from "@/store/product"
import "@/style.css"

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, mdi } from "vuetify/iconsets/mdi"

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
})

declare global {
    interface Window {
        Cypress?: Cypress.Cypress
        //@ts-ignore
        __product_store__?: Store
    }
}

if (window.Cypress) {
    const ProductStore = useProductStore()
    window.__product_store__ = ProductStore
}

createApp(App).use(store).use(router).use(vuetify).mount("#app")
