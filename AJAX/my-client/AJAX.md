# AJAX

## Definition

    A 异步 J JavaScript A and X xml
    通过js向服务器发送请求来加载数据。
    xml是早期Ajax使用的数据格式，目前都使用JSON

## CORS（跨域资源共享）

    跨域检查：协议 域名 端口号  当我们通过AJAX去发送跨域请求时，浏览器为了服务器的安全，会阻止JS读取到服务器的数据
    报错：has been blocked by CORS policy: NO "Access-Control-Allow-Origin" header
    解决方案：在服务器中设置一个允许跨域的头
    例如：res.setHeader("Access-Control-Allow-Origin", url)
    Access-Control-Allow-Origin  允许的请求地址     "*"表示全部允许，指定的话只能设置一个，如果多个可以存放在数组中动态设置
    Access-Control-Allow-Methods 允许的请求方式     第二个参数是方法名，例如:"GET,POST"
    Access-Control-Allow-Headers 允许传递的请求头    例如:"Content-type"

## 可选方案

    1. XMLHTTPRequest (xhr) 已经不怎么用了
    2. Fetch
    3. Axios 主要
