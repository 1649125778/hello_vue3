<template>
    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
   </div>
</template>

<script setup lang="ts" name="Person">
    import { ref, computed, reactive ,toRefs} from 'vue';

    let person = reactive({
        name: '张三',
        age: 30
    })

    // toRefs将对象中的全部属性取出，并重新生成一个新的响应式对象
    // toRef(person,'age') 对象的单个属性
    let {name,age} = toRefs(person);


    function changeName() {
        name.value += '~~~';
    }

    function changeAge() {
        age.value += 1;
    }


</script>

<style>



</style>