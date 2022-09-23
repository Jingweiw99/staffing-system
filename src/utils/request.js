/**
 * 二次封装axios
 */

import axios from 'axios'
import config from '../config'

import { ElMessage } from 'element-plus'
import router from '../router'

const TOKEN_ERROR = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试一下'

//创建axios实例对象 添加配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
})

// 请求的拦截

service.interceptors.request.use((req) => {
    // 一些公共的请求机制
    const header = req.headers

    if (!header.Authorization) header.AuAuthorization = 'wangjingwei'
    return req
})

service.interceptors.response.use((res) => {
    // 一些公共的响应机制
    const { code, data, msg } = res.data
    if (code === 200) {
        return data
    } else if (code === 400001) {
        ElMessage.error(TOKEN_ERROR)
        setTimeout(() => {
            router.push("/login")
        }, 1000)
        return Promise.reject(TOKEN_ERROR)
    } else {
        // 服务器错误
        ElMessage.error(NETWORK_ERROR)
        return Promise.reject(NETWORK_ERROR)
    }

})

// 核心的request函数
function request(options) {
    options.method = options.method || "get"
    if (options.method.toLowerCase() === 'get') {
        // 统一属性是data
        options.params = options.data
    }

    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
    }
    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request