/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: ''
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: ''
    },
    prod: {
        baseApi: '//future.com/api',
        mock: ''
    }
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}