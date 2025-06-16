
<template>
    <div class="person">
        <ul>
            <li v-for="item in x.list" :key="item.name">
                {{ item.name }}--{{ item.age }} -- {{ item.tel }}
            </li>
        </ul>
       
    </div>
</template>

<script setup lang="ts" name="Person">

import { defineProps } from 'vue';

let x = defineProps(['list'])
console.log("接受的list",x.list)


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