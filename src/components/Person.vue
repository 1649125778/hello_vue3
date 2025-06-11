<template>
    <div class="person">
        <h2>一辆{{car.brand}},价值{{car.price}}，时间是{{car.year}}</h2>
        <button @click="changeBrand">修改类型</button>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改汽车</button>
        <br>

        <h2>{{ sum }}</h2>
        <button @click="calculateSum">计算总和</button>
   </div>
</template>

<!-- 配置组件名
<script lang="ts">
        export default {
        name:'Person',
    }   
</script> -->
<!-- 配置组合式api -->
<script setup lang="ts" name="Person">
import { ref,reactive } from 'vue';
//数据
let car = reactive({brand:'奔驰',price: 100000,year:'2002'})
let sum = ref(0);

//方法
function changeBrand(){
    car.brand = '宝马';
}
function changePrice(){
    car.price += 10000;
}
function changeCar(){
    //使用reaction定义的响应式对象，重新分配对象时，会失去响应式
    //可以使用 Object.assign() 方法来保持响应式
    //将第二个...参数的属性分配到第一个参数中
    Object.assign(car, {brand: '保时捷', price: 1500000, year: '2020'});
    //或者使用ref定义对象
    //写法为 car.value = {brand: '保时捷', price: 1500000, year: '2020'};
}
function calculateSum() {
    sum.value += 1; 
}


</script>

<style>
    .person {
        background-color: aquamarine;
        box-sizing: 10px;
        border-radius: 10px;
        padding: 20px;
    }
    
    .person h2 {
        margin: 0 0 20px;
        color: blue;
    }
    
    .person p {
        font-size: 16px;
    }
    
    .person button {
        margin-top: 10px;
        margin-left: 20px;
        padding: 5px 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .person button:hover {
        background-color: #45a049;
    }
    li {
        list-style: none;
        margin: 5px 0;
    }
</style>