<template>
    <div class="person">
        <h1>姓名：{{ person.name }}</h1>
        <h2>年龄：{{ person.age }}</h2>
        <h2 v-for="(value,key) in person.car">汽车：{{ value }}</h2>

        <br>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeC3">修改第三台车</button>
        <button @click="changeCar">修改全部车辆</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { reactive,watch } from 'vue';

    //数据
    let person = reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马',
            c3:'劳斯莱斯'
        }
    })
    //方法
    function changeName(){
        person.name += '~'

    }
    function changeAge(){
        person.age += 1
    }
    function changeC1(){
        person.car.c1 = '车1'
    }
    function changeC2(){
        person.car.c2 = '车2'
    }
     function changeC3(){
        person.car.c3 = '车3'
    }
    function changeCar(){
        person.car = {c1:'1',c2:'2',c3:'3'}
    }

    //监视 情况四：监视响应式对象中的某个属性，且该属性为基本类型，要写成函数式
    // watch(
    //     // ()=>{return person.name} 下面为简写
    //     ()=> person.name,
    //     (newValue,oldValue)=>{
    //         console.log('person改变',newValue,oldValue)
    //     }
    // )
    // watch(
    //     // ()=>{return person.age} 下面为简写
    //     ()=> person.age,
    //     (newValue,oldValue)=>{
    //         console.log('person改变',newValue,oldValue)
    //     }
    // )
    // 情况四：监视响应式对象中的某个属性，且该属性为基本类型，可以写成函数式,更推荐写函数
    //监视的要是对象中的基本类型属性，最好写函数式
    //如果是对象监视的是地址值，并且需要关注的是对象内部，需要手动开启深度监视
    watch(
        ()=>person.car,
        (newValue,oldValue)=>{
            console.log('person改变',newValue,oldValue)
        },
        {deep:true}
    )


    // //监视 情况五:监视上述多个数据
    // watch([()=>person.name,()=>person.car],(newValue,oldValue)=>{
    //     console.log('person改变',newValue,oldValue)
    // },{deep:true})
</script>

<style>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }


</style>