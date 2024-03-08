import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: { name: "Login" } },
    {
        path: "/cashier",
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
        path: "/",
        name: "Login",
        component: () => import("@/views/LoginView.vue"),
        meta: {
            layout: "AppLayoutLogin",
        },
        alias: "/login",
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("@/views/RegisterView.vue"),
        meta: {
            layout: "AppLayoutLogin",
        },
    },
    {
        path: "/email-confirmation",
        name: "EmailConfirmation",
        component: () => import("@/views/EmailConfirmationView.vue"),
        meta: {
            layout: "AppLayoutLogin",
        },
    },
    {
        path: "/me",
        name: "UserInfoView",
        component: () => import("@/views/UserInfoView.vue"),
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
