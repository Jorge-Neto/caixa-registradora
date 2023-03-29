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
import { md3 } from "vuetify/blueprints"
import JsonCSV from "vue-json-csv"

const vuetify = createVuetify({
    blueprint: md3,
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

createApp(App).component("downloadCsv", JsonCSV).use(store).use(JsonCSV).use(router).use(vuetify).mount("#app")
