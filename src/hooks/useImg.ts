import axios from 'axios';
import { ref,reactive,onMounted } from 'vue';

export default function (){
let dogList = reactive([
    "src/assets/微信图片_20241105190418.jpg",

])
// 
async function addImg() {
    try {
         let res = await axios.get('https://dog.ceo/api/breeds/image/random');
    // console.log(res.data.message);
    // 将获取到的图片地址添加到 dogList 中
    dogList.push(res.data.message);
    } catch (error) {
        alert('获取图片失败，请稍后再试！'+error);
    }
   
}
//钩子
onMounted(async () => {
    let result = await axios.get('https://dog.ceo/api/breeds/image/random')
    dogList.push(result.data.message);
})
// 向外部提供东西
return {
    dogList,
    addImg
}
}
