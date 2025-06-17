// 创建一个路由器并暴露


//引入 createRouter
import { createRouter,createWebHistory} from 'vue-router'
//引入要要呈现的组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'

// 创建路由器
const router = createRouter({
    //路由器的工作模式
    history: createWebHistory(), // 使用 HTML5 的 history 模式
    routes: [{
        path:'/home',
        component: Home
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/news',
        component: News
    }
]
})

export default router