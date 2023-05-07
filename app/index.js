const Generator = require('yeoman-generator')
const pathList = require('./generate-path')

module.exports = class extends Generator {
  writing () {
    this.answers = { name: this.appname }
    pathList.forEach(item => {
      this.fs.copyTpl(
          this.templatePath(item),
          this.destinationPath(item),
          this.answers
      )
    })
  }
}