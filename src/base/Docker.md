---
title: Docker入门
order: 3
copyright: false
footer: MIT Licensed  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备2022028662号-1</a> | Copyright © 2022-present <a href="https://github.com/CodingLifeVV" target="_blank">CodingLifeVV</a> </p> 内容创作不易，引用请注明出处，网站已备案，切勿侵权
---


### 初识 Docker

::: tip Docker 使用场景

试想有这样一个案例：

我们在公司研发了一个 APP，程序员在自己的电脑上搭建了一套环境开始写代码，写完之后如释重负，把代码交给了测试人员测试，测试人员又开始从头到尾搭建环境之后在进行测试。测试完成之后，测试人员又将代码交给运维人员，运维在从头到尾搭建环境，最终才可上线。然而，在反复搭建环境的过程中，往往会出现一系列“在别人的电脑上可以运行的，我的却不行”诸如此类的问题，使用 Docker 容器技术可以完美解决以上问题

:::

Docker 是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，并发布和应用到任意平台中。通过 Docker 可以轻松屏蔽环境差异，程序员只需要将自己的代码、开发环境、配置文件等内容使用 Docker 打包到一个容器中，测试和运维人员无需在进行环境搭建，拿来即用，真正做到“build once, run everywhere”

Docker 使用客户端-服务器架构, Docker 客户端与 Docker daemon （Docker 守护进程）对话，后者负责构建、运行和分发 Docker 容器。Docker 客户端和 Docker daemon 可以在同一系统上运行，或者也可以将 Docker 客户端连接到远程 Docker daemon。Docker 中有几个重要的概念：

1. 镜像（`Image`）：类似于虚拟机中的镜像，是一个包含有文件系统的面向 Docker 引擎的只读模板。可以简单理解为一个镜像即是一个可执行程序。

2. 容器（`Container`）：类似于运行起来的进程，可以将其看作一个极简的 Linux 系统环境以及运行在其中的应用程序，有了“可执行程序” image 之后，将其加载到内存开始执行，即是所谓的 container。Docker 引擎利用容器来运行、隔离各个应用。容器是镜像创建的应用实例，可以创建、启动、停止、删除容器，各个容器之间是是相互隔离的，互不影响。

3. 仓库（`Registry`）：类似于远程代码仓库，这里是镜像的仓库，是 Docker 用来集中存放镜像文件的地方。

4. `Dockerfile`：是一个用来构建镜像 image 的文本文件。如果写程序需要源代码，那么写 image 就需要 dockerfile，dockerfile 就是 image 的源代码。

   ![image-20220210151652293](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202101516523.png)

当我们对 Docker 有了一个初步的认识之后，便可以使用 Docker 来执行构建、运行容器等操作。

### Docker 安装与原理再探

Docker可以安装在 Windows、Linux、Mac 等各个平台上，以 CentOS 为例，要在 CentOS 上开始使用 Docker 引擎，请确保满足**先决条件**：CentOS 版本要求 CentOS 7 或者 CentOS 8，然后在安装 Docker，更多安装方式可移步官方参考[Install Docker Engine | Docker Documentation](https://docs.docker.com/engine/install/)，Linux 终端 CentOS 下安装 Docker 步骤如下：

1. 确定 CentOS 版本，要求CentOS 7 或者 CentOS 8

   ```bash
   [root@VM-24-11-centos ~]# cat /etc/os-release
   NAME="CentOS Linux"
   VERSION="8 (Core)"
   ```

2. 卸载旧版本 Docker

   ```bash
   sudo yum remove docker \
                     docker-client \
                     docker-client-latest \
                     docker-common \
                     docker-latest \
                     docker-latest-logrotate \
                     docker-logrotate \
                     docker-engine
   ```

3. 安装`yum-utils`软件包

   ```bash
   sudo yum install -y yum-utils
   ```

4. 设置镜像的仓库，推荐使用国内阿里云仓库

   ```bash
   # 国内,推荐使用
   sudo yum-config-manager \
       --add-repo \
       https://download.docker.com/linux/centos/docker-ce.repo
       
   # 国外
   sudo yum-config-manager \
       --add-repo \
       https://download.docker.com/linux/centos/docker-ce.repo
   ```

5. 安装 Docker 社区版 `docker-ce`

   ```bash
   sudo yum install docker-ce docker-ce-cli containerd.io
   ```

   ::: tip

   如果你想安装具体版本的 Docker ，需要执行以下命令：

   ```bash
   sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
   ```

   `<VERSION_STRING>`为版本号，例如 `docker-ce-18.09.1`

   :::

6. 测试是否安装成功

   ```bash
   [root@VM-24-11-centos ~]# sudo docker version
   Client: Docker Engine - Community
   ...
   Server: Docker Engine - Community
   ...
   ```

7. 启动 Docker

   ```bash
   sudo systemctl start docker
   ```

8. 通过运行 hello-world 镜像来验证 Docker 引擎是否已正确安装

   ```bash
   sudo docker run hello-world
   ```

   ![image-20220210174957901](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202101749035.png)

<a id="_link_docker1">docker run命令经历了上图五步</a>：

1. 客户端发起 `docker run` 命令向 `Docker` 服务器端

2.  服务器端守护进程查找本地系统是否有 **hello-world** 镜像存在

3. 服务器端守护进程向 Docker 远程库（Docker Hub）寻找 **hello-world**  镜像

4. 服务器端守护进程将远程 **hello-world**  镜像下载到本地系统

5. 服务器端守护进程使用 **hello-world**  镜像创建了一个能够执行 **hello-world**  程序的容器 Container 并将该容器加载到内存运行（上文已说过，我们可以简单理解为镜像 Image 为一个可执行程序，容器 Container 为镜像 Image 加载到内存执行起来的一个进程）

   ![image-20220210180339988](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202101803105.png)

### Docker 中关于镜像的基本操作

Docker 相关命令参考[Docker CLI](https://docs.docker.com/engine/api/)

当我们安装完 Docker 引擎之后，就可以对镜像 Image 进行基本的操作了。比如我们从[官方注册服务器](https://hub.docker.com/)的仓库中 Docker Hub 下载 CentOS 的镜像，流程如下：

1. 查看 Docker Hub 中是否存在 CentOS 镜像

   ```bash
   docker search centos
   ```

   ![image-20220211110231042](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111102140.png)

   ::: tip

   Docker Hub 是 Docker 官方维护了一个公共镜像仓库 ，我们可以在 Docker Hub上下载镜像以及上传本地镜像

   :::

2. 下载 CentOS 镜像

   ```bash
   docker pull centos
   ```

   ![image-20220211110959830](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111109944.png)

   ::: tip

   `docker pull centos`  默认下载最近 latest 版本的镜像，如果你想下载指定版本的 CentOS 镜像，需要指定 `TAG`，一个镜像仓库可能会包含很多不同版本的镜像，使用`TAG`标签进行区分，例如

   ```
   docker pull centos:centos7
   ```

   `centos7` 为指定的 `TAG`，在 Docker Hub 中可以寻找到具体版本的 CentOS 镜像 `TAG`

   ![pullcentos1](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111135863.gif)

   :::

3. 查看当前系统的镜像信息

   ```bash
   docker images
   ```

   ![image-20220211114228802](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111142901.png)

   我们发现，通过 pull 命令已经将远程库的 CentOS 镜像下载到了本地电脑上了
   
4. 删除镜像

   ```bash
   # image_id 镜像 ID
   # REPOSITORY:TAG 镜像仓库名:TAG标签
   docker rmi image_id/REPOSITORY:TAG
   ```

### Docker 中关于容器的基本操作

我们已经提到过，镜像 Image 相当于一个可执行程序，是一个只读模板，而容器 Container 类似于运行起来的进程。有了 “可执行程序”  image 之后，将其加载到内存开始执行，即是所谓的 container。一个容器可以创建、启动、停止、删除，容器的基本操作主要包含如下

1. 查看当前正在运行的容器

   ```bash
   docker ps
   ```

   ![image-20220211180059707](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111800902.png)

   ::: tip

   `docker ps` 表示查看当前正在运行的容器，如果想查看所有的容器，包括未运行的容器，使用命令：

   ```bash
   docker ps -a
   ```

   :::

2. 新建容器并运行（流程和 [hello-world](#_link_docker1) 同理）

   ```bash
   docker run -it centos:latest /bin/bash
   ```

   ::: tip 知识点
   
   1、`centos:latest`为镜像仓库名+镜像`TAG`，此处也可以替换为镜像 ID（Image Id，若本地系统存在该镜像），可替换为下图的 `5d0da3dc9764`
   
   ![image-20220211191240713](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111912784.png)
   
   2、`-it`是两个参数：`-i`和`-t`，前者表示打开并保持 stdout（标准输出，指的就是在命令行里，每次你输入指令后，终端上打印出来的那些话，那些反馈），后者表示分配一个伪输入终端
   
   3、使用命令`exit`退出容器，退出容器后，此时容器的状态处于 Exited，而不是运行状态。若不使用 `exit`，而是使用`CTRL+p`  `CTRL+q` 退出，此时容器的状态为 Up，表示容器在后台运行
   
   ![image-20220211193259098](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111932246.png)
   
   4、`/bin/bash`表示容器启动后运行 bash
   
   5、可以使用参数`--name`为启动的容器指定一个名称
   
   ```bash
   docker run --name "codinglife" -it centos:latest /bin/bash
   ```
   
   ![image-20220211194947869](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202111949979.png)
   
   注意每一次使用`docker run`命令都会新生成一个容器，容器的ID（Container id）不相同
   
   6、使用参数`-d`可以使容器在后台运行，不进入伪终端，并返回容器id
   
   ```bash
   docker run -d centos:latest /bin/bash
   ```
   
   ![image-20220211200320260](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202112003364.png)
   
   使用`-d`参数后台运行一个容器，然而使用`docker ps`命令并没有查询到任何运行的容器，原因在于：docker 中必须要保持一个进程的运行，要不然整个容器启动后就会马上kill itself
   
   7、有关 `docker run` 的更多参数可以参考[docker | Docker Documentation](https://docs.docker.com/engine/reference/commandline/docker/)
   
   :::
   
3. 停止容器运行

   ```bash
   docker stop container_id/container_name
   ```

   容器启动后可以停止其运行，`container_id` 为容器 ID，`container_name` 为容器 Name

   ![image-20220212105747075](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202121057199.png)

4. 启动容器或者重启容器

   ```bash
   # 启动容器
   docker start container_id/container_name
   # 重启容器
   docker restart container_id/container_name
   # 进入后台启动的容器
   docker attach container_name/container_id
   ```

5. 删除容器

   ```bash
   # 删除指定容器, 不能删除正在运行的容器
   docker rm container_name/container_id
   # 强制删除指定容器
   docker rm -f container_name/container_id
   # 删除所有已经停止的容器
   docker rm $(docker ps -a -q) 
   ```

### Dockerfile—新建自有镜像

我们已经了解了关于镜像和容器的基本操作，那么如何将自己的项目构建成 Docker 镜像以方便其它人员使用呢？Docker 中提供了两种方式构建自有镜像：**修改已有镜像和使用 Dockerfile 创建镜像**

#### 使用 Dockerfile 创建镜像

Dockerfile 是一个用来构建镜像 Image 的文本文件，Docker 可以通过读取 Dockerfile 中的指令来自动构建镜像，使用 `docker build` 命令，我们可以创建一个连续执行多个命令行指令的自有镜像。Dockerfile 主要包含以下指令：

| 指令           | 语法                                    | 说明                                                         |
| :------------- | :-------------------------------------- | ------------------------------------------------------------ |
| **FROM**       | `FROM <image>`<br/>`FROM <image>:<tag>` | 创建镜像使用的基础镜像                                       |
| **MAINTAINER** | `MAINTAINER <name>`                     | 镜像作者信息                                                 |
| **RUN**        | `RUN <command>`                         | 编译镜像运行的命令                                           |
| **EXPOSE**     | `EXPOSE port`                           | 容器暴露端口号                                               |
| **ENV**        | `ENV <key>=<value> ...`                 | 设置环境变量                                                 |
| **WORKDIR**    | `WORKDIR /path/to/workdir`              | 指定容器的工作目录                                           |
| **VLOUME**     | `VOLUME ["/path/to/directory"]`         | 设置容器卷                                                   |
| **ADD**        | `ADD <src> <dest>`                      | 把本机的文件复制到镜像中，<br/>src 是压缩文件会自动解压出来  |
| **COPY**       | `COPY <src> <dest>`                     | 与 ADD 指令类似，<br/>COPY 的是压缩包不会自动解压            |
| **CMD**        | `CMD <command>`                         | 容器启动时要运行的命令，只有在执行<br/>`docker run`或者`docker start`命令时才<br/>会运行，如果一个 Dockerfile有多条 CMD <br/> 指令，那么只有文件最后一行的CMD指令 <br/>才会生效 |
| **ENTRYPOINT** | `ENTRYPOINT <command>`                  | 与 CMD 类似，如果一个 Dockerfile 有多<br/>条 CMD 指令，可以追加命令 |

例如我们在 Linux 环境下构建一个 CentOS 镜像 mycentos01，并且该镜像包含一个 tomcat，步骤如下：

1. 准备安装所需文件：tomcat、JDK压缩包，创建 dockerfile 文件，放在同级目录下

   ```bash
   [root@VM-24-11-centos mydocker]# cd /opt/mydocker/
   [root@VM-24-11-centos mydocker]# touch dockerfile
   [root@VM-24-11-centos mydocker]# ls -a
   .  ..  apache-tomcat-8.5.75.tar.gz  dockerfile  jdk-17_linux-x64_bin.tar.gz readme.txt
   [root@VM-24-11-centos mydocker]# 
   ```

2. 编写 dockerfile

   ```bash
   vim dockerfile
   ```

   dockerfile 文件内容（按 `i` 编辑 ，按 `ESC` 退出编辑，按`Shift` + `:wq` 保存退出）：

   ```dockerfile
   FROM centos:latest
   
   MAINTAINER codinglifevv<wyj_program@163.com>
   
   # 把宿主机当前上下文的 readme.txt 拷贝到容器/usr/local/路径下
   COPY readme.txt /usr/local/readme.txt
   
   # 把 java 和 tomcat 添加到容器中（会自动解压）
   ADD apache-tomcat-8.5.75.tar.gz /usr/local/
   ADD jdk-17_linux-x64_bin.tar.gz /usr/local/
   
   # 设置工作目录, 即启动访问的初始位置
   ENV MYPATH /usr/local 
   WORKDIR $MYPATH
   
   # 配置java和tomcat的环境变量
   ENV JAVA_HOME /usr/local/jdk-17.0.2             
   ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
   ENV CATALINA_HOME /usr/local/apache-tomcat-8.5.75             
   ENV CATALINA_BASE /usr/local/apache-tomcat-8.5.75
   ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/lib:$CATALINA_HOME/bin
   
   EXPOSE 8080
   
   # 容器启动后要执行的命令
   CMD /usr/local/apache-tomcat-8.5.75/bin/catalina.sh run
   ```
   
3. 构建镜像

   ```bash
   docker build -t codinglife/mytomcat01:1.0 .
   ```

   `-t`参数镜像的名字及标签，`docker build` 最后面要有 `.` 符号
   
   ![image-20220214145702062](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202141457199.png)

4. 运行启动的镜像

   ```bash
   docker run -d -p 5566:8080 --name mytomcat01 codinglife/mytomcat01:1.0 
   ```

   参数`-p`表示指定端口映射，格式为：`主机(宿主)端口 : 容器端口` （我们已经知道，可以将 Docker 容器看作一个极简的 Linux 系统环境以及运行在其中的应用程序，因此需要开启端口映射来访问容器中的应用程序）	

#### 修改已有镜像

当然，除了使用 dockerfile 文件构建自有镜像之外，还可以修改原有的镜像，之后将修改后的镜像提交为一个新的镜像。例如在一个 centos 镜像中安装git、vim方法如下：

1. 运行一个 centos 容器，使用`-it`参数进入其伪终端

   ```bash
   [root@VM-24-11-centos /]# docker run -it centos /bin/bash
   # 进入容器伪终端
   [root@7c072f2eea68 /] 
   ```

2. 在伪终端下安装 git 、vim

   ```bash
   [root@7c072f2eea68 /]# yum -y install git
   [root@7c072f2eea68 /]# yum -y install vim
   ```

   ::: tip

   1、官方的 centos 镜像伪终端类似一个极简的 Linux 系统，因此不包含许多命令，需要我们手动安装

   2、以上命令也可以写在 dockerfile 文件中，使用 RUN 指令运行：

   ```dockerfile
   RUN yum -y install git
   RUN yum -y install vim
   ```

   3、如果你的命令运行一直失败，可能是由于镜像源访问不到，可以在伪终端下重新安装阿里云镜像源，安装方式参考[centos镜像-centos下载地址-centos安装教程-阿里巴巴开源镜像站 (aliyun.com)](https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11WUg2mF)

   :::

3. 使用`exit`退出容器，将容器转化为一个镜像：

   ```bash
   docker commit -m "centos with git and vim" -a "codinglife" 7c072f2eea68 codinglife/centos:1.0
   ```

   参数`-m`对镜像进行一个简单的说明；参数`-a`指定提交镜像的作者信息；`7c072f2eea68`为被转化容器的 ID，`codinglife/centos:1.0`分别为目标镜像的用户名 / 仓库名 : tag 信息
   
   ![image-20220216165023133](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202161650262.png)

4. 测试转化的镜像是否能够执行 git 操作

   ![image-20220216165724145](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202161657275.png)

### Docker 数据持久化

Docker容器产生的数据，如果不通过`docker commit`生成新的镜像，使得数据做为镜像的一部分保存下来，那么当容器删除后，数据自然也就没有了，为了能保存数据在 Docker 中，Docker 使用数据卷（Data Volumes）、数据卷容器（Data Volumes Dontainers）来确保数据的持久化和同步。

::: tip

数据卷就是数据(一个文件或者文件夹)，本质上对应的是宿主机的文件目录

:::

参考网址：

- [Docker数据卷与数据卷容器](http://www.lining0806.com/数据卷与数据卷容器/)
- [Docker系列教程14-Docker数据持久化](https://developer.aliyun.com/article/622327?spm=a2c6h.13813017.content3.1.38d56878JxV9M9)
- [docker 入门到实战（五）docker容器数据卷](https://segmentfault.com/a/1190000022274697)
- [数据卷容器（--volumes-from） | Docker-guide (gitbooks.io)](https://jiajially.gitbooks.io/dockerguide/content/chapter_fastlearn/docker_run/--volumes-from.html)

#### 数据卷

使用数据卷持久化一个 CentOS 容器数据操作如下：

1. 使用 `-v` 参数运行一个容器

   ```bash
   docker run -it -v /opt/mydocker/myvolume:/opt/myvolume centos /bin/bash
   ```

   ::: tip

   参数`-v` 命令格式如下：

   ```bash
   docker run -di -v /宿主机绝对路径目录:/容器内目录 centos
   ```

   1、`-v /opt/mydocker/myvolume:/opt/myvolume`表示将宿主机目录和容器目录进行关联，关联之后，不论在宿主机目录下，还是容器内目录下修改文件，数据都会在两者之间同步

   ![image-20220215115726576](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202151157776.png)

   2、默认情况下，挂载文件权限是读写权限，也可使用`:ro` 参数指定只读权限

   ```bash
   docker run -it -v /opt/mydocker/myvolume:/opt/myvolume:ro centos /bin/bash
   ```

   3、可以使用具名挂载的方式来运行一个容器，该方式会为挂载卷进行自定义命名，匿名挂载方式 Docker 会为挂载卷生成一个很长的 16 进制数字

   ```bash
   # 具名挂载格式: -v 卷名:容器内路径
   docker run -d -v codinglifev:/opt/myvolume centos /bin/bash
   # 匿名挂载格式: -v 容器内路径
   docker run -d -v /opt/myvolume centos /bin/bash
   ```

   ![image-20220215171110905](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202151711046.png)

   4、命令`docker volume ls` 可以查看挂载卷的信息，如果指定了容器内目录，命令查询不到任何挂载卷信息

   5、如果不指定挂载卷的宿主机绝对路径目录，会默认存储在宿主机的`/var/lib/docker/volumes`目录下

   ![image-20220215171945416](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202151719541.png)

   :::

2. 查看数据是否挂载成功，容器内部详细

   ```bash
   # container_id 容器 ID
   docker inspect container_id
   ```

   ![image-20220215163540394](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202151635529.png)

3. 构建自有镜像时，设置数据卷

   我们可以在构建自有镜像时为容器指定数据卷，例如构建一个简单的 CentOS 镜像，dockerfile 文件内容如下：

   ```bash
   # dockerfile文件内容
   FROM centos
   VOLUME ["/opt/myvolume01","/opt/myvolume02"]
   CMD echo "-------end--------"
   CMD /bin/bash
   ```

   指令 `VOLUME` 指定设置数据卷的容器内目录
   
   ![image-20220215180156424](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202151801667.png)

4. 删除数据卷

   ```bash
   docker rm -v 容器ID
   ```

#### 数据卷容器

通过数据卷可以实现容器内目录和宿主机目录之间数据同步，如果你有一些持续更新的数据需要在容器之间共享，最好创建数据卷容器。 数据卷容器，其实就是一个正常的容器，专门用来提供数据卷供其它容器挂载。数据卷容器的实现要求我们使用参数`--volumes-from`来实现一个继承关系，使用数据卷容器流程如下：

1. 构建一个数据卷容器（父容器），并为该容器添加一些数据（这里添加一个readme.txt文件）

   ```bash
   docker run -it --name father -v /opt/myvolumn centos /bin/bash
   cd /opt/myvolumn/
   touch readme.txt
   ```
   
2. 构建挂载步骤 1 数据卷的容器（创建子容器继承父容器）

   ```bash
   docker run -it --name son1 --volumes-from father centos
   docker run -it --name son2 --volumes-from father centos
   ```

   使用参数`--volumes-from`来构建共享数据的容器，格式为：
   
   ```bash
   docker run -it --name 子容器名称 --volumes-from 父容器名称 image
   ```
   
   发现容器 son1 和 son2 同样有了 readme.txt 文件，实现了数据共享

   ![image-20220216121223528](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202161212693.png)

3. 删除父容器，并在 son1 容器新增 readmeSon1.txt 文件，观察 son2 容器数据变化

   ![image-20220216122704204](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202161227360.png)

   使用`--volumes-from`参数使多个容器共享数据之后，除非将所有共享数据的容器删除，否则容器之间一直会进行数据同步共享

### 将本地镜像推送到远程库 Docker Hub

当我们学会如何构建自有镜像之后，便可以将构建的镜像推送到 Docker Hub 上供其它人员使用了，流程如下：

1. 访问[Docker Hub](https://hub.docker.com/)，如果没有账号，需要先注册一个

2. 利用命令docker login 登录DockerHub，输入用户名、密码

   ```bash
   Docker login
   ```

   ![image-20220216145414705](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202161454828.png)

3. 推送本地的镜像到 DockerHub 上

   ```bash
   docker push wyjpro/mytomcat01:1.0
   ```

   注意命令`push`后面的名称 `wyjpro`必须是你的 Docker Hub 登录用户名，否则推送会失败
   
   ![image-20220216154941296](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202161549402.png)

   ![image-20220216154634005](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202161546141.png)
