import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'
 export const useLovePattleStore = defineStore(
    'loveTake',
    {
        actions:{
            async getTalk(){
                 // 模拟从服务器获取新的爱的絮叨
                await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
                    .then(response => {
                        // 假设返回的数据是一个数组
                        this.prattles.unshift({id:nanoid(),content: response.data.content});
                    })
                    .catch(error => {
                        console.error("获取爱的絮叨失败:", error);
                    });
                 }
        },
        //真正存储数据的地方
        state(){
            return {
               prattles:[
                    { id: '1', content: "在这个组件中，我们可以自由地表达对生活的热爱。" },
                    { id: '2', content: "每一次更新都是对生活的重新诠释。" },
                    { id: '3', content: "爱的絮叨是我们对生活的热情表达。" },
                    { id: '4', content: "生活中的每一个小细节都值得我们去珍惜。" },
                    { id: '5', content: "爱的絮叨让我们感受到生活的美好。" }
               ]
            }
        }
    }
)

// export default useCountStore