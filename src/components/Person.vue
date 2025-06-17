
<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}, 当前求和 * 100 为：{{ doubleSum }}</h2>
        <button @click="add">添加</button>
        <hr>
        <img v-for="(item, index) in dogList" :key="index" :src="item" alt="">
        <br>
        <button @click="addImg">添加图片</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import useSum from '@/hooks/useSum';
import useImg from '@/hooks/useImg';

const { sum, add, doubleSum } = useSum();
const { dogList, addImg } = useImg();

</script>

<!-- scoped 局部样式 只能选择当前页面的 .person -->
<style scoped>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        background:bisque;
        margin: 10px;
    }
    img{
        width: 100px;
        margin-right: 10px;
    }


</style>