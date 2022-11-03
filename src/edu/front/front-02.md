---
index: 3
title: "快速入门"
icon: config
category:
  - 前端
tag:
  - 快速入门


navbar: true
breadcrumb: true
copyright: false
footer: MIT Licensed  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备2022028662号-1</a> | Copyright © 2022-present <a href="https://github.com/CodingLifeVV" target="_blank">CodingLifeVV</a> </p> 内容创作不易，引用请注明出处，网站已备案，切勿侵权
---

## 登录功能实现

通过浏览器 Web 开发者工具调试会发现，默认登录跳转 URL 显示如下：

![image-20220319082538729](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203190825834.png)

其中，`9528` 为项目默认启动端口号；`/dev-api` 在项目根目录文件`.env.development` 下配置为：

```html
# base api
VUE_APP_BASE_API = '/dev-api'
```

`vue-admin-template/user/login`为跳转路由，配置在`/src/api/user.js`下：

```js
export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}
```

## 自定义路由跳转

路由的配置在路径`/src/router/index.js`下，定义在以下代码块中

```js
export const constantRoutes = [
    // 路由配置
]
```

每一个路由使用`{ }` 来表示，比如我们在该 `index.js` 下配置一个新的路由跳转，包括<a id="_link_router1">查询教师列表和添加教师</a>两个路由，步骤如下：

1. 在`/src/router/index.js` 中编写<a id="link_teacher">路由跳转代码</a>
   
   ```js
   // 教师管理
   {
       path: '/edu/teacher', // 之后要在src目录下创建对应的文件夹
       component: Layout,
       redirect: '/edu/teacher/list',  // 重定向地址，在面包屑中点击会重定向去的地址
       name: 'Teacher',
       meta: { title: '教师管理', icon: 'el-icon-user-solid' },
       children: [
         {
           path: 'list', // 路由: /edu/teacher/list
           name: 'EduTeacherList',
           component: () => import('@/views/edu/teacher/list'),
           meta: { title: '讲师列表' }
         },
         {
           path: 'add', // 路由: /edu/teacher/add
           name: 'EduTeacherAdd',
           component: () => import('@/views/edu/teacher/form'),
           meta: { title: '添加教师' }
         }
       ]
   },
   ```

2. 在路径`/src/views/`下创建对应的文件夹，一般一个路由对应一个文件
   
   ![image-20220319085846213](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203190858280.png)
   
   配置好之后出现如下二级菜单：
   
   <img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203191126502.png" alt="image-20220319112656458" width="252" />
   
   此时，当点击“讲师列表”时，跳转 URL 为 `http://localhost:9528/#/edu/teacher/list`；点击“添加讲师”时，跳转 URL 为 `http://localhost:9528/#/edu/teacher/add`

## 路由跳转功能实现

### 查询功能—实现教师列表

::: tip 需求描述

当点击“教师列表”时，将请求发送到后端代码，后端 Controller 请求分发处理之后传回到前端界面显示

:::

**步骤如下**：

1. 修改根目录文件 `.env.development` 下的 base api 为后端服务访问路径
   
   ```
   # VUE_APP_BASE_API = '/dev-api'
   # 修改为
   VUE_APP_BASE_API = 'http://localhost:8001'
   ```
   
   ::: tip
   
   注意修改配置文件之后要重新启动服务

   :::
   
2. 目录`/src/api` 下创建`teacher.js`，实现对应的 api 服务 `getPageList()`
   
   ```js
   import request from '@/utils/request' // 每一个 api 服务都需要导入
   
   const api_name = '/edu/teacher' // 根据个人项目自行修改,也可以不写
   
   export default {
     // 教师列表(分页条件查询)
     getPageList(current, limit, searchObj) {
       return request({
         url: `${api_name}/listByPageCondition/${current}/${limit}`,
         // 1. 最终 URL : http://localhost:8001/edu/teacher/listByPageCondition/${current}/${limit}, 会调用后端对应的 Controller 方法
         // 2. 若没有定义 api_name, url 可以直接写为 `/edu/teacher/listByPageCondition/${current}/${limit}`
         method: 'post',
         data: searchObj
       })
     }
   }
   ```
   
   ::: info 后端对应代码
   
   1、`getPageList(current, limit, searchObj)` 对应后端 Controller 接口方法：
   
   ```java
   @RequestMapping("/edu/teacher")
   public class TeacherController {
    /**
        * 条件查询分页方法
        * @param current 当前显示页
        * @param limit   每页显示记录数
        * @param teachQuery 条件查询封装类, 若teachQuery为空,则查询出全部数据
        * @return
        */
       @PostMapping("listByPageCondition/{current}/{limit}")
       public CommonResult listByPageCondition(@PathVariable Long current,
                                      @PathVariable Long limit,
                                      @RequestBody TeachQuery teachQuery) {
           // ...省略代码
       }
   }
   ```
   
   2、前后端方法的参数要一致（名称不必相同）

   :::
   
3. 目录 `/src/views/edu/teacher` 下初始化 vue 组件 `list.vue`，之后补全相应代码
   
   初始化内容（固定格式）：
   
   ```vue
   <!--表格渲染部分-->
   <template> 
     <div class="app-container" />
   </template>
   
   <script>
   
   <!-- 导入对应的api服务 -->
   import teacher from '@/api/edu/teacher'
   
   export default {
     data() { // 定义变量和初始值, 名字随便写
       return {}
     },
   
     created() { // 当页面加载时获取数据, 页面渲染之前执行，一般调用methods中的方法
       this.fetchData()
     },
   
     methods: {
       fetchData() { // 调用api层定义的方法获取数据
         console.log('加载列表')
       }
     }
   }
   </script>
   ```
   
   **补全代码**：
   
   ```vue
   data() { // 定义变量和初始值, 名字随便写
       return {
         listLoading: true, // 是否显示 loading 信息
         list: null, // 查询之后返回的数据列表
         total: 0, // 总记录数
         page: 1, // 页码
         limit: 10, // 每页记录数
         searchObj: {}// 查询条件
       }
   },
   ```
   
   ```vue
   methods: {
       fetchData(page = 1) { // 调用api层获取数据库中的数据
         console.log('加载列表')
         this.page = page
         this.listLoading = true
         // 分页查询教师信息
         teacher.getPageList(this.page, this.limit, this.searchObj).then(response => {
           // .then请求成功, response 接口返回的数据
           this.list = response.data.rows
           // console.log(this.list) // 返回数据集合
           this.total = response.data.total
           this.listLoading = false
           // console.log(this.total) // 总记录数
         })
             // 请求失败
           .catch(error => {
             console.log(error)
           })
       },
   }
   ```
   
   **补全表格渲染部分**：
   
   ```vue
   <template>
     <div class="app-container">
   
       <!--查询表单 教师列表-->
       <el-form :inline="true" class="demo-form-inline">
   
         <el-form-item>
           <el-input v-model="searchObj.name" placeholder="教师名" />
         </el-form-item>
         <el-form-item>
           <el-select v-model="searchObj.level" clearable placeholder="教师职称">
             <el-option :value="1" label="教授" />
             <el-option :value="2" label="副教授" />
             <el-option :value="3" label="讲师" />
             <el-option :value="4" label="助教" />
           </el-select>
         </el-form-item>
         <el-form-item label="添加时间">
           <el-date-picker
             v-model="searchObj.begin"
             type="datetime"
             placeholder="选择开始时间"
             value-format="yyyy-MM-dd HH:mm:ss"
             default-time="00:00:00"
           />
         </el-form-item>
         <el-form-item>
           <el-date-picker
             v-model="searchObj.end"
             type="datetime"
             placeholder="选择截止时间"
             value-format="yyyy-MM-dd HH:mm:ss"
             default-time="00:00:00"
           />
         </el-form-item>
         <el-button type="primary" icon="el-icon-search" @click="fetchData()">查
           询</el-button>
         <el-button type="default" @click="resetData()">清空</el-button>
       </el-form>
   
       <!-- 数据显示表格 -->
       <el-table
         v-loading="listLoading"
         :data="list"
         element-loading-text="数据加载中"
         border
         fit
         highlight-current-row
       >
         <el-table-column
           label="序号"
           width="70"
           align="center"
         >
           <template slot-scope="scope">
             {{ (page - 1) * limit + scope.$index + 1 }}
           </template>
         </el-table-column>
         <el-table-column prop="id" label="ID" width="180" />
         <el-table-column prop="name" label="名称" width="80" />
         <el-table-column label="头衔" width="80">
           <template slot-scope="scope">
             <p v-if="scope.row.level===1">教授 </p>
             <p v-if="scope.row.level===2">副教授 </p>
             <p v-if="scope.row.level===3">讲师 </p>
             <p v-if="scope.row.level===4">助教 </p>
           </template>
         </el-table-column>
         <el-table-column prop="intro" label="资历" />
         <el-table-column prop="gmtCreate" label="添加时间" width="160" />
         <el-table-column prop="sort" label="排序" width="60" />
         <el-table-column label="操作" width="200" align="center">
           <template slot-scope="scope">
             <router-link :to="'/edu/teacher/edit/'+scope.row.id">
               <el-button type="primary" size="mini" icon="el-icon-edit">
                 修改
               </el-button>
             </router-link>
             <el-button
               type="danger"
               size="mini"
               icon="el-icon-delete"
               @click="removeDataById(scope.row.id)"
             >删除</el-button>
           </template>
         </el-table-column>
       </el-table>
   
       <!-- 分页 -->
       <el-pagination
         :current-page="page"
         :page-size="limit"
         :total="total"
         style="padding: 30px 0; text-align: center;"
         layout="total, prev, pager, next, jumper"
         @current-change="fetchData"
       />
   
     </div>
   </template>
   ```
   
   ::: tip
   
   表格渲染主要包括三部分：查询表单、数据显示表格和分页插件
   
   :::

   ![image-20220319190908877](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203191909987.png)
   
4. 后端对应 Controller 类使用注解 `@CrossOrigin` 解决跨域问题
   
   ```java
   @RestController
   @RequestMapping("/edu/teacher")
   @CrossOrigin // 解决跨域问题
   public class TeacherController {
       // ...省略代码
   }
   ```
   
   ::: tip
   
   前端地址为`http://localhost:9528/#/edu/teacher/list`，之后要访问地址`http://localhost:8001/edu/teacher/listByPageCondition/1/10` 来请求数据，属于跨域问题，可以通过在 Controller 类上使用注解 `@CrossOrigin`  来解决该问题
   
   :::

### 删除功能—实现删除教师

::: tip 需求描述

当点击删除按钮时，将从数据库中删除对应行的教师信息

:::

步骤如下：

1. 目录`/src/api` 下`teacher.js`，实现对应的 api 服务 `deleteTeacherId()`
   
   ```js
   // 通过id删除教师
     deleteTeacherId(teacherId) {
       return request({
         url: `${api_name}/delete/${teacherId}`, // 请求后端 Controler /edu/teacher/delete/{id}
         method: 'delete'
       })
     },
   ```
   
   ::: info 后端对应代码
   
   ```java
   @RestController
   @RequestMapping("/edu/teacher")
   @CrossOrigin // 解决跨域问题
   public class TeacherController {
    /**
        * @param id
        * @return
        * @ApiParam name-参数名称 value-参数简单描述 required-是否为必传参数
        */
       @DeleteMapping("delete/{id}")
       @ApiOperation("通过id删除讲师")
       public CommonResult deleteTeacherById(@ApiParam(name = "id", value = "教师id", required = true) @PathVariable String id) {
           boolean result =  teacherService.removeById(id);
           if (result) {
               return CommonResult.success();
           } else {
               return CommonResult.error();
           }
       }
   }
   ```
   
   :::

2. 目录 `/src/views/edu/teacher` 下 `list.vue` 的 `methods:{ }` 内实现删除方法
   
   ```vue
   methods: {
       removeDataById(id) {
         this.$confirm('此操作将永久删除教师记录, 是否继续?', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
         }).then(() => { // 点击确定，执行then方法
           // 调用删除的方法
           teacher.deleteTeacherId(id)
             .then(response => { // 删除成功
               // 提示信息
               this.$message({
                 type: 'success',
                 message: '删除成功!'
               })
               // 回到列表页面
               this.fetchData()
             })
         })
       }
   }
   ```
   
   ::: tip
   
   点击“删除”按钮会触发执行删除方法`removeDataById(id)`，使用 `@click`来绑定事件
   
   <img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203201420983.png" alt="image-20220320142008773" width="400" />
   
   :::

### 添加功能—实现添加教师

::: tip 需求描述

需要实现的功能：当点击“添加教师”时，可以输入需要添加的教师的相关信息，并保存数据到数据库

![image-20220320145246844](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203201452912.png)

:::

步骤如下：

1. [编写路由跳转代码](#_link_router1)
   
   ```js
   {
       path: 'add', // 访问地址: /edu/teacher/add
       name: 'EduTeacherAdd',
       component: () => import('@/views/edu/teacher/form'),
       meta: { title: '添加教师' }
   }
   ```

2. 目录`/src/api` 下 `teacher.js`，实现对应的 api 服务
   
   ```js
   const api_name = '/edu/teacher'
   
   export default { 
     // 新增教师
     addTeacher(teacher) {
       return request({
         url: `${api_name}/addTeacher`,
         method: 'post',
         data: teacher
       })
     }
   }
   ```
   
3. 目录 `/src/views/edu/teacher` 下初始化 vue 组件 `form.vue`，之后补全相应代码
   
   ```vue
   <template>
     <div class="app-container">
         <!-- 教师表单, 待补全 -->
     </div>
   </template>
   
   <!-- 导入对应的api服务 -->
   import teacherApi from '@/api/edu/teacher'
   
   export default {
   
   <!-- 功能实现, 待补全 -->
   
     data() {
       return {
         teacher: {
           name: '',
           sort: 0,
           level: 1,
           career: '',
           intro: '',
           avatar: ''
         }
       }
     },
     created() {
   
     },
     methods: {
   
     }
   }
   
   </script>
   ```
   
   **补全代码教师表单**：
   
   ```vue
   <template>
     <div class="app-container">
   
       <!-- 教师表单 -->
       <el-form label-width="120px">
         <el-form-item label="教师名称">
           <el-input v-model="teacher.name" />
         </el-form-item>
         <el-form-item label="教师排序">
           <el-input-number v-model="teacher.sort" controls-position="right" min="0" />
         </el-form-item>
         <el-form-item label="教师职称">
           <el-select v-model="teacher.level" clearable placeholder="请选择">
             <!--
               数据类型一定要和取出的json中的一致，否则没法回填
               因此，这里value使用动态绑定的值，保证其数据类型是number
             -->
             <el-option :value="1" label="教师" />
             <el-option :value="2" label="副教授" />
             <el-option :value="3" label="讲师" />
             <el-option :value="4" label="助教" />
           </el-select>
         </el-form-item>
         <el-form-item label="教师资历">
           <el-input v-model="teacher.career" />
         </el-form-item>
         <el-form-item label="教师简介">
           <el-input v-model="teacher.intro" :rows="10" type="textarea" />
         </el-form-item>
   
         <el-form-item>
           <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
         </el-form-item>
       </el-form>
     </div>
   </template>
   ```
   
   **补全代码方法实现**：
   
   ```vue
   <script>
   
   <!-- 导入对应的api服务 -->
   import teacherApi from '@/api/edu/teacher'
   
   export default {
   
     data() {
       return {
         teacher: {
           name: '',
           sort: 0,
           level: 1,
           career: '',
           intro: '',
           avatar: ''
         },
         saveBtnDisabled: false // 保存按钮点击之后是否禁用, 防止多次提交
       }
     },
     created() {
   
     },
     methods: {
       // 保存按钮触发 saveOrUpdate() 事件
       saveOrUpdate() {
         this.saveTeacher()
       },
       // 添加讲师的方法
       saveTeacher() {
         teacherApi.addTeacher(this.teacher).then(response => {
           // 添加成功
           // 提示信息
           this.$message({
             type: 'success',
             message: '添加成功!'
           })
           // 回到列表页面, 路由跳转
           this.$router.push({ path: '/edu/teacher/list' })
         })
       }
     }
   }
   
   </script>
   ```
   
   ::: tip 
   
   1、“保存”按钮会触发执行`saveOrUpdate()`方法：
   
   ![image-20220320172703926](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/202203201727051.png)
   
   2、使用`this.$router.push({ path: '需要跳转的路由' })`的方式进行路由跳转
   
   :::

### 修改功能—实现教师信息修改

::: tip 需求描述

当点击 "教师列表" 中的 "修改" 按钮时，会对教师信息编辑页面，重新编辑该教师信息

<img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220409095815109.png" alt="image-20220409095815109" width="200" />

:::

**步骤如下**：

1. 在`/src/router/index.js` 中新增[路由跳转代码](#link_teacher)

   ```js
   export const constantRoutes = [
     // 教师管理
     {
         // ...
       	// 新增代码
         {
           path: 'edit/:id',
           name: 'EduTeacherEdit',
           component: () => import('@/views/edu/teacher/form'),
           meta: { title: '修改信息' },
           // hidden 隐藏路由界面, 添加教师和修改教师信息页面一样, 因此可以使用同一个页面
           hidden: true
         }
       ]
     },
   ]
   ```

   ::: tip

   添加教师与修改教师使用同一个 vue 组件 `form.vue`，可以使用 hid`den: true` 隐藏一个路由界面

   <img src="https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220409120300269.png" alt="image-20220409120300269" width="250" />

   :::

2. 教师表单 `list.vue` 中编写跳转路由代码，跳转到“添加教师“ `form.vue` 界面

   ```vue
   <router-link :to="'/edu/teacher/edit/'+scope.row.id">
   	<el-button type="primary" size="small" icon="el-icon-edit">修改</el-button>
   </router-link>
   ```

3. `form.vue` 编写数据回显方法代码

   ```vue
   created() {
     console.log('created')
     if (this.$route.params && this.$route.params.id) {
       // 得到路由中的参数值, 如果有参数id, 则调用 fetchDataById(id) 方法
       const id = this.$route.params.id
       this.fetchDataById(id)
     }
   },
   methods: {
     // 根据教师id查询教师信息
     // 添加教师和修改教师使用的同一页面, 添加教师的时候该方法不需要调用, 修改的时候需要调用
     // 根据地址是否有id值确定是否调用fetchDataById()方法, 修改教师地址会传入id号
     fetchDataById(id) {
       teacherApi.getTeacherById(id).then(response => {
       this.teacher = response.data.teacher
       }).catch((response) => {
         this.$message({
           type: 'error',
           message: '获取数据失败'
         })
       })
     },
   }
   ```

   ::: tip

   添加新教师时候，添加界面信息为空，添加界面如下：

   ![image-20220409101223998](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220409101223998.png)

   点击修改按钮修改教师信息时，界面会将需要修改的教师的信息回显到修改界面中：

   ![image-20220409101426461](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20220409101426461.png)

   :::

4. 修改`form.vue` 中的 `saveOrUpdate()` 方法，判断是添加新的教师还是修改教师信息

   ```vue
   methods: {
       // 判断是添加还是修改
       // 根据teacher判断是否有id
       saveOrUpdate() {
         if (!this.teacher.id) {
           // 没有id, 添加
           this.saveTeacher()
         } else {
           this.updateTeacherById() // 根据教师id更新教师信息
         }
       },
   		// 根据教师id更新教师信息
       updateTeacherById() {
         this.saveBtnDisabled = true
   			// 调用对应 api 服务
         teacherApi.updateTeacherById(this.teacher).then(response => {
           this.$message({
             type: 'success',
             message: '修改成功'
           })
           this.$router.push({ path: '/edu/teacher/list' })
         }).catch((response) => {
           this.$message({
             type: 'error',
             message: '修改失败'
           })
         })
       }
   }
   ```

5. `/src/api/edu/teacher.js` 下编写 api 服务代码 

   ```js
   const api_name = '/edu/teacher'
   
   export default { 
   	// 根据教师id更新教师信息
     updateTeacherById(teacher) {
       return request({
         url: `${api_name}/updateTeacher`,
         method: 'post',
         data: teacher
       })
     }
   }
   ```

   ::: tip 后端 Controller 代码

   ```java
   @ApiOperation("修改教师信息")
   @PostMapping("updateTeacher")
   public CommonResult updateTeacher(@RequestBody TeacherDo teacher) {
     boolean result = teacherService.updateById(teacher);
     if (result) {
       return CommonResult.success();
     } else
       return CommonResult.error();
   }
   ```

   :::

   















