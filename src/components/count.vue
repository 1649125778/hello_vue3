<template>
    <div class="count">
        <h2>计数器</h2>
        <h2>{{ school }}---学校大写：{{ upperSchool }} ---- {{ address }}</h2>
        <p>当前计数: {{ sum }} -- 最大值为10 </p>
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
import { storeToRefs } from 'pinia';
//引入useCountStore
import { useCountStore } from '@/store/Count'
//使用useCountStore，得到一个专门保存store的变量
const countStore = useCountStore()
//storeToRefs只会关注store中的数据，不会对方法进行ref包裹
let {sum,school,address,bigSum,upperSchool} = storeToRefs(countStore)
let number = ref(1)

// 定义增加函数
function increment(){
    //第一种修改方式
    // countstore.sum += number.value
    // console.log(`增加了 ${number.value}，当前计数: ${countstore.sum}`);
    // 这里可以添加其他逻辑，比如发送请求等 

    //第二种修改方式
    // countstore.$patch({
    //     sum: countstore.sum + number.value,
    //     school: '新学校',
    //     address: '新地址'
    // })

    //第三种修改方式
    countStore.increment(number.value)
    console.log(`增加了 ${number.value}，当前计数: ${countStore.sum}`);

}

// 定义减少函数
function decrement(){
    countStore.sum  -= number.value
    console.log(`减少了 ${number.value}，当前计数: ${countStore.sum}`);
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