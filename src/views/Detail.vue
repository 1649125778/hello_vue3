<template>
    <div class="detail">
        <h2>{{ route.query.id }}</h2>
        <h2>{{ route.query.title }}</h2>
        <h2>{{ route.query.content }}</h2>
        <img src="../assets/about.jpg" alt="关于我们图片">
    </div>
</template>

<script lang="ts" setup name="Detail">
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';
const route = useRoute();
let {query} = toRefs(route);
console.log("路由参数:", route.query);
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