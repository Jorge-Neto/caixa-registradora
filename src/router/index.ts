import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const CashierView = () => import("@/views/CashierView.vue")
const ProductsView = () => import("@/views/ProductsView.vue")
const NotFoundView = () => import("@/views/NotFoundView.vue")

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "Cashier", component: CashierView },
    { path: "/management", name: "Products", component: ProductsView },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFoundView,
        meta: {
            requiresAuth: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
