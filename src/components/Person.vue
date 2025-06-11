<template>
    <div class="person">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <p>性别：{{ gender }}</p>
        <button @click = "changeName">修改名字</button>
        <button @click = "changeAge">修改名字</button>
        <button @click = "showTel">展示电话号码</button>
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

    import { ref } from 'vue';

    // 在 Vue 3 中，setup 函数是一个新的组件选项，用于定义组件的状态和方法。
    // 在 setup 函数中，我们可以使用 Composition API 来创建响应式数据和方法。
    // 这里我们使用 TypeScript 来定义类型。
      //vue3开始弱化this的使用， this的值是undefined
            //使用setup函数来定义组件的状态和方法
            // 这样定义的数据都不是响应式数据
            let name = ref("张三")
            let age= ref(18)
            let gender = "男"
            let tel= 123548966

            //方法
            function changeName() {
                name.value = "李四"
                console.log("修改名字为：", name.value);
            }
            function changeAge() {
                age.value += 1
                console.log("修改年龄为：", age.value);
            }
            function showTel() {
                alert("电话号码是：" + tel);
            }


</script>

<style>
    .person {
        background-color: aquamarine;
        box-sizing: 10px;
        border-radius: 10px;
        padding: 20px;
    }
    
    .person h1 {
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
</style>