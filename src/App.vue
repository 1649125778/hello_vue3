<template>
    <h2 ref="title2">你好</h2>
     <button @click="showTag">点击输出h2标签</button>
    <Person/>
</template>

<script lang="ts" setup name = "App">
    import Person from './components/Person.vue'
    import  {ref} from 'vue'

    let title2 = ref()

    function showTag(){
        console.log(title2.value)
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