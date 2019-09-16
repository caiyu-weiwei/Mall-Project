const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init')

// 立即执行函数
// 前端页面脚本压缩可减少脚本数量和脚本大小，为了避免压缩时前一个脚本没有写最后一个分号而导致压缩后脚本不能使用，所以要在开始加一个分号
;(async () => {
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  let oneUser = new User({userName: 'caiweiwei', password: '123456'})
  oneUser.save()
         .then(() => {
           console.log('插入一条用户信息，插入成功！')
         })
  
})()
