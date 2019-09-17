const fs = require('fs')

fs.readFile('./data_json/goods.json', 'utf8', (err, data) => {
  let newData = JSON.parse(data)
  let newPush = []
  newData.RECORDS.map(value => {
    if (value.IMAGE1) {
      newPush.push(value)
    }
  })

  fs.writeFile('./data_json/newGoods.json', JSON.stringify(newPush), (err, data) => {
    if (err) {
      console.log('写文件操作失败！')
    } else {
      console.log('写文件操作成功！')
    }
  })
})