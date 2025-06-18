<template>
    <div class="news">
        <h2>新闻</h2>
        <ul>
            <li v-for="item in newsItems" :key="item.id">
                <!-- parms第一种写法 -->
                 <!-- <RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">
                    {{ item.title }}
                </RouterLink>  -->
               
                <!-- parms第二种写法 -->
                 <RouterLink :to="{
                    name: 'detail',
                    params:{
                        id: item.id,
                        title: item.title,
                        content: item.content   
                    }
                 }">
                 {{ item.title }}
                 </RouterLink>
            </li>
        </ul>
    </div>
    <!-- 展示区 -->
     <div class="news-content">
        <RouterView></RouterView>
     </div>

</template>

<script lang="ts" setup name="News">
import { reactive, ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
const newsItems = reactive([
    { id: 1, title: '新闻标题 1' ,content:'新闻内容 1'},
    { id: 2, title: '新闻标题 2' ,content:'新闻内容 2'},
    { id: 3, title: '新闻标题 3' ,content:'新闻内容 3'},
]);
</script>

<style scoped>
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
    div {
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
    }
    .news {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    ul {
        /* list-style-type: none; */
        padding: 0;
    }
    li {
        padding: 10px;
        border-bottom: 1px solid #ccc;
       
    }
    li::marker{
        color: #bf2a2a;
        font-weight: bold;
    }
    .news-content {
        margin-top: 20px;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
    }
    .news-content h2 {
        color: darkblue;
    }
</style>