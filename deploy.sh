#!/usr/bin/env bash

# 错误时退出脚本
set -e

# 显示执行的命令
set -x

# 构建网站
npm run build

cd static

git init
# git remote add origin git@github.com:lifelikejuly/Web_CloudDesktop.git
git checkout main
git add .
git commit -m 'deploy: update site content'
git push -f git@github.com:JulyYuStudio/CloudPhone.git