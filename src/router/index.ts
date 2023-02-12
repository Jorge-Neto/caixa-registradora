import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import HelloWorldVue from "../components/HelloWorld.vue"

const About = { template: "<div>About</div>" }

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: HelloWorldVue },
    { path: "/about", component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
