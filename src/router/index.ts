// 创建一个路由器并暴露


//引入 createRouter
import { createRouter,createWebHistory} from 'vue-router'
//引入要要呈现的组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import Detail from '@/views/Detail.vue'

// 创建路由器
const router = createRouter({
    //路由器的工作模式
    history: createWebHistory(), // 使用 HTML5 的 history 模式
    routes: [{
        name:'zhuye',
        path:'/home',
        component: Home
    },
    {
        name:'guanyu',
        path:'/about',
        component: About
    },
    {
        name:'xinwen',
        path:'/news',
        component: News,
        children:[
            {
                // 子集路由不需要加卸斜杠
                // 添加问号可以实现参数可选择传输
                name:'detail',
                path:'detail',
                component:Detail,
                // 将路由接收到的所有params参数作为props传给路由组件
                // props: true、
                //函数写法
                props(router){
                    console.log("aaaa",router)
                    //可以是query 也可以是params
                    return router.query
                }
            }
        ]
    }
]
})

export default router