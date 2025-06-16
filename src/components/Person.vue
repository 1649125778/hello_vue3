<!-- 监视总结
    可是使用ref或者reaction来定义响应式对象，watch函数来监测定义的对象变化
    ref：定义基本类型的数据 使用watch()可以直接监视
        定义对象类型的数据 监视的对象的地址值的变化（旧对象 => 新对象）如果想监测对象类型数据中的基本类型数据 需要手动开启深度监视
    reactive: 定义对象类型的数据 默认开始深度监视
            如果需要监视对象中的基本类型，则需要写成函数式（（）=> person.name）  因为watch第一个参数可以是【ref对象】，【一个函数，返回一个值】，【一个响应式对象（reactive）】，【以上组成的数组】
            如果是多个组成的函数 [()=>基本类型，对象类型] 需要开启深度监视， vue中对象监视仅采用浅层监视（只监视对象的地址值变化，不监视对象中的内部属性变化），
            
            特性	        对象/数组（引用类型）	  基本类型（值类型）
            默认监视行为	 仅检测引用变化	           检测值变化
            { deep: true }	递归监视内部属性变化	  ❌ 无效，被忽略
            典型使用场景	 嵌套对象、数组元素变化	   独立值变化（如计数器、开关状态）

            [()=>基本类型，对象类型]   监听的是对象类型的地址值 如果点击修改 则替换为新的地址值，无法监听


-->
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
    // watch(
    //     ()=>person.car,
    //     (newValue,oldValue)=>{
    //         console.log('person改变',newValue,oldValue)
    //     },
    //     {deep:true}
    // )


    // //监视 情况五:监视上述多个数据   如果使用person.car 而不是()=>person.car 比较的是地址值，所以不触发 但是使用函数式则会创建一个新的地址 ，所有会被监测到
    watch([()=>person.name,()=>person.car],(newValue,oldValue)=>{
        console.log('person改变',newValue===oldValue,newValue,oldValue)
    },{deep:true,immediate:true})
</script>

<style>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }


</style>