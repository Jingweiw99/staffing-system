<template>
  <div class="basic-layout">
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user-info">admin</div>

      </div>
      <div class="wrapper">
        <div class="main-page">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "home",

}
</script>

<style lang="scss" scoped>
.basic-layout {
  position: relative;

  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
  }

  .content-right {
    margin-right: 200px;

    .nav-top {
      height: 50px;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }

    .wrapper {
      background-color: #eef0f3;
      padding: 20px;

      height:calc(100vh-50px) .main-page {
        height: 100%;
        background: #fff;
      }
    }
  }
}
</style>
