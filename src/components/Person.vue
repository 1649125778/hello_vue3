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
        data(){
            return {
                name: '张三',
                age: 18,
                gender: '男',
                tel: '1234567890'
            }
        },
        methods: {
            changeName(){
                this.name = "李四"
            },
            changeAge(){
                this.age += 1
            },
            showTel() {
                alert(`电话号码是：${this.tel}`)
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