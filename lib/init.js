/**
 * Created by wanghongxiang on 2019/2/28.
 */
const chalk       = require('chalk');
const path       = require('path');
const clear       = require('clear');
const figlet      = require('figlet');
const inquirer = require('inquirer');
const co = require('co');
const Utils = require('./utils')
module.exports = () => {
    clear()
    console.log(
        chalk.green(
            figlet.textSync('NCC-CLI', { horizontalLayout: 'full' })
        )
    )
    Utils.createQuestion().then(res=> {
        let projectName =  res.filename
        let templName = res.templName
        console.log('projectName', res)
        if (res.useDefault || templName === 'redux') {
            // let projectName = path.join(process.cwd(), res.filename)
            Utils.copyTempl(projectName, templName)
            return
        }
        let gitPath = Utils.getTempInfo(res.templName)
        Utils.gitClone(gitPath, projectName)
    })
}