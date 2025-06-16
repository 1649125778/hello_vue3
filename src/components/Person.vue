
<template>
    <div class="person">
        <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
        <h2>当前水位：{{ temp }}℃</h2>
        <h2>当前水位：{{ height }}cm</h2>
        <button @click="addTemp">水位+10</button>
        <button @click="addHeight">水温+10</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref,reactive,watch, watchEffect } from 'vue';
    //数据
    let temp = ref(0)
    let height = ref(0)
    //方法
    function addTemp(){
        temp.value += 10
    }
    function addHeight(){
        height.value += 10
    }
    //监视 watchEffect 立即运行一个函数 ，同时响应式的追踪其依赖，并在依赖时重新执行该函数  不需要指出监视那些数据
    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80){
            console.log('向服务器发送请求')
        }
    })


</script>

<style>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }


</style>