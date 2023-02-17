import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import HomeView from "@/views/HomeView.vue"

const About = { template: "<div>About</div>" }

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: HomeView },
    { path: "/about", component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
