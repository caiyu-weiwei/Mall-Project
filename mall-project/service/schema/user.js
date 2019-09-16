// 引入mongoose
const mongoose = require('mongoose')
// 声明Schema
const Schema =  mongoose.Schema
// 声明Object类型
let ObjectId = Schema.Types.ObjectId
// 创建用户Schema
const userSchema = new Schema({
  userId: ObjectId,
  userName: {unique: true, type: String},
  password: String,
  createAt: {type: Date, default: Date.now()},
  lastLoginAt: {type: Date, default: Date.now()}
})

// 发布模型
mongoose.model('User', userSchema)
