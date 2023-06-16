/* 如果直接将数据发送给客户端会有数据安全问题，所以我们必须对数据进行加密，加密后再发送给客户端保存。
在node中，可以直接使用jsonwebtoken这个包来对数据进行加密：https://www.npmjs.com/search?q=jsonwebtoken
jsonwebtoken(jwt) -> 通过对JSON加密后，生成一个web中使用的令牌。
使用步骤：安装、引入、使用（注意：token是在服务器中使用的）
*/

// 引入jwt
const jwt = require("jsonwebtoken");

const obj = {
  name: "sunxiao",
  age: 20,
  gender: "man",
};

// 使用jwt对json对象加密，sign的三个参数：加密对象（string|object|Buffer）、密钥、配置
const token = jwt.sign(obj, "asdfqwert", {
  // 设置过期时间
  expiresIn: "1h",
});

console.log(token);

try {
  // 服务端收到客户端的token后需要解密，verify主要两个参数：token、密钥
  const decodeToken = jwt.verify(token, "asdfqwert");
  console.log(decodeToken);
} catch (error) {
  // token解码失败
  console.error("token已经失效了");
}
