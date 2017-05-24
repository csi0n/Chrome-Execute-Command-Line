## 背景
其实很久以前就发现了[you-get](https://github.com/soimort/you-get)这个神器，可以获取绝大部分视频网站的h5地址，作用很明显，可以去广告，并且使用h5可以节省CPU资源，于是就想着制作一个Chrome插件调用命令行去执行一些命令，但是Google看了很多资料都无法完成这种操作（一般都是使用原生的应用，使用scoket进行交互），于是自己理了下思路，完成了如下的插件。
## 原理
![](http://img.csi0n.com//2017-05-25/592601fe1b1d91495663102.png)
## 安装方法
Chrome中输入```chrome://extensions/```拖入crx即可
还需要配合[Chrome-Command-Line-Serve](https://github.com/csi0n/Chrome-Command-Line-Serve)使用。使用方法```python3 main.py```
## 使用
在选项中定义一条命令行如图:
![](http://img.csi0n.com//2017-05-25/592603d42a20e1495663572.png)
菜单中会自动生成相应的菜单，*注意$url在执行命令时会被替换成当前的url*,
图上的命令会自动使用you-get打开播放器播放当前地址的视频。
##相关项目地址
[Chrome插件 Chrome-Execute-Command-Line](https://github.com/csi0n/Chrome-Execute-Command-Line)
[Python 脚本Chrome-Command-Line-Serve](https://github.com/csi0n/Chrome-Command-Line-Serve)


