<template>
    <div class="detail">
        <h2>{{ id }}</h2>
        <h2>{{ title }}</h2>
        <h2>{{ content }}</h2>
        <img src="../assets/about.jpg" alt="关于我们图片">
    </div>
</template>

<script lang="ts" setup name="Detail">
   
//    路由规则的props配置
 defineProps(['id', 'title', 'content']);

</script>

<style scoped>
    .detail {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    .detail img {
        width: 100px;
        height: auto;
        border-radius: 10px;
    }
</style>