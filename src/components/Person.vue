
<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.name">
                {{ item.name }}--{{ item.age }} -- {{ item.tel }}
            </li>
        </ul>
       
    </div>
</template>

<script setup lang="ts" name="Person">
import { withDefaults } from 'vue';
import { type Persons} from '@/types'

// 只接受list属性
// defineprops(['a','b'])
// let x = defineProps(['list'])

// defineProps<{list?: Persons}>()

//接受list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{list?: Persons}>(), {
    list: () => [{name: '默认名字', age: 0, tel: 0}] as Persons
})

// console.log("接受的list",x.list)


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