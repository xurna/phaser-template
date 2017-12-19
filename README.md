## 项目目录
```
.
├── README.md
├── dist //打包上线文件
│   ├── css
│   │   └── css.min.css  
│   ├── images
│   │   └── phaser.png
│   ├── index.html
│   └── js
│       ├── app.min.js
│       └── phaser.min.js
├── gulpfile.js  //gulp配置文件
├── package.json
├── static  //开发目录
│   ├── app //js处理
│   │   ├── config //公共模块
│   │   │   ├── config.js
│   │   │   └── element.js
│   │   ├── game.js 
│   │   ├── main.js //游戏入口
│   │   └── states  //游戏场景
│   │       ├── boot.js //启动场景 
│   │       ├── play.js //游戏逻辑处理场景
│   │       └── preload.js //预加载场景
│   ├── css
│   │   └── css.css
│   ├── html
│   │   └── index.html
│   ├── images
│   │   └── phaser.png
│   └── js
│       └── phaser.min.js
├── webpack.config.js  //开发webpack配置文件
├── webpack.production.config.js  //上线部署webpack配置文件
└── yarn.lock
```

## 准备工作
1. 安装依赖
```
yarn 或 npm install
```
## 开发
1. 启动监听js文件
```
npm run start
```
2. 在webpack.config.js中查看监听端口，打开页面：`localhost:3001/static/html/index.html`，若在手机端打开，需要在package.json文件的“start”中修改 `--host 你的电脑ip`，这样就可以在手机中打开页面:`http://ip:3001/static/html/index.html`

## 部署上线/测试
1. 打包js文件
```
npm run build
``` 
2. 打包css和img文件
```
gulp build
```
3. 打包好的文件在dist对应的目录下，上线的时候只需要将dist传到服务器即可。







