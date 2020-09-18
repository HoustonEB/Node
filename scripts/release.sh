#!/bin/sh
:<<!
1.变量设置为只读属性
readonly name
2.unset删除变量
unset name
3.单引号不支持变量,用变量使用双引号.
!

name="张三"
release_branch=$1
backend_branch=$2

if [ -z "$1" -o -z "$2" ]
then
    echo "请指定前端分支和后端分支"
    exit 1
fi

if [ -f "./config.sh" ]
then
    source ./config.sh # 引用文件
    echo "前端发版仓库: ${frontend_release_repo}"
    echo "后端发版仓库: ${backend_release_repo}"
    echo 发版日期: `date`
fi
# echo '按下 <CTRL-D> 退出'
# echo -n '输入你最喜欢的网站名: '
# while read FILM
# do
#     echo "是的！$FILM 是一个好网站"
# done

# echo '输入 1 到 4 之间的数字:'
# echo '你输入的数字为:'
# read aNum
# case $aNum in
#     1)  echo '你选择了 1'
#     ;;
#     2)  echo '你选择了 2'
#     ;;
#     3)  echo '你选择了 3'
#     ;;
#     4)  echo '你选择了 4'
#     ;;
#     *)  echo '你没有输入 1 到 4 之间的数字'
#     ;;
# esac

echo "my name is ${name}"
echo '拼接' ${name} '字符串'
echo "执行的文件名: $0"
echo "参数个数 $#"
echo "参数一: $1"
echo "参数二: $2"

