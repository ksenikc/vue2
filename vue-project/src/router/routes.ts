import { RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/rate',
        component: () => import('@/views/Rate.vue'),
    },
    {
        path: '/violations',
        component: () => import('@/views/Violations.vue'),
    },

]

export default routes
