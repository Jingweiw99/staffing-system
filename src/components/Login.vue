<script>
export default {
  name: 'login',
  methods: {
    goHome() {
      this.$router.push("/welcome")
    }
  },
  mounted() {
    this.$request({
      method:'get',
      url:'/login',
      data:{
        name:'wangjingwei',
      },
    }).then((res)=>{
      console.log(res)
    })
  }
}
</script>

<template>
  <div>
    <h1>登录页面</h1>
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<style scoped>
</style>
