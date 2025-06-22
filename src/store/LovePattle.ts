import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'
//  export const useLovePattleStore = defineStore(
//     'loveTake',
//     {
//         actions:{
//             async getTalk(){
//                  // 模拟从服务器获取新的爱的絮叨
//                 await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//                     .then(response => {
//                         // 假设返回的数据是一个数组
//                         this.prattles.unshift({id:nanoid(),content: response.data.content});
//                     })
//                     .catch(error => {
//                         console.error("获取爱的絮叨失败:", error);
//                     });
//                  }
//         },
//         //真正存储数据的地方
//         state(){
//             return {
//                prattles:JSON.parse(localStorage.getItem("prattles") as string ) || []
//             }
//         }
//     }
// )
import { reactive } from 'vue'

export const useLovePattleStore = defineStore(
    'loveTake',()=>{
        const prattles = reactive(JSON.parse(localStorage.getItem("prattles") as string ) || []);

        async function getTalk(){
            await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
                    .then((response: { data: { content: any; }; }) => {
                        // 假设返回的数据是一个数组
                        prattles.unshift({id:nanoid(),content: response.data.content});
                    })
                    .catch((error: any) => {
                        console.error("获取爱的絮叨失败:", error);
                    });
                 }
            return {prattles,getTalk}
        }
       


)


// export default useCountStore