/* 已经安装了nodemon，每次执行时在终端输入npx nodemon，开启后代码修改时服务器会自动重启。*/

// 引入express
const express = require("express");
// 获取服务器的实例（对象）
const app = express();

const STU_ARR = [
  { id: "1", name: "Ajax", age: 18, gender: "man" },
  { id: "2", name: "Border", age: 20, gender: "woman" },
  { id: "3", name: "Column", age: 22, gender: "man" },
];

/* 
使用app.use定义一个中间件
	app.use(handlers) 
		handles: (req, res, next) => {}  next()是一个函数，调用后可以触发后续中间件。 
*/
// 解析url请求体的中间件
app.use(express.urlencoded({ extended: true }));
// 解析JSON格式的中间件
app.use(express.json());
// 设置响应头，允许本地5500端口跨域访问
app.use((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
});

/* 
如果希望服务器正常访问，则需要为服务器设置路由，路由可以根据不同的请求方式和请求地址来处理用户的请求
	app.METHOD(path, handlers) METHOD具体内容见REST.md
	path: "/"表示根目录，等价于http://localhost:3000
		"/students"对应一个子目录，等价于http://localhost:3000/students
	handlers: (req, res) => {}
		req(request): 读取用户的请求
		res(response): 发送给客户端的响应信息，可以通过res向客户端返回数据
			res.status() 设置响应状态码
			res.send() 发送数据信息
*/
// 加载全部学生的信息
app.get("/students", (req, res) => {
  // req.query获取到用户输入的值
  console.log("收到students的get请求", req.query);
  // 返回学生信息
  res.send({
    status: "ok",
    data: STU_ARR,
  });
});

// 查询一个学生的信息
// 在路径中以：命名的部分我们称为param，在get请求中它可以被解析为请求参数
app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const stu = STU_ARR.find((item) => item.id === id);
  // 将数据返回
  if (stu)
    res.send({
      status: "ok",
      data: stu,
    });
  else
    res.status(404).send({
      status: "error",
      data: "Not Found",
    });
});

// 添加一个学生的信息
app.post("/students", (req, res) => {
  console.log("收到students的post请求", req.body);
  // 获取学生信息
  const { name, age, gender } = req.body;
  // 创建学生信息
  const newStu = {
    id: +STU_ARR.at(-1).id + 1 + "",
    name,
    age,
    gender,
  };

  // 将学生信息添加到数组
  STU_ARR.push(newStu);

  // 添加成功
  res.send({
    status: "ok",
    data: newStu,
  });
});

// 删除一个学生的信息
app.delete("/students/:id", (req, res) => {
  const id = req.params.id;
  for (const key in STU_ARR) {
    if (STU_ARR[key].id === id) {
      let delStu = STU_ARR[key];
      STU_ARR.splice(key, 1);
      res.send({
        status: "ok",
        data: delStu,
      });
      return;
    }
  }
  // 执行至此，说明学生id不存在
  res.status(403).send({
    status: "error",
    data: "学生id不存在",
  });
});

// 修改学生的信息
app.put("/students", (req, res) => {
  const { id, name, age, gender } = req.body;
  const stu = STU_ARR.find((item) => item.id === id);
  if (stu) {
    stu.name = name;
    stu.age = age;
    stu.gender = gender;
    res.send({
      status: "ok",
      data: stu,
    });
  } else
    res.status(403).send({
      status: "error",
      data: "学生id不存在",
    });
});

// 在所有路由后面配置错误路由
app.use((req, res) => {
  // 只要这个中间件执行，说明上面的路由都没有匹配
  res.status(404).send(`<h1>哎呀！资源不见了~<h1>`);
});

// app.listen(port:number, callback) 启动服务器
// 协议名://ip地址:端口号/路径
// 例如：http://127.0.0.1:3000（这里127.0.0.1可以用localhost来替换，默认为localhost可以省略不写）
app.listen(3000, "127.0.0.1", () => {
  console.log("服务器已启动~");
});
