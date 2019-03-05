/**
 * Created by wanghongxiang on 2019/2/28.
 */
const path = require('path')
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const inquirer = require('inquirer');
const config = require('../template/config.json')
const Utils = require('./utils')
const list = require('./list')

module.exports = () => {
    clear()
    Utils.createDelTemlQuestion().then(res => {
        console.log(res.templName)
        delete config[res.templName]
        let staticPath = path.join(__dirname, '/../template/config.json')
        Utils.fsSpecialFile(staticPath, JSON.stringify(config), 'utf-8', (err) => {
            if (err) console.log(err);
            console.log(chalk.green('新模板已添加!\n'));
            list()
            console.log('\n');
            process.exit();
        })
    })
}