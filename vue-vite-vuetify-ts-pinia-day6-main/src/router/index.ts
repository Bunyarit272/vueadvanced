import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
         // Default Layout
         path: '/',
         name: 'Defalut',
         component: DefaultLayout,
         children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                meta: {
                    title: 'Home'
                }
            }
        ]
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes
})

router.beforeEach((to, _, next) => {

    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()
})

export default router