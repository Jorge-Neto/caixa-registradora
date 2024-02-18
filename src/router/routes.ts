import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "Cashier", component: () => import("@/views/CashierView.vue") },
    { path: "/index.html", redirect: { name: "Cashier" } },
    { path: "/management", name: "Products", component: () => import("@/views/ProductsView.vue") },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("@/views/NotFoundView.vue"),
        meta: {
            requiresAuth: false,
        },
    },
]

export default routes
