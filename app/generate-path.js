// nodejs 递归遍历文件
const fs = require('fs')
const path = require('path')

function deep(dir) {
  let _list = []
  const arr = fs.readdirSync(path.join(__dirname, dir))
  arr.forEach(item => {
    const itemPath = path.join(__dirname, dir + item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      const temp = dir + item + '/'
      _list = _list.concat(deep(temp))
    } else {
      _list.push(path.join(dir, item))
    }
  })
  return _list
}

let list = deep('./templates/')
list = list.map(i => i.replace('templates/', ''))

module.exports = list
