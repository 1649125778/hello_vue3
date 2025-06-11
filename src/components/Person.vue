<template>
    <div class="person">
        <h2>一辆{{car.brand}},价值{{car.price}}，时间是{{car.year}}</h2>
        <button @click="changePrice">修改价格</button>

        <br>

        <ul>
            <li v-for=" g in games" :key="g.name">{{ g.name }},{{ g.type }}</li>
        </ul>
        <button @click = 'changeGamesName'>修改第一个游戏名字</button>
        <br>
        <h2>嵌套对象的值：{{ a.a.b.c }}</h2>
        <button @click="changeANestedValue">修改嵌套对象的值</button>
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
import { reactive } from 'vue';
//数据
let car = reactive({brand:'奔驰',price: 100000,year:'2002'})
let games = reactive(
    [
        {name: '王者荣耀', type: 'MOBA'},
        {name: '和平精英', type: '射击'},
        {name: '原神', type: '冒险'}

    ]
)
let a = reactive({
    a:{
        b: {
            c: 1
        }
    }
})
console.log(car);

//方法
function changePrice(){
    car.price += 10000;
}
function changeGamesName(){
    games[0].name = '三国杀'
}
function changeANestedValue() {
    a.a.b.c += 1;
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