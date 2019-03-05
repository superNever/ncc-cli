### NCC-CLI

```$xslt
  _   _    ____    ____            ____   _       ___
 | \ | |  / ___|  / ___|          / ___| | |     |_ _|
 |  \| | | |     | |      _____  | |     | |      | |
 | |\  | | |___  | |___  |_____| | |___  | |___   | |
 |_| \_|  \____|  \____|          \____| |_____| |___|

Usage: ncc <command>

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  init|i         初始化
  add|a          填加自定义模板
  list|l         展示所有模板
  delete|d       删除模板
```

### ncc i

> 在src目录中运行`ncc i`,输入业务节点名称，例如我想创建hrwa的wapayment
模块的paydata代码，那我应该输入`hrwa/wapayment/paydata`，然后选择自己需要的模板

![image]('./docs/init.gif')

### ncc a
> 新增加自定义模板，目前只支持http(s)://xxx.com地址，后期会加入本地缓存文件

![image]('./docs/add.gif')

### ncc l
> 展示所有模板信息

![image]('./docs/list.gif')

### ncc d
> 删除指定模板，内置两个模板不允许删除

![image]('./docs/del.gif')



