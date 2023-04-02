# REST

## defintion

REST: REpresentational State Transfer

## feature

    - 服务器只返回数据
    - 服务器和客户端传输数据时通常使用JSON数据格式

## express

    express可以在node快速搭建一个web服务器

    安装：npm i express   安装成功后即可获取express

## nodemon

nodemon 开启后修改代码时服务器会自动重启

1. 全局安装
   安装：npm i nodemon -g
   卸载：npm r nodemon -g
   启动：nodemon （不加 path 默认 index.js，否则需要在其后加上 path，例如./xxx.js，不需要加双引号）
   退出：Ctrl + c
2. 项目安装（开发依赖）
   安装：npm i nodemon -D
   卸载：npm r nodemon -D
   启动：npx nodemon （path 和全局的规则一致）
   退出：Ctrl + c

补充：可以在 package.js 的 scripts 中添加："start":"npx nodemon"，这样在终端执行 npm start 即可执行启动命令了

## methods

    GET      加载数据
    POST     新建或添加数据
    PUT      添加或修改数据
    DELETE   删除数据
    PATCH    修改数据
    OPTION   由浏览器自动发送，检查请求的一些权限

## router

    Router是express中创建的一个对象
    在index.js中新建 const router = express.Router()
    router实际上是一个中间件，可以在其上绑定各种路由或中间件，需要app.use(router)来使其生效（app是express的一个实例对象）

    建立一个routers文件夹，用来存放各个路由，例如user.js，例子详见Router视频15:00
    通过module.exports导出router，在index.js中require相应的router，调用app.use()使得路由生效即可。
    app.use()的第一个参数可以指定一个path，例如"/user"，这样路径就以/user为根目录进行访问
