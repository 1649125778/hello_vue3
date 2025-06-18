<template>
    <div class="detail">
        <h2>{{ route.params.id }}</h2>
        <h2>{{ route.params.title }}</h2>
        <h2>{{ route.params.content }}</h2>
        <img src="../assets/about.jpg" alt="关于我们图片">
    </div>
</template>

<script lang="ts" setup name="Detail">
    import { useRoute } from 'vue-router';
    import { toRefs } from 'vue';
    const route = useRoute();
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