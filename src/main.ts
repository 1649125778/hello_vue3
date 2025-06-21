import {createApp} from 'vue'
import App from './App.vue'

//引入pinia
import { createPinia} from 'pinia'
//创建pinia
const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
