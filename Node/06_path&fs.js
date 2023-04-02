/* 
    path
        - 表示的路径
        - 通过path可以用来获取各种路径
        - 要使用path，需要先对其进行引入
        - 方法：
            path.resolve([...paths]) 用来生成一个绝对路径。
            如果直接调用，则返回当前的工作目录；如果传入一个相对路径，则会自动转换成绝对路径。

    fs（File System）
        - fs帮助node来操作磁盘中的文件
        - readFile异步获取文件  readFileSync同步获取文件
        - 推荐使用node:fs/promises来创建fs
*/
const path = require("path");
// 生成路径时尽量使用path.resolve来生成路径。__dirname指代当前模块所在路径
const thisPath = path.resolve(__dirname, "./06_path&fs.js");
console.log(thisPath);

const fs = require("fs");

// readFileSync同步读取文件
const buffer = fs.readFileSync(thisPath);
console.log(buffer.toString());

// callback异步读取文件
fs.readFile(path.resolve(__dirname, "./06_path&fs.js"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

const fsPromise = require("node:fs/promises");

// promise异步读取文件
fsPromise
  .readFile(path.resolve(__dirname, "./02_promiseLearning.js"))
  .then((buffer) => {
    console.log(buffer.toString());
  })
  .catch((err) => console.error(err));

// async await异步读取文件
(async () => {
  try {
    const buffer = await fsPromise.readFile(
      path.resolve(__dirname, "./02_promiseLearning.js")
    );
    console.log(buffer.toString());
  } catch (error) {
    console.error(error);
  }
})();

/* 
补充fs的一些方法：
    - fs.readFile() 读取文件
    - fs.appendFile() 创建新文件，或将数据添加到已有文件中
    - fs.mkdir() 创建文件
    - fs.rm() 删除文件
    - fs.rename() 重命名文件
    - fs.copyFile() 复制文件
*/
fsPromise.appendFile(thisPath, "// append successfully").then((res) => {
  console.log(res);
});
