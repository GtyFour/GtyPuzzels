# 基于Blockly-3.20200625.2版本重构了MatataCode使用的Blockly编程界面，使结构更清晰，并能够进行优化编译

原Blockly程序因为制作的较为着急，导致对项目理解不透彻，且版本陈旧（2018Q3版本）
故，为了减少Matatalab(App)的工作量，重做了整个Blockly项目，并整理了相关文档
https://codeload.github.com/google/blockly/zip/3.20200625.2


## 多语言/本地化
精简了多语言文本，只保留15种支持语言，后续小语种应保持谨慎添加的状态


### 语言列表
[简体中文]：zh-hans
[繁体中文]：zh-hant
[英语]：en
[德语]：de
[俄语]：ru
[乌克兰语]：uk
[韩语]：ko
[日语]：ja
[法语]：fr
[意大利语]：it
[泰语]：th
[土耳其语]：tr
[葡萄牙语]：pt/pt-pt
[葡萄牙语(巴西)]：pt-br
[西班牙语]：es


## 使用了新的ClosureCompiler包
版本号closure-compiler-v20200830.jar
https://repo1.maven.org/maven2/com/google/javascript/closure-compiler/v20200830/closure-compiler-v20200830.jar

## 页面结构
index.html--主页页
page_main/index.html--最简编译页面，在该文件夹下编译
page_code/index.html--编程页面，App实际调用的页面
page_test/index.html--测试页面，可以查看生成的Python程序和快捷调试多语言


## 编译指令
在page_main目录里执行:$ java -jar closure-compiler.jar --js='main.js'   --js='../blocks/**.js'   --js='../core/**.js'   --js='../generators/**.js'   --generate_exports   --externs ../externs/svg-externs.js   --compilation_level SIMPLE_OPTIMIZATIONS   --dependency_mode=PRUNE --entry_point=Main   --js_output_file main_compressed.js

## 发布用脚本
根目录执行:$ python packup_page_code.py
则会产出带版本号的zip压缩包

## 待做事项
1、块的邮件菜单定制
2、灯环块的重做（美化）
