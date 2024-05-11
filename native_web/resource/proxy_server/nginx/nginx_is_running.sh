#!/bin/bash

pid_file="/home/shecannotsee/Desktop/projects/native_web/resource/proxy_server/nginx/logs/nginx.pid"

if [ -e "$pid_file" ]; then
  echo "Nginx is running!"
else
  echo "Nginx is not running."
fi
