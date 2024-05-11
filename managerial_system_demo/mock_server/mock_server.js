const cors = require('cors');
const http = require('http');
const fs = require('fs');

function readJsonFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    const obj = JSON.parse(data);
    return obj;
  } catch (err) {
    throw err;
  }
};

// 创建服务器
const server = http.createServer((req, res) => {
  // 为了解决跨域并且解决重复发送的问题这样使用
  cors()(req, res, () => {
    // 请求处理逻辑
    console.log("server in");
    // 设置响应头，允许来自任意源的跨域请求
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // 设置响应头
    res.setHeader('Content-Type', 'application/json')

    // 读取mock数据,url是路径,data是数据
    const login = readJsonFile("./data/login.json");
    const user = readJsonFile("./data/getUser.json");
    const projectInfo = readJsonFile("./data/getProjectInfo.json");
    const applicationCount = readJsonFile("./data/getApplicationCount.json");

    console.log("Request:", req.method, req.url, "HTTP", req.httpVersion); // 查看 req 对象的内容
    // 根据请求路径返回不同的 mock 数据
    // url:/login
    /*z*/if (req.url === login.url) {
      const ret = login;
      res.statusCode = 200;
      res.write(JSON.stringify(ret));
      res.end();
      console.log("Response:", res.length); // 打印 res 对象的内容
    }
    // url:/manage/getUser
    else if (req.url === user.url) {
      const ret = user.data;
      res.statusCode = 200;
      res.write(JSON.stringify(ret));
      res.end();
    }
    // url:/manage/getProjectInfo
    else if (req.url === projectInfo.url) {
      const ret = projectInfo;
      res.statusCode = 200;
      res.write(JSON.stringify(ret));
      res.end();
      console.log("Response:", res.length); // 打印 res 对象的内容
    }
    // url:/manage/getApplicationCount
    else if (req.url === applicationCount.url) {
      const ret = applicationCount;
      res.statusCode = 200;
      res.write(JSON.stringify(ret));
      res.end();
      console.log("Response:", res.length); // 打印 res 对象的内容
    }
    // url:其他
    else {
      res.statusCode = 404;
      res.end(JSON.stringify({message: 'mock server:Not found'}));
    }
  });// cors
});

// 启动服务器并监听指定端口
const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
