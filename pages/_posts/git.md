---
title: 记在小本本上的 git 操作
layout: page
date: 2017-01-29
tags:
  - code
---

标签： git

查看 git 配置信息

```git
$ git config --list
or
$ git config -l
```

设置 git 配置信息 

<!--more-->

 *  全局设置

 ```shell
 $ git config --global user.name "{{userName}}"
 $ git config --global user.email "{{userEmail}}"
 ```
 * 修改当前项目的 git 配置信息

 ```shell
 $ ls -a
 $ cd .git/
 $ vi config
 add
 [user]
    name = {{userName}}
    email = {{userEmail}}

 or
 $ git config user.name "{{userName}}"
 $ git config user.email "{{userEmail}}"
 ```

查看分支

```shell
$ git branch 查看本地分支
$ git branch -r 查看远程分支
$ git branch -a 查看所有分支
```

创建一个新分支

```shell
$ git checkout -b {{branch}}
```

切换分支

```shell
$ git checkout {{branch}}

$ git checkout -b {{remoteBranch}} origin/{{remoteBranch}}
```

删除分支

```shell
$ git branch -D {{loaclBranch}}
$ git push --delete origin {{remoteBranch}}
```

合并分支

```
$ git merge {{branch}} 将 branch 与当前分支合并
```

储藏修改

```shell
$ git stash 当你想切换到其他分支又不想提交现在修改的东西时，当你在修改好前想 git pull 时，用 git stash 来得到一个干净的工作目录

$ git stash save '' 给你的 stash 取个名字

$ git stash pop 重新应用储藏内容

$ git stash list 查看现有储藏列表

$ git stash apply stash@{number} 应用某次储藏，但未从栈上移除，需继续 git stash drop stash@{number} (I like pop!
```

查看提交历史

```shell
$ git log

$ git log -p  查看每次提交的内容差异

$ git log -p -2 显示最近的两次更新
```

查看 commit head message

```shell
$ git reflog
```

打 tag

```shell
$ git tag {{tagName}}
$ git push origin {{tagName}}
or
$ git push --tags
```

删除 tag

```shell
$ git tag -d {{localTag}}

$ git tag -d {{remoteTag}}
$ git push origin :refs/tags/{{remoteTag}}
```

给一个历史提交添加 tag

```shell
// Set the HEAD to the old commit that we want to tag
$ git checkout {{leading 7 chars of commit}}

// temporarily set the date to the date of the HEAD commit, and add the tag
$ GIT_COMMITTER_DATE="$(git show --format=%aD | head -1)" git tag -a {{tag}} -m "{{commit message}}"

// set HEAD back to whatever you want it to be
$ git checkout master

$ git push --tags
```

push 后发现没加 .gitignore，删除本地及远程的冗余提交

```shell
$ git rm -r --cached .
$ git add .
$ git commit -m "{{commit message}}"
$ git push
```

修改已经 commit 的邮箱和用户名

```shell
// get the commit we want to modify
$ git log

// go to the commit
$ git reset --soft {{commitId}}

$ git commit --amend --author='{{userName}}<{{userEmail}}>'
$ git push
```

修改已经 push 的 commit 的邮箱和用户名

```shell
// clone a new repo
git clone --bare https://github.com/user/repo.git
cd repo.git
```

```shell
// copy the script below and modify the variables: OLD_EMAIL, CORRECT_NAME, CORRECT_EMAIL

#! /bin/sh

git filter-branch --env-filter '

OLD_EMAIL=""
CORRECT_NAME="Your Correct Name"
CORRECT_EMAIL="your-correct-email@example.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

```

```shell
// then press enter to run the script

// checkout if there any error in new git and push
$ git push --force --tags origin 'refs/heads/*'

// delete the temporary clone
$ cd ..
$ rm -rf repo.git
```

修改已经 push 的 commit message

```shell
方法一:
$ git commit --amend
$ git push --force

方法二:
$ git rebase -i HEAD~n

change the `pick` to `reword`, which means edit the commit message

save and exit and then update the commit message as you like and :wq

$ git push --f
```


修改已经 push 的提交内容

```shell
git reset --hard {{commitId}}

git add .

git commit --amend

git push origin HEAD --force
```


解决提交前的 conflict，协同工作必备

```shell
// 先不提交修改的内容直接创建新分支 temp ，若已 commit 则创建新分支后在本分支 reset 到上一个 commit ,再执行 git pull

$ git checkout -b temp

$ git add .

$ git commit -m 'commit message'

// 此时的master 分支是干净的，无自己的提交
$ git checkout master

// 拉取远程修改
$ git pull

// 复制刚刚提交的 commit-id  commit-a, 将自己的提交 cherry-pick 进去
$ git cherry-pick commit-a

// 如果有冲突 fix it
$ git add .

$ git cherry-pick --continue

// then push
$ git push
```

git 删除远程仓库的某次错误提交

```shell
$ git reset --hard HEAD~1

$ git push --force
// git push -f

// 强制推送到远程仓库，远程仓库里的错误提交也会消失
```

  * 需注意，其实这种方法仅适用于删除最新的一次提交，如果某次错误提交后又有了一个新的提交，则强制删除错误提交会导致后面的提交也消失，因此需慎用此方法，尤其是在多人协作项目上(°ー°〃)

gerrit merge 前执行 git commit --amend 改写上次提交，并将 gerrit 上的 changeid 加入到上次提交的 commit message 下面（上下各空一行），再 git push（还是原来的 commit，不产生新的提交）

bash ctrl＋R 快速查看输入过的命令

git 创建仓库并关联到 github
```bash
  * cd 到项目目录，git init 初始化，使 git 对此项目进行版本控制
  * git add .
  * git commit -m ''
  * 在 github 上创建一个新仓库 create a new repository
  * 将本地项目关联到建立的新仓库上 git remote add origin {{url}}
  * 运行 $ git remote -v 查看 origin 关联
  * git push -u origin master
  * 若本地已有代码非空, 则直接 git remote add origin {{url}}
  * git push -u origin master
  * 若将一个 git 仓库关联为另一个 git 仓库,则 ls -a 删除 .git/ 文件夹即可
    删除 git 版本控制, 然后再执行 remote
```
  

Github Pages 发布静态页面
  * repository-Settings-Github Pages-select a source and save
