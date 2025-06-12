<template>
    <div class="person">
        姓：<input type="text" v-model="firstName">
        <br>
        名：<input type="text" v-model="lastName">
        <br>    
        <button @click="changeFullName">修改全名</button>
        <br>
        全名：<span>{{ fullName }}</span>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref, computed, reactive ,toRefs} from 'vue';
    let firstName = ref('zhang')
    let lastName = ref('san')

    // 计算属性   有缓存(使用多次但是只调用一次) 只读
    // let fullName = computed(()=>{

    //     return firtName.value.slice(0,1).toUpperCase+firtName.value.slice(1)+'---'+lastName.value
    // })
    //定义可读可写的computed 计算属性
    let fullName = computed({
        
      get(){
        console.log(firstName.value.slice(0,1).toUpperCase)
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
      },
      set(val){
        console.log('set',val)
        const [str1,str2] = val.split('-')
        console.log(str1,str2)
        firstName.value = str1
        lastName.value = str2
    }
        

    })
    function changeFullName(){
        fullName.value = '123-123'
    }

</script>

<style>
    .person{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }


</style>