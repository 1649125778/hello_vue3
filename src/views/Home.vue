<template>
    <div class="home">
        <img src="../assets/home.jpg" alt="">
        <h2>Home</h2>
    </div>

</template>

<script lang="ts" setup  name="Home">
// 五秒后跳转到新闻页面
import { onMounted } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
onMounted(()=>{
    setTimeout(()=>{
        router.push({name:'xinwen'})
    },3000)
})

</script>

<style scoped>
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
    div {
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
    }
    .home {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }
</style>