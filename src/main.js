import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import axios from 'axios'
import config from './config'
import App from './App.vue'


axios.get(config.mockApi+'/login').then((res)=>{
    console.log(res)
})
const app = createApp(App)
app.use(ElementPlus).use(router).mount('#app')

// console.log(import.meta.env)