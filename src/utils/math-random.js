/**
 * 选定区间，生成区间内随机数
 * @param {Number} min 区间开始数字
 * @param {Number} max 区间结束数字
 */
export default function (min, max) {
  const target = Math.random() * (max - min + 1) + min
  return Math.floor(target)
}
