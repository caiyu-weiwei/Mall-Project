/**
 * 用作数据库连接以及初始化
 */
const mongoose = require('mongoose')
const db = 'mongodb://localhost/mall-db'

exports.connect = () => {
  // 链接数据库
  mongoose.connect(db)

  // 添加数据库连接事件监听
  mongoose.connection.on('disconnected', () => {
    mongoose.connect(db)
  })

  // 数据库连接出错时
  mongoose.connection.on('error', err => {
    console.log('err', err)
    mongoose.connect(db)
  })

  mongoose.connection.once('open', () => {
    console.log('MongoDB connected successfully')
  })

}