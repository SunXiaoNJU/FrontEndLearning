# ejs

## process

    1. 安装ejs：
        npm install ejs
    2. 配置express的模板引擎为ejs：
        app.set("view engine", "ejs")
    3. 创建一个view文件夹，文件后缀为.ejs
        当作HTML来写就行了
    4. express渲染模板引擎：
        res.render("views中路径名", {})
        可以将一个对象作为render的第二个参数传递，在模板中可以访问到对象中的数据
        <%=数据名%> 其中=会自动将内容进行转义，避免xss攻击（cross site script attack 跨站脚本攻击）
        <%-数据名%> 直接将内容输出
        <%JS代码%> 可以直接在其中编写JS代码，js代码会在服务器中执行
