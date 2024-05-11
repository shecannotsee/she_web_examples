### 总体概览

#### 0.环境搭建

在ubuntu22.04下下载nodejs18.16.0LTS.tar.gz

解压后找到`node-v18.16.0-linux-x64/bin`，将其添加到用户系统中便于操作即可

```bash
echo 'export PATH=........./node-v18.16.0-linux-x64/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```



#### 1.搭建项目

```bash
npm init vue@latest
> managerial_system_demo
> ...
```

#### 2.安装包依赖

```bash
npm install
```

#### 3.调试模式启用

```
npm run dev
```

#### 4.打包项目用于部署

```
npm run build
```

#### 5.nginx使用

下载nginx源码并编译[过程略]

运行

```bash
# 使用指定目录的配置文件进行运行
./sbin/nginx -c ./conf/nginx.conf
```

nginx.conf 内容如下

```nginx
worker_processes  1;



events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    keepalive_timeout  65;


    server {
        # 监听端口为8088
        listen       8088;
        server_name  localhost;
		
        # 代理的静态资源路径如下配置
        location / {
            root   /home/shecannotsee/desktop/vue_project/managerial_system_demo/dist;
            try_files $uri $uri/ /index.html;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

}

```





#### 6.开发环境 : 

使用vscode + 插件Volar



### 开始开发

#### 0.项目依赖库

```bash
# 路由库
npm install vue-router
```



#### 1.添加额外的库

```bash
# 组件库
npm install ant-design-vue --save
# http库
npm install axios
```

