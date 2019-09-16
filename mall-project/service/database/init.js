/**
 * 用作数据库连接以及初始化
 */
const mongoose = require('mongoose')
const db = 'mongodb://localhost/mall-db'

exports.connect = () => {
  // 链接数据库
  mongoose.connect(db)
  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {

    // 添加数据库连接事件监听
    mongoose.connection.on('disconnected', () => {
      console.log('**************数据库断开**************')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject()
        throw new Error('数据库出现问题，程序无法搞定，请人为修复......')
      }
    })

    // 数据库连接出错时
    mongoose.connection.on('error', err => {
      console.log('****************数据库错误******************')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject(err)
      }
    })

    mongoose.connection.once('open', () => {
      console.log('MongoDB connected successfully')
      resolve()
    })

  })

}