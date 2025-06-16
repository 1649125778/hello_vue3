
<template>
    <div class="person">
       
    </div>
</template>

<script setup lang="ts" name="Person">
import { type PersonInter, type Persons } from '@/types'
    // 引入 PersonInter 接口
    let person: PersonInter = {
        name: '张三',
        age: 18,
        tel: 15525
    }

    let persons: Persons = [
        {
            name: '张三',
            age: 18,
            tel: 15525
        },
        {
            name: '李四',
            age: 20,
            tel: 15526
        },
        {
            name: '王五',
            age: 22,
            tel: 15527
        }
    ]


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