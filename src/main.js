import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import axios from 'axios'
import config from './config'
import request from './utils/request'
import App from './App.vue'

const app = createApp(App)
// axios
app.config.globalProperties.$request = request
// axios.get(config.mockApi + '/login').then((res) => {
//     console.log(res)
// })



app.use(ElementPlus).use(router).mount('#app')

// console.log(import.meta.env)