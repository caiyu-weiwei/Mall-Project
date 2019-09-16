/**
 * 用作数据库连接以及初始化
 */
const mongoose = require('mongoose')
const db = 'mongodb://localhost/mall-db'

// glob：node的glob模块允许你使用 * 等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则文件。
const glob = require('glob')

// resolve: 将一系列路径或路径段解析为绝对路径。
const { resolve } = require('path')

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

// 使用了glob.sync同步引入所有的schema文件，然后用forEach的方法require（引入）进来。这比你一条条引入要优雅的多。
exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}