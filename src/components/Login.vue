<template>
  <div>
    <h1>登录页面</h1>
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    goHome() {
      this.$router.push("/welcome")
    }
  },
  mounted() {
    this.$storage.setItem('user', { name: "张三", age: 18 })
    console.log(this.$storage.getItem('user'))
    this.$storage.clearAll()
    console.log(this.$storage.getItem('user'))
  }
}
</script>


<style lang="scss" scoped>
</style>
