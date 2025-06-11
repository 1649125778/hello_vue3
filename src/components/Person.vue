<template>
    <div class="person">
        <h1>你好啊</h1>
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <p>性别：{{ gender }}</p>
        <button @click = "changeName">修改名字</button>
        <button @click = "changeAge">修改名字</button>
        <button @click = "showTel">展示电话号码</button>
    </div>
</template>


<script lang="ts">
        export default {
        name:'Person',
        //setup函数
        setup(){
            //vue3开始弱化this的使用， this的值是undefined
            //使用setup函数来定义组件的状态和方法
            // 这样定义的数据都不是响应式数据
            let name = "张三"
            let age= 18
            let gender = "男"
            let tel= 123548966

            //方法
            function changeName() {
                name  = "李四"
                console.log("修改名字为：", name);
            }
            function changeAge() {
                age += 1
                console.log("修改年龄为：", age);
            }
            function showTel() {
                alert("电话号码是：" + tel);
            }
            //返回
            return {
                name,
                age,
                gender,
                changeName,
                changeAge,
                showTel
            }

        }
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