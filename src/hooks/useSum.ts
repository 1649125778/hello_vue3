import axios from 'axios';
import { ref,reactive,onMounted, computed } from 'vue';

export default function () {

    // 定义一个响应式变量
    const sum = ref(0);
    const doubleSum = computed(()=>{
        return sum.value * 100
    })

    function add() {
        sum.value++;
    }
    onMounted(()=>{
        add()
    })

    // 返回值
    return {
        sum,
        add,
        doubleSum
    }

}

