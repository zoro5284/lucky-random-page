<template>

 <div class="detail-page">
    <div class="happy-eight-wrap">
        <p class="mp18">选5复式</p>
        <p class="mp8">
            <span v-for="ball in choose5" :key="ball">
                {{ ball }}
            </span>
        </p>
        <p class="mp18">选6复式</p>
        <p class="mp8">
            <span v-for="ball in choose7" :key="ball">
                {{ ball }}
            </span>
        </p>
        <p class="mp18">选3 打两倍</p>
        <p class="mp8">
            <span v-for="ball in choose3" :key="ball">
                {{ ball }}
            </span>
        </p>
        <p class="mp18">选2 打两倍</p>
        <p class="mp8">
            <span v-for="ball in choose2" :key="ball">
                {{ ball }}
            </span>
        </p>

    </div>

 </div>
</template>

<script>
import { happyEight, duotoneBall } from '@/utils/game'
export default {
  name: 'Detail',
  data () {
    return {
      duotoneBallList: [],
      choose10: [],
      choose7: [],
      choose5: [],
      choose3: [],
      choose2: []
    }
  },
  created () {
    try {
      this.duotoneBallList.push(duotoneBall(6, 1))
      this.choose10 = happyEight(10)
      this.choose5 = happyEight(6)
      this.choose7 = happyEight(7)
      this.choose3 = happyEight(3)
      this.choose2 = happyEight(2)
    } catch (error) {
      alert(error.message)
    }
  },
  methods: {
    sort (arr) {
      return arr.sort((a, b) => a - b)
    }
  }
}
</script>

<style lang='less' scoped>
.detail-page{
    font-size: 16px;
    span{
        margin-left: 8px;
    }
}
.mp18{
    margin-top: 18px;
}
.mp8{
    margin-top: 8px;
}

</style>
