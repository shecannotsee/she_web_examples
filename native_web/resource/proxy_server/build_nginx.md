#### download

nginx:https://nginx.org/download/nginx-1.24.0.tar.gz

openssl:https://www.openssl.org/source/old/1.1.0/openssl-1.1.0l.tar.gz

zlib:https://github.com/madler/zlib/archive/refs/tags/v1.2.11.tar.gz



#### build

reference:https://shecannotsee.github.io/nginx-usage-deployment.html

```bash
./configure \
	--prefix=/home/shecannotsee/Desktop/projects/native_web/resource/proxy_server/nginx \
	--with-http_ssl_module \
	--with-openssl=/home/shecannotsee/Desktop/projects/native_web/resource/proxy_server/openssl-1.1.0l \
	--with-zlib=/home/shecannotsee/Desktop/projects/native_web/resource/proxy_server/zlib-1.2.11
make -j8
make install
```

