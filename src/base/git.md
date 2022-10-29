---
title: Git入门
---

## Git 是什么？

**Git 是分布式的版本控制系统**。在我们项目开发过程中，往往会遇到这样的问题：

- 在本地编写代码时，一旦你把代码改乱了，或者误删了某些文件，项目难以退回到之前未修改的模样
- 在本地编写代码时，担心项目修改出错，拷贝了许多份项目的副本，随着时间的推移，本地副本越来越多，已经忘记了哪些副本修改了哪些代码

版本控制系统 Git 很好的解决了以上难题，要想使用 Git 进行一些列操作，首先要下载安装最近版本的 Git [Git - Downloads (git-scm.com)](https://git-scm.com/downloads)

## 初次运行 Git 前的配置

安装好 Git 之后，我们需要在本地电脑上进行一些简单的配置，具体配置流程如下：

1. 打开 **Git Bash**，设置你的用户名和邮件地址

   ```bash
   git config --global user.name "your_name"
   git config --global user.email your_email@example.com
   ```

   ::: tip 知识点

   1、Windows 系统安装 Git 之后，在桌面任何位置鼠标右击会出现 **Git Bash Here** 选项，点击使用该命令窗口

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202051930231.png" alt="image-20220205193006177" width="500" />

   2、配置 Git 时你需要注册一个 Github 账户[Join GitHub · GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)（或者是Gitee、Gitlab），其中 user.name 是你 Github 的用户名，user.email 是你注册 Github 使用的邮箱

   3、--global 选项表示为计算机上的每个仓库设置 Git 用户名，如果使用了 --global 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。 当你想为某一个仓库设置不同的用户名，针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 --global 选项的命令来配置

   ```bash
   git config user.name "your_name"
   git config user.email your_email@example.com
   ```

   :::

2. 生成新的 SSH 公钥

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061800953.png" alt="image-20220206180032784" width="600" />

3. 将新的 SSH 公钥添加到 GitHub 帐户中，首先使用以下命令将密钥信息复制到粘贴板：

   :::: code-group

   ::: code-group-item Windows

   ```bash
   clip < ~/.ssh/id_rsa.pub
   ```

   :::

   ::: code-group-item Mac:active

   ```bash
   pbcopy < ~/.ssh/id_rsa.pub
   ```

   :::

   ::: code-group-item Linux

   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

   :::

   ::::

   之后登录 Github 账户，点击账户任何页面右上角个人资料图像 **Setting**，在侧边栏的 **Access** 部分，单击 **SSH and GPS keys**，点击 **New SSH key** 或者 **Add SSH key**，将上面复制的 SSH 公钥粘贴进去，并为该密钥起一个简短的标号 **Title**

   ::: tip

   1、默认情况下，用户的 SSH 密钥存储在其 `~/.ssh` 目录下。 进入该目录并列出其中内容，你便可以快速确认自己是否已拥有密钥：

   ```bash
   # 测试
   wyj_p@DESKTOP-OHURAP1 MINGW32 ~/Desktop
   $cd ~/.ssh
   wyj_p@DESKTOP-OHURAP1 MINGW32 ~/.ssh
   $ ls
   id_rsa  id_rsa.pub  known_hosts
   ```

   2、在“标题” Title 字段中，为 SSH 密钥添加描述性标签， 例如，如果你使用的是个人 Mac，那么你可以将此 Title 命名为“个人电脑Win10”。

   ::: 

   ![image-20220206175714778](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061757920.png)

## 使用 Git 提交本地项目到 Github 仓库

当你对 Git 进行配置，以及拥有了 Github 账户之后，你便可以使用 Git 与 Github 管理你的项目了。试想有一个名为 `CodingLife` 的 Java 项目（只有一个`Test.java`文件），本地存储在名为 CodingLife 的文件夹中，`Test.java` 代码如下所示：

```java
// Test.java
// 项目路径 D:\CodingLife\Test.java
public class Test {
  public static void main(String[] args) {
    System.out.println("编码人生-bmrs.top");
  }
}
```

在编写代码过程中，我们可以使用 Git 结合 Github 仓库来管理该项目，具体流程如下：

1. 创建一个新的 Github 仓库，名字为 project1

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061352994.png" alt="image-20220206135231827" width="600" />

2. 在项目文件下 CodingLife 下打开 Git Bash 窗口，初始化该文件夹，使其成为一个 Git 本地仓库

   ```bash
   git init
   ```

   初始化完成后出现了一个 .git 文件夹，此时我们的 CodingLife 文件夹为**工作区**，.git 文件夹为 **Git 版本库**，Git 版本库中存在两个最重要的内容：**暂存区**（stage，或者叫 index），还有 Git 为我们自动创建的第一个分支 `master`，以及指向 `master` 的一个指针叫`HEAD`，如下图表示

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061537715.png" alt="image-20220206153740544" width="600" />

   使用 `git init` 命令的时候， Git 默认会在 **.git** 版本库中创建一个 `master` 分支 

   ![image-20220206141157951](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061411038.png)

3. 把文件添加到版本库暂存区

   ```bash
   git add .
   ```

   使用命令`git add .`会将工作区的 Test.java 文件添加到暂存区

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061559422.png" alt="image-20220206155904346" width="700" />

4. 把文件添加到版本库 master 分支

   ```bash
   git commit -m "项目CodingLife,版本v1.0,新增了Test.java文件"
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061612595.png" alt="image-20220206161227478" width="700" />

   ::: tip

   `git commit `命令，`-m` 后面输入的是本次提交内容的简单说明，建议输入有意义的内容，方便从历史记录里找到改动记录

   :::

5. 将本地 Git 仓库 CodingLife 和远程 Github 仓库 project1 进行关联

   ```bash
   git remote add origin git@github.com:CodingLifeVV/project1.git
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061941039.png" alt="image-20220206194144959" width="1000" />

   ::: tip

   1、使用 `git remote add origin` 命令会将一个已有的本地仓库和一个 Github 仓库进行关联，关联之后即可以把本地仓库的内容推送到 Github 仓库中，`origin` 是远程的意思，origin 后需要添加你需要关联的Github仓库的地址信息，在你的 Github 仓库 **Code** 下拉选项中，可以选择复制 **SSH key** ，添加到 origin 之后。

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202082159219.png" alt="image-20220208215935104" width="350" />

   2、`git remote add origin` 命令只需要第一次推送到远程库的时候使用，之后在本地库修改完代码上传远程库的时候就不要要使用了。

   :::

6. 把本地仓库的所有内容推送到远程库 project1 的 master 分支上

   ```bash
   git push -u origin master
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202062016970.png" alt="image-20220206201625887" width="1000" />

   ::: tip
   
   注意 origin 后面的 master 有两层含义：
   
   （1）本地仓库有一个 master 分支（前面提过`git init`命令会为我们自动创建一个 master 分支）
   
   （2）告诉 Github 创建一个 master 分支，并与之关联
   
   第一次推送时，需要加上了 `-u` 参数：Git 不但会把本地的 master 分支内容推送的远程新的master 分支，还会把本地的 master 分支和远程的 master 分支关联起来，在以后的推送或者拉取时就可以简化命令。
   
   ```bash
   git push origin master
   ```
   
   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202061812871.png" alt="image-20220206181216793" width="700" />
   
   :::
   
   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202071444265.png" alt="image-20220207144453082" width="800" />
   
   ::: warning
   
    2020年 10 月 1 日之后，Github 将所有新建的仓库的默认主分支从 master 修改为 main
   
   :::

至此，我们完成了使用 Git 与 GitHub 管理项目的简单操作。当我们再次在本地电脑对项目进行修改之后，比如我们修改了 Test.java 的信息：

:::: code-group

::: code-group-item 修改后

```java
public class Test {
  public static void main(String[] args) {
    System.out.println("编码人生-bmrs.top");
    System.out.println("增加一行输出——编码人生-bmrs.top");
  }
}
```

:::

::: code-group-item 修改前

```java
public class Test {
  public static void main(String[] args) {
    System.out.println("编码人生-bmrs.top");
  }
}
```

:::

::::

我们可以使用以下命令查看更改：

```bash
git status
```

如果更改内容无误，只需要使用以下命令便可将更改信息推送到与之关联的 Github 仓库中：

```bash
git add .
git commit -m "Test.java中增加了一句输出语句"
git push origin master
```

<img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202071606125.png" alt="image-20220207160641031" width="700" />

___

参考链接：

- [master分支与主分支的区别](https://stackoverflow.com/questions/65173291/git-push-error-src-refspec-main-does-not-match-any-on-linux)
- [Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
- [Git 官方文档](https://git-scm.com/book/zh/v2)

## <a id="_link_git2">Git 版本回退</a>

有时候，当我们使用 Git 提交本地项目到 Github 仓库之后，发现提交的内容有误，希望恢复项目到之前的版本，此时，Git 版本回退可以帮助我们解决这一问题。

比如我们继续对 CodingLife 项目中的文件 `Test.java` 进行修改并提交到远程库：

:::: code-group

::: code-group-item 修改后

```java
public class Test {
  public static void main(String[] args) {
    System.out.println("增加一行输出——编码人生-bmrs.top");
  }
}
```

:::

::: code-group-item 修改前

```java
public class Test {
  public static void main(String[] args) {
    System.out.println("编码人生-bmrs.top");
    System.out.println("增加一行输出——编码人生-bmrs.top");
  }
}
```

:::

::::

提交到远程库：

```bash
git add .
git commit -m "删除掉Test.java第一句输出语句"
git push origin master
```

等第二天我们发现删除掉了重要的内容，我们希望恢复之前的内容，使用 Git 版本回退可以解决该问题，流程如下：

1. 查看提交日志

   ```bash
   git log
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091145176.png" alt="image-20220209114534068" width="600" />

   ::: info 知识点

   1、`git log` 命令会将提交信息串成一条时间线，这条时间线就是一个分支

   2、`git log` 命令显示从最近到最远的提交日志，我们可以看到 3 次提交，最近的一次版本号是`421b0f...`，上一次版本号是`720e08...`，最早的一次版本号是`2c5ddd...`

   3、每一次提交有一个版本号 ID，是一个 SHA1 计算出来的一个用十六进制表示非常大的数字，上图版本号只是取了前几位数字

   ::: 

   ![image-20220209115143732](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091151916.png)

2. 选择回退的版本，这里选择回退上一个版本（过去版本）

   ```bash
   git reset --hard HEAD^
   # 或者
   git reset --hard 720e08
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091158671.png" alt="image-20220209115811605" width="500" />

   ::: tip

   1、`HEAD` 表示当前版本，`HEAD^` 表示上一个版本，`HEAD^^`表示上上一个版本，以此类推

   2、`--hard` 后面也可加想要回退版本的版本号前几位来回退到具体的版本

   :::

   当版本回退之后，我们在看 Test.java 代码，发现已经回退到了修改前的代码。

   :::: code-group

   ::: code-group-item 回退后

   ```java
   public class Test {
     public static void main(String[] args) {
         System.out.println("编码人生-bmrs.top");
         System.out.println("增加一行输出——编码人生-bmrs.top");
     }
   }
   ```

   :::

   ::: code-group-item 回退前

   ```java
   public class Test {
     public static void main(String[] args) {
       System.out.println("增加一行输出——编码人生-bmrs.top");
     }
   }
   ```

   :::

   ::::

3. 回退未来版本

   ```bash
   git reflog
   ```

   当我们回退到某一个版本之后（我们暂且称其为当前版本），再次使用 `git log` 命令，显示的最近一次的版本号为当前版本，即上图版本号为`720e08...`的版本。如果我们某一天后悔之前使用 git 做的回退操作了，想恢复到版本号为`421b0f...`的版本，却忘记了该版本号，则需要使用`git reflog`命令来查询具体要恢复到哪一个版本对应的版本号

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091534894.png" alt="image-20220209153455801" width="700" />

   `git reflog` 命令会将每一次 git 命令操作记录下来，用来查看历史命令，而 `git log`命令只查看历史提交命令
   
   ![image-20220209174804027](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091748135.png)

## Git 创建与合并分支

在[Git 版本回退](#_link_git2)里，我们知道 Git 会把每一次提交信息串成一条时间线，这条时间线就是一个分支。在 Git 中，创建、合并和删除分支非常快，所以 Git 鼓励我们使用分支完成某些任务，任务完成之后合将内容并到主分支，之后再删掉分支，这和直接在 `master` 分支上工作效果是一样的，但过程更安全。

在 CodingLife 项目下分支的创建合并删除流程如下：

1. 创建分支 dev 并切换到 dev 分支

   ```bash
   git checkout -b dev
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091619065.png" alt="image-20220209161901971" width="600" />

   我们可以看到，创建一个`dev`分支其实是相当于：新建一个指针 `dev`，该指针指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前分支在`dev`上

   ::: info 知识点

   1、以上命令可以拆解成两条命令：

   ```bash
   git branch dev    # 创建 dev 分支
   git checkout dev  # 切换到 dev 分支
   ```

   2、可以查看当前分支情况，"*" 号表示当前分支

   ```bash
   wyj_p@DESKTOP-OHURAP1 MINGW32 /d/CodingLife (dev)
   $ git branch
   * dev
     master
   ```

   :::

2. 在 dev 分支上修改内容并提交

   我们继续对 CodingLife 项目的`Test.java` 文件进行修改（增加一行输出语句），不同的是现在是在 dev 分支上，而不是在 master 分支：

   :::: code-group

   ::: code-group-item 修改后

   ```java
   public class Test {
     public static void main(String[] args) {
         System.out.println("编码人生-bmrs.top");
         System.out.println("增加一行输出——编码人生-bmrs.top");
         System.out.println("dev 分支新写了一行输出代码");
     }
   }
   ```

   :::

   ::: code-group-item 修改前

   ```java
   public class Test {
     public static void main(String[] args) {
       System.out.println("编码人生-bmrs.top");
       System.out.println("增加一行输出——编码人生-bmrs.top");
     }
   }
   ```

   :::

   ::::

   修改之后提交：

   ```bash
   git add .
   git commit -m "dev branch change Test.java"
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091734482.png" alt="image-20220209173413388" width="600" />

   在 dev 分支下查看 `Test.java` 内容：

   ```bash
   $ cat Test.java
   public class Test {
       public static void main(String[] args) {
           System.out.println("编码人生-bmrs.top");
           System.out.println("增加一行输出——编码人生-bmrs.top");
           System.out.println("dev 分支新写了一行输出代码");
       }
   }
   ```

   此时 master 分支的内容停留在了版本号为 `421b0f`位置处，可以切换到 master 分支查看 Test.java 内容:

   ```bash
   git checkout master # 切换到 master 分支
   $ cat Test.java     # 打开 Test.java 文件
   public class Test {
       public static void main(String[] args) {
           System.out.println("编码人生-bmrs.top");
           System.out.println("增加一行输出——编码人生-bmrs.top");
       }
   }
   ```

3. 合并 dev 分支内容到 master 分支

   ```bash
   git checkout master # 切换到 master 分支
   git merge dev       # 将 dev 分支内容合并到 master 分支
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091804532.png" alt="image-20220209180441432" width="700" />

   ![image-20220209175445533](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091754649.png)

4. 合并完成，删除 dev 分支

   ```bash
   git branch -d dev # 删除 dev 分支
   ```

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202091805571.png" alt="image-20220209180558482" width="700" />

## 使用 Git 克隆 Github 仓库项目

使用 Git 不仅可以将我们的本地代码提交到 Github 仓库，同时也可以通过 Git 把 Github 上的项目克隆到本地。我们已经学会了[如何在 Github 上发现优秀的开源项目](#_link_git1)，比如此时你在 Github 上找到了一个好的开源项目，存储库在 **CodingLifeVV/hello-world** 下，克隆该仓库内容流程如下

1. 在本地电脑上新建一个本地存储库，初始化为一个本地仓库

   ```bash
   git init
   ```

2. 进入该存储库文件夹内，使用 `git clone` 命令克隆 Github 仓库内容

   ```bash
   git clone git@github.com:CodingLifeVV/hello-world.git
   ```

   `git clone` 命令后为远程仓库地址：

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202090959495.png" alt="image-20220209095952409" width="400" />

   ![image-20220209095545831](https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/202202090955944.png)



## master 分支内容推送到其他分支

将 master 分支内容推送到其它分支上，以 dev 分支为例，步骤如下：

1. 查看分支日志，记录 master 分支想要推送的版本号

   ```bash
   # 切换到 master 分支
   git checkout master
   # 查看master分支提交日志
   git log
   ```

   提交日志：

   <img src="https://cdn.jsdelivr.net/gh/CodingLifeV/images//docs/image-20220411151632905.png" alt="image-20220411151632905" />

2. 切换到 dev 分支，拉取代码

   ```bash
   # 切换分支
   git checkout dev
   # 拉取代码
   git pull
   ```

3. 将 master 分支内容推送到 dev分支

   ```bash
   git cherry-pick 5f640689ac75a31400a1a7b5f2c208be311e5586
   ```