<template>
    <div class="count">
        <h2>计数器</h2>
        <p>当前计数: {{ sum }}</p>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
    </div>
</template>

<script lang="ts" setup name="Count">
import { ref } from 'vue';
// 使用 ref 创建响应式变量
let sum = ref(1);
let number = ref(1);

// 定义增加函数
function increment(){
    sum.value += number.value
    console.log(`增加了 ${number.value}，当前计数: ${sum.value}`);
    // 这里可以添加其他逻辑，比如发送请求等 
}

// 定义减少函数
function decrement(){
    sum.value -= number.value
    console.log(`减少了 ${number.value}，当前计数: ${sum.value}`);
    // 这里可以添加其他逻辑，比如发送请求等
}


</script>

<style scoped>
.count {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}
</style>