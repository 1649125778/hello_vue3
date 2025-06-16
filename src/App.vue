<template>
    <Person a= "哈哈" :list = 'personList'/>
</template>

<script lang="ts" setup name = "App">
    import Person from './components/Person.vue'
    import { reactive} from 'vue' 
    // 引入 Person 组件
    import { type PersonInter, type Persons } from '@/types'
    let personList = reactive<Persons>( [
        {
            name: '张三',
            age: 18,
            tel: 15525,
            x: 10,
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
    ])

</script>

<style scoped>
    .app{
        background-color: aquamarine;
        box-sizing: 10px;
        border-radius: 10px;
        padding: 20px;
    }

</style>