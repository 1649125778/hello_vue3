<template>
    <div class="person">
        <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改全部</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref, computed, reactive ,toRefs,watch, watchEffect} from 'vue';

    //数据
    let person = reactive({
        name:'zhangsan',
        age: 18
    })
    //方法
    function changeName(){
        person.name += '~'
    }
    function changeAge(){
        person.age += 1
    }
    function changePerson(){
        Object.assign(person,{name:'李四',age:45})  
    }
    //监视 情况三 监视[reaction] 定义的【对象类型】 数据直接使用即可，自动开启深度监测
    watch(person,(newValue,oldValue)=>{
        console.log('person变化',newValue,oldValue)
    },{immediate:true})
</script>

<style>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }


</style>