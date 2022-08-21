/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: `https://www.fastmock.site/mock/f9d9602f630d771457ec86272c0c9232/api`
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: `https://www.fastmock.site/mock/f9d9602f630d771457ec86272c0c9232/api`
    },
    prod: {
        baseApi: '//future.com/api',
        mockApi: `https://www.fastmock.site/mock/f9d9602f630d771457ec86272c0c9232/api`
    }
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}