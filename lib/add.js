/**
 * Created by wanghongxiang on 2019/2/28.
 */
const chalk = require('chalk');
const clear = require('clear');
const config = require('../template/config.json');
const fs = require('fs');
const path = require('path')
const list = require('./list')
const {createGetTemlQuestion, coverOrNot, fsSpecialFile} = require('./utils')
module.exports = () => {
    console.log(
        chalk.bgMagenta('新增模板：\n')
    )
    const addNewTempl = (staticPath,name, path, config) => {
        Object.assign(config, {
            [name]: path
        })
        fsSpecialFile(staticPath, JSON.stringify(config), 'utf-8', (err) => {
            if (err) console.log(err);
            console.log(chalk.green('新模板已添加!\n'));
            list()
            console.log('\n');
            process.exit();
        })
    }
    createGetTemlQuestion().then(res => {
        let staticPath = path.join(__dirname, '/../template/config.json')
        if (res.name in config) {
            coverOrNot().then(obj => {
                if (!obj.flag) {
                    process.exit();
                }
                addNewTempl(staticPath, res.name, res.path, config)
            });
            return
        }
        addNewTempl(staticPath, res.name, res.path, config)
    })
};