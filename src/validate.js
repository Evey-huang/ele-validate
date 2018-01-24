/**
 * 正则库
 */
const pattern = {
  name: /^([\w-]+|[\u4e00-\u9fa5]+)$/, // 用户名校验
  passWord: /^\w+$/ // 密码校验
}

/**
 * 内置规则
 * @param {String} reg - {pattern}中预定义正则名称 or 自定义正则
 * @param {String} msg1 - 正则校验不通过提示
 * @param {String} msg2 - 值为空时提示（可不填）
 */
const validate = (reg, msg1, msg2) => {
  return (rule, value, callback) => {
    if (!value) {
      if (!msg2) {
        callback()
      }
      callback(new Error(msg2))
    }
    reg = pattern[reg] ? pattern[reg] : reg
    if (!reg.test(value)) {
      callback(new Error(msg1))
    } else {
      callback()
    }
  }
}

export default validate
