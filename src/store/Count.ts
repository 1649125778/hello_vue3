import {defineStore} from 'pinia'

 export const useCountStore = defineStore(
    'count',
    {
        //actions里面放置的是一个一个的方法
        // 用于相应组件中的"动作"
        actions:{
            increment(value: number){
                console.log("actions",value);
                // 修改数据(this是当前的store 这个为useCountStore)
                //常用逻辑
                //组件逻辑的复用
                if(this.sum < 10){
                    this.sum += value
                };
                if(this.sum >= 10){
                    this.sum = 10
                }
                
            }

        },
        //真正存储数据的地方
        state(){
            return {
                sum: 6,
                school:"xuexiao",
                address:"位置信息"
            }
        },
        getters:{
            bigSum(state):number{
                return state.sum * 10
            },
            upperSchool():string{
                return this.school.toUpperCase();
            }
        }
    }
)

// export default useCountStore