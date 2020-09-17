#!/bin/sh
if [ -z "$1" ]
then
  echo "需要指定提交信息"
  exit 1
fi
commitInfo=$1
echo "commit info: ${commitInfo}"
git add .
git commit -m "${commitInfo}"
