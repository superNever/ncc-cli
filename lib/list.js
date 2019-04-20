/**
 * Created by wanghongxiang on 2019/2/28.
 */
const chalk       = require('chalk');
const clear       = require('clear');
const config = require('../template/config.json')
const Table = require('cli-table');
module.exports = () => {
    clear()
    const table = new Table({ head: ["name", "location"] });
    let arr = []
    for (let i in config) {
        arr.push({
            [i]: config[i]
        })
    }
    table.push(
        ...arr
    );
    console.log(chalk.yellow("模板信息如下：\n"))
    console.log(chalk.green(table.toString()))
    process.exit()
};