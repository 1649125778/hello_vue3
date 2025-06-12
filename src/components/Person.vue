<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
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
    let person = ref({
        name:'zhangsan',
        age: 18
    })
    //方法
    function changeName(){
        person.value.name += '~'
    }
    function changeAge(){
        person.value.age += 1
    }
    function changePerson(){
        person.value = {name:'李四',age:45}
    }
    // 监视 监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启
    // watch 第一个参数：监视对象 第二个参数:回调函数 第三个参数：配置对象
    watch(person,(newValue,oldValue)=>{
        console.log('newValue:',newValue,'oldValue:',oldValue)

    },{deep:true,immediate:true})
    
    // deep 深度监听 监听的属性为对象
    // immediate 加载时执行
    // watch的补充
    // watchEffect  不需要明确监视，谁在回调函数里面使用了,就监视谁 （加载时执行）
</script>

<style>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }


</style>