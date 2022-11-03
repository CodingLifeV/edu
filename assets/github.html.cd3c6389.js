import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as e,b as i,d as o,e as n,r as a}from"./app.e6e6e289.js";const g={},c=n('<h3 id="github可以做什么" tabindex="-1"><a class="header-anchor" href="#github可以做什么" aria-hidden="true">#</a> Github可以做什么？</h3><p><strong>GitHub</strong> 是一个用于<strong>版本控制和协作的代码托管平台</strong>，它可以使我们可以在任何地方和任何人一起协同开发同一个项目，并将项目源码存储在 GitHub 上。学会使用 Github，我们可以进行以下操作：</p><ul><li>存储你的代码到 Github 仓库中</li><li>随时随地在本地修改你的代码，并提交到 GitHub 上</li><li>在 Github 上寻找免费开源的编程项目进行学习</li><li>和你的小伙伴共同完成一项任务，在 Github 上你们将会拥有各自不同的开发分支，最终将写好的代码合并到主分支上</li></ul>',3),d={href:"https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home",target:"_blank",rel:"noopener noreferrer"},p=e("h3",{id:"github上创建代码仓库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github上创建代码仓库","aria-hidden":"true"},"#"),i(" Github上创建代码仓库")],-1),h=e("p",null,[e("strong",null,"Github 仓库"),i("（Repository）是用来存储代码的地方（类似你的代码存储在本地电脑的某个文件夹下），创建一个仓库需要执行以下操作即可：")],-1),u=n('<li><p>在任何页面的右上角，点击 <strong>＋</strong> 号创建 （<strong>New repository</strong>）一个新的仓库</p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202041154813.png" alt="image-20220204115437711" width="300"></li><li><p>输入仓库的名字 <strong>Reposity name</strong>（必填项）输入一段简短的描述 <strong>Description</strong></p></li><li><p>设置仓库为所有 <strong>private</strong>（只可以自己访问） 或者公共 <strong>public</strong></p></li>',3),m={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[e("p",null,[i("创建仓库 "),e("strong",null,"Create Reposity")]),e("img",{src:"https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202082149955.png",alt:"image-20220208214926860",width:"700"})],-1),_=n('<p>创建好一个仓库之后，便可以使用该仓库存储代码</p><h3 id="在代码库下创建分支" tabindex="-1"><a class="header-anchor" href="#在代码库下创建分支" aria-hidden="true">#</a> 在代码库下创建分支</h3><p>Github仓库使用概念“分支” <strong>branch</strong> 来管理我们的代码，默认创建的仓库存在一个命名为 <strong>main</strong> 的主分支，该分支通常用来存储最终的版本代码。我们可以创建其它的分支（相当于拥有主分支代码的一份拷贝），在该分支上对代码进行编辑修改，且<strong>不同分支上修改代码互不影响</strong>。如果此时有多个人协作完成一个项目，那么每个人可以创建自己独立的分支修改代码。最终将完成的代码合并到主分支上。下图显示了在分支上进行的一系列操作：</p><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202041314837.png" alt="image-20220204131422734" loading="lazy"></p><ul><li>箭头方向代表主分支 <strong>main</strong></li><li>创建了一个名为 <strong>feature</strong> 的分支</li><li>在 <strong>feature</strong> 的分支上对代码进行编辑修改，最终将 <strong>feature</strong> 的分支合并到主分支 <strong>main</strong></li></ul><p><strong>在 Github 仓库 <code>hello-world</code> 下创建并使用分支的具体操作流程如下</strong>：</p><ol><li><p>点击 <code>hello-world</code> 仓库 <strong>Code</strong> 选项下名为的 <strong>main</strong> 的下拉菜单项</p></li><li><p>输入想要创建的分支名 <code>dev</code></p></li><li><p>点击 <strong>Create branch</strong>:dev from &#39;main&#39;，创建并进入了新的分支 <code>dev</code></p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202082147957.png" alt="image-20220208214702854" width="300"></li></ol><h3 id="在分支上编写代码并提交请求" tabindex="-1"><a class="header-anchor" href="#在分支上编写代码并提交请求" aria-hidden="true">#</a> 在分支上编写代码并提交请求</h3><p>当我们创建好一个新的分支之后，便可以在该分支下编辑修改相应内容并保存更改。Github 上，保存更改操作称为”提交请求“<strong>Commit changes</strong> ，每次提交请求时要求我们输入一个提交信息，这个提交信息解释了你此时提交的内容有哪些修改。之所以写提交信息，目的是为了让和我们一起协作完成项目的其它参与者方便的了解到当前代码有哪些更改。</p><p>比如我们要在 <code>dev</code> 分支修改 <code>README.md</code> 文件，步骤如下：</p><ol><li><p>在 <code>dev</code> 分支下点击<code>README.md</code>文件右上角的编辑选项（铅笔图标）</p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202041959174.png" alt="image-20220204195904037" width="800"></li><li><p>在编辑界面编辑修改之前的 <code>README.md</code> 文件</p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202042007671.png" alt="image-20220204200739593" width="600"></li><li><p>在 <code>Commit changes</code> 编写提交信息并提交更改 <img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202042009556.png" alt="image-20220204200927462" width="600"></p></li></ol>',11),f={class:"custom-container tip"},G=e("p",{class:"custom-container-title"},"Tips",-1),v={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},E={href:"http://README.me",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"在分支上提交请求后发起拉起请求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在分支上提交请求后发起拉起请求","aria-hidden":"true"},"#"),i(" 在分支上提交请求后发起拉起请求")],-1),w=e("p",null,[e("strong",null,"一旦我们在某一个分支上提交请求之后，我们便可以发起拉起请求"),i("。")],-1),j={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},R=n('<ol><li><p>单击 <code>hello-world</code> 存储库的 <strong>Pull requests</strong> 选项卡</p></li><li><p>单击 <strong>New pull request</strong> 新建拉起请求</p></li><li><p>在比较请求 <strong>Compare changes</strong> 下的下拉框中， <code>compare:</code> 下拉框选中 dev 分支（请求发起者），<code>base:</code>下拉框选中 main 分支</p></li><li><p>比较页面上查看更改内容，确保是我们最终要提交的内容</p></li><li><p>点击 <strong>Create pull request</strong>（创建拉起请求），并给你的拉取请求写一个简短的标题和一段描述信息</p></li><li><p>再次点击当前页面下的 <strong>Create pull request</strong></p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202051131599.gif" width="750"></li></ol><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>流程步骤4中比较页面上的查看更改内容，不同颜色代表不同更改，增加的内容以绿色显示，行的最前端以 <strong>+</strong> 号开头，删除的内容以红色显示，行的最前端以 <strong>-</strong> 号开头</p></div><h3 id="合并拉起请求的内容" tabindex="-1"><a class="header-anchor" href="#合并拉起请求的内容" aria-hidden="true">#</a> 合并拉起请求的内容</h3><p>dev 分支对 main 分支发起了拉起请求之后，main 分支可以对 dev 分支修改的内容进行查看，如果没有任何问题，便可以合并 dev 分支对 hello-world 内容所作的修改</p><p>main 分支合并 dev 分支内容流程如下：</p><ol><li><p>点击 hello-world 存储库 Pull request 选项，会看到有一条拉起请求，点击该拉起请求</p></li><li><p>点击 <strong>Files changed</strong> 选项，查看 dev 分支内容与 main 分支内容的不同</p></li><li><p>如果没有问题，在与 Files changed 同级选项 <strong>Conversation</strong> 下点击 <strong>Merge pull request</strong> 合并请求</p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202051200766.png" alt="image-20220205120010687" style="zoom:80%;"></li><li><p>合并请求之后，此时主分支 main 的内容和 dev 分支一样了，如果项目已经完成，此时可以选择删除 dev 分支</p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202051358726.png" width="800"></li></ol><p>至此，我们已经学会了在 Github 上创建一个项目存储库，并在存储库上进行一系列操作。然而，我们往往需要做的是：</p><ul><li>在我们的本地电脑上编辑修改代码，之后将代码上传到 Github 仓库中</li><li>从 Github 上下载代码到本地电脑</li></ul><p>以上操作需要我们本地电脑下载版本控制系统 <strong>Git</strong> 来实现，具体实现见下节内容。</p><h3 id="github-上寻找优秀的开源项目" tabindex="-1"><a class="header-anchor" href="#github-上寻找优秀的开源项目" aria-hidden="true">#</a> <a id="_link_git1">Github 上寻找优秀的开源项目</a></h3><p>Github 上发掘好的开源项目很简单，往往好的开源项目 Star 标星数较多（相当于点赞），当然，也存在许多尚未被发掘的开源项目。方式如下：</p><ol><li><p>在 Github 搜索框中输入 <code>stars:&gt;5000</code>，表示检索标星大于 5000 的项目</p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202071654862.png" alt="image-20220207165439784" width="800"><p>检索界面展示：</p><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202071754341.png" alt="image-20220207175419969" loading="lazy"></p></li><li><p>当然，你也可以类似在百度检索信息一样，在 Github 搜索框中输入具体想要寻找的项目的名称。当你发现一个优秀的开源项目之后，进入该项目所在仓库，比如你进入上图 <strong>Snailclimb/JavaGuide</strong> 仓库，便可以学习其他人的项目</p><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202071803846.png" alt="image-20220207180327702" loading="lazy"></p><p><code>fork</code> 他人的项目会在你自己的 Github 中创建一个同名的仓库，并克隆一份项目的副本：</p><p><img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202202071810752.png" alt="image-20220207181002663" loading="lazy"></p><p>如果你发现克隆的项目有错误内容，你可以在自己的仓库下对该项目进行修改，修改之后可以发起一个 <code>Pull requests</code></p></li></ol>',12);function x(D,M){const t=a("ExternalLinkIcon");return r(),l("div",null,[c,e("p",null,[i("为了完成以上任务，首先我们需要注册一个Github账户"),e("a",d,[i("Join GitHub · GitHub"),o(t)]),i("，接下来便可以使用 Github 执行一系列操作")]),p,h,e("ol",null,[u,e("li",null,[e("p",null,[i("添加一个 "),e("strong",null,[e("a",m,[i("README.md"),o(t)])]),i(" 文件，用来对要存储的项目工程进行一个简单的描述")])]),b]),_,e("div",f,[G,e("p",null,[i("以上只是在 dev 分支上对 "),e("a",v,[i("README.md"),o(t)]),i(" 文件进行了更改，提交请求只会改变当前分支的内容，main 分支以及其它分支（如果存在）上的 "),e("a",E,[i("README.me"),o(t)]),i(" 文件不会发生任何变化")])]),y,w,e("p",null,[i("dev 分支发起拉起请求之后，相当于告诉在其它分支的协作者：**我对 hello-world 项目中的 "),e("a",j,[i("README.md"),o(t)]),i(" 文件进行了修改，你可以对我修改的内容进行审查，如果没有任何问题，你可以将我修改的内容合并到你的分支上！**dev 分支发起拉起请求，请求 main 分支审阅内容并合并 dev 分支所作修改操作流程如下：")]),R])}const C=s(g,[["render",x],["__file","github.html.vue"]]);export{C as default};
