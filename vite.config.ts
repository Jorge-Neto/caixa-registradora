import { resolve } from "path"

import Vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    plugins: [Vue(), vuetify({ autoImport: true })],
})
