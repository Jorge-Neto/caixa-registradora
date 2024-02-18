import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    { path: "/index.html", redirect: { name: "Cashier" } },
    {
        path: "/",
        name: "Cashier",
        component: () => import("@/views/CashierView.vue"),
        meta: {
            layout: "AppLayoutDefault",
        },
    },
    {
        path: "/management",
        name: "Products",
        component: () => import("@/views/ProductsView.vue"),
        meta: {
            layout: "AppLayoutDefault",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/LoginView.vue"),
        meta: {
            layout: "AppLayoutLogin",
        },
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("@/views/NotFoundView.vue"),
        meta: {
            requiresAuth: false,
            layout: "AppLayoutDefault",
        },
    },
]

export default routes
