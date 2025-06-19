<template>
    <div class = "app">
        <h2>Vue 路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">
            <!-- 路由的repla属性  
             浏览记录 默认push 可前进，可返回  
             替换为replace会默认覆盖前一个浏览记录 无法返回前进-->
            <RouterLink replace :to="{path:'/home'}" active-class="active">首页</RouterLink>
            <RouterLink replace :to="{name:'xinwen'}">新闻</RouterLink>
            <RouterLink :to="{path:'/about'}">关于</RouterLink>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
   
</template>

<script lang="ts" setup name = "App">
import { RouterView } from 'vue-router';

</script>

<style scoped>
    .app{
        background-color: aquamarine;
        box-sizing: 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .navigate{
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }
    .navigate a{
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
    .navigate a:hover{
        color: red;
    }
    .main-content{
        background-color: bisque;
        padding: 20px;
        border-radius: 10px;
    }
    .main-content h2{
        color: darkblue;
    }
    .main-content img{
        max-width: 100%;
        height: auto;
    }
    .active {
        color: red;
        font-weight: bold;
    }

</style>