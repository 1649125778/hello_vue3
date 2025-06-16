<template>
    <h2 ref="title2">你好</h2>
     <button @click="showTag">点击输出h2标签</button>
    <!-- 测试ref属性添加在组件上 -->
    <Person ref = "ceshiren"/>
</template>

<script lang="ts" setup name = "App">
    import Person from './components/Person.vue'
    import  {ref} from 'vue'

    let title2 = ref()
    let ren = ref()

    function showTag(){
        console.log("title2",title2.value)
        // 输出person的组件实例
        console.log("Person",ren.value)
    }


</script>

<style scoped>
    .app{
        background-color: aquamarine;
        box-sizing: 10px;
        border-radius: 10px;
        padding: 20px;
    }

</style>