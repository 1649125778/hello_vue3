<template>
    <div class="love-prattle">
        <h2>爱的絮叨</h2>
        <hr>
        <button @click="addLovePrattle">添加絮叨</button>
        <p>
            <ul>
                <li v-for="item in pattleStore.prattles" :key="item.id" class="prattle-item">
                    {{ item.content }}
                </li>
            </ul>
        </p>
        
    </div>
</template>

<script lang="ts" setup name="LovePrattle">
import { ref } from 'vue';
// axios 是一个基于 Promise 的 HTTP 库，用于浏览器和 node.js
//默认暴露 不需要加{} 
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useLovePattleStore } from '@/store/LovePattle';


const pattleStore = useLovePattleStore()

// 定义添加爱的絮叨函数
async function addLovePrattle() {
    // 模拟从服务器获取新的爱的絮叨
    await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        .then(response => {
            // 假设返回的数据是一个数组
            pattleStore.prattles.unshift({id:nanoid(),content: response.data.content});
        })
        .catch(error => {
            console.error("获取爱的絮叨失败:", error);
        });
}

</script>

<style scoped>
.love-prattle {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}
.love-prattle h2 {
    font-size: 2em;
    margin-bottom: 0.5em;
}
.love-prattle p {
    font-size: 1.2em;
    line-height: 1.6;
}
.love-prattle button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}   
.love-prattle button:hover {
    background-color: #45a049;
}
.love-prattle .prattle-item {
    list-style-type: none;
    margin: 10px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.love-prattle .prattle-item:hover {
    background-color: #f1f1f1;
}
.love-prattle hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #ccc;
}
.love-prattle ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.love-prattle li {
    margin: 10px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.love-prattle li:hover {
    background-color: #f1f1f1;
}

</style>