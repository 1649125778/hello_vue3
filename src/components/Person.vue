
<template>
    <div class="person">
        <h1>测试1</h1>
        <h2 ref="title2">测试2</h2>
        <h3>测试3</h3>
        <button @click="showTag">点击输出h2标签</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref,defineExpose} from 'vue';
    
    //创建一个title2，用于存储ref标记的内容
    let title2 = ref()
    
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    //方法
    function showTag(){
        console.log(title2.value)

    }

    //返回ref组件实例
    defineExpose({a,b,c})


</script>

<!-- scoped 局部样式 只能选择当前页面的 .person -->
<style scoped>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        background:bisque;
        margin: 10px;
    }


</style>