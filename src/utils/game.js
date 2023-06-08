import random from './math-random'
/**
 * 快乐8 <根据传入的len生成中奖数组>
 * @param {Number} len 选几玩法
 */
export const happyEight = (len) => {
  if (len <= 0) {
    throw new Error('抱歉，暂不支持该玩法')
  }
  if (len > 11) {
    throw new Error('理性购彩')
  }

  const min = 1
  const max = 80
  const prizeArr = []
  while (prizeArr.length < len) {
    const singleBall = random(min, max)
    _setBall(prizeArr, singleBall)
  }
  return prizeArr.sort((a, b) => a - b)
}

/**
 * 双色球<根据传入的前后区长度，生成中奖数组>
 * @param {Number} frontLen 前区长度
 * @param {Number} backLen 后区长度
 *
*/
export const duotoneBall = (frontLen, backLen) => {
  if (frontLen < 6 || backLen < 1) {
    throw new Error('抱歉，暂不支持该玩法')
  }
  if (frontLen > 7 || backLen > 2) {
    throw new Error('请理性购彩')
  }
  const frontPrizeArr = []
  const backPrizeArr = []
  const frontMax = 33
  const frontMin = 1
  const backMax = 16
  const backMin = 1

  while (frontPrizeArr.length < frontLen) {
    const singleBall = random(frontMin, frontMax)
    _setBall(frontPrizeArr, singleBall)
  }
  while (backPrizeArr.length < backLen) {
    const singleBall = random(backMin, backMax)
    _setBall(backPrizeArr, singleBall)
  }
  return {
    frontPrizeArr: frontPrizeArr.sort((a, b) => a - b),
    backPrizeArr: backPrizeArr.sort((a, b) => a - b)
  }
}

/**
 * 设置中奖球
 * @param {Array} arr 中奖数组
 * @param {*} ball 当前球
 * @param {*} setBack 是否放回
 */
function _setBall (arr, ball, setBack = false) {
  if (setBack) {
    arr.push(ball)
  } else {
    if (!arr.includes(ball)) {
      arr.push(ball)
    }
  }
}
