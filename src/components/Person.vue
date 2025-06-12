<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="addSum">点击求和加一</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref, computed, reactive ,toRefs,watch} from 'vue';
    //数据
    let sum = ref(0)

    //方法
    function addSum(){
        sum.value += 1
    }
    //监视 情况一：监视【ref】定义的【基本类型】数据
    const stopWatch = watch(sum,(newValue,oldValue)=>{
        console.log('newValue：',newValue,'oldValue',oldValue)
        //停止监视
        if(newValue>=10){
            stopWatch
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