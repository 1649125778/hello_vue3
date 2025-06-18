<template>
    <div class="detail">
        <h2>关于我们</h2>
        <p>这是一个关于我们的页面。</p>
        <img src="../assets/about.jpg" alt="关于我们图片">
    </div>
</template>

<script lang="ts" setup name="Detail">
import { defineProps } from 'vue';

const props = defineProps<{
    title: string;
    content: string;
}>();
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