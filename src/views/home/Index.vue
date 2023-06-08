<template>
  <div class="home-page">
    <div class="btn" @click="getMoney">
      <ul>
        <li>财运</li>
        <li>汇聚</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {

    }
  },
  methods: {
    getMoney () {
      this.$router.push({
        path: '/detail'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.home-page{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .btn{
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 16px 0px rgba(37, 46, 65, 0.08);;
    ul{
      line-height: 28px;
      li{
        color: #FFF;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
</style>
