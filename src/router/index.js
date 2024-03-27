import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/_pages/home.vue'
import About from '/src/_pages/about.vue'
import Post from '/src/_pages/Post.vue'

const routes = [
    {
        path: '/blog',
        name: 'Home',
        component: Home,
    },
    // {
    //     path: '/blog/about',
    //     name: 'About',
    //     component: About,
    // },
    {
        path: '/blog/:id',
        name: 'Post',
        component: Post,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router