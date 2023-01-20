<!-- TOC -->

- [设计模式](#设计模式)
    - [一、UML类图](#一uml类图)
        - [1. 泛化关系](#1-泛化关系)
        - [2. 实现关系](#2-实现关系)
        - [3. 依赖关系](#3-依赖关系)
        - [4. 聚合关系](#4-聚合关系)
        - [5. 关联关系](#5-关联关系)
    - [二、创建型模式](#二创建型模式)
        - [1. 简单工厂模式](#1-简单工厂模式)
        - [**2. 工厂方法模式**](#2-工厂方法模式)
        - [**3. 抽象工厂模式**](#3-抽象工厂模式)
        - [**4. 单例模式**](#4-单例模式)
    - [三、结构型模式](#三结构型模式)
        - [**1. 适配器模式**](#1-适配器模式)
        - [**2. 装饰模式**](#2-装饰模式)
        - [**3. 代理模式**](#3-代理模式)
    - [四、行为型模式](#四行为型模式)
        - [**1. 策略模式**](#1-策略模式)
        - [**2. 观察者模式**](#2-观察者模式)

<!-- /TOC -->

# 设计模式

[参考，有具体代码](https://www.cnblogs.com/java-my-life/default.html?page=2)

[Graphic Design Patterns](https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/proxy.html)

## 一、UML类图

### 1. 泛化关系
代码中，泛化关系表现为继承非抽象类。泛化关系用一条带空心箭头的直接表示，如下图表示A继承自B：

![image-20230120131235970](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131235970.png)

### 2. 实现关系

代码中，实现关系表现为继承抽象类。实现关系用一条带空心箭头的虚线表示，如下图表示小汽车实现车：

![image-20230120131256196](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131256196.png)

### 3. 依赖关系

依赖关系是用一套带箭头的虚线表示的，他描述一个对象在运行期间会用到另一个对象的关系，如下图表示A依赖于B：

![image-20230120131313051](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131313051.png)

### 4. 聚合关系

聚合关系用一条带空心菱形箭头的直线表示，表示整体由部分构成的语义，如下图表示A聚合到B上：

![image-20230120131327563](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131327563.png)

### 5. 关联关系

关联关系是用一条直线表示的，它描述不同类的对象之间的结构关系。在最终代码中，关联对象通常是以成员变量的形式实现的。如下图，表示A知道B，但 B不知道A：

![image-20230120131341585](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131341585.png)

## 二、创建型模式
### 1. 简单工厂模式

**模式动机：**

多个类实现了一个基类，如果希望使用这些类的时候，不需要知道这些类的具体名字，只需要提供一个可以表示这个类的参数，并提供一个调用方便的方法，把该参数传入到相应的方法即可返回一个相应的具体类。

**定义：**

简单工厂模式中，可以根据参数的不同返回不同类的实例。简单工厂模式专门定义一个工厂类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。

**模式结构：**

* Factory：工厂角色
* Product：抽象产品角色
* ConcreteProduct：具体产品角色

![image-20230120131356626](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131356626.png)

图中`<<abstract>>` 可改为 `<<interface>>`

### **2. 工厂方法模式**

**模式动机：**

不在设计一个工厂类来统一负责所有产品类的创建，而是把具体产品类的创建过程交给专门的工厂子类去完成，定义了抽象的工厂类以及具体的工厂类。这种方式可以在不修改具体工厂类的情况下引进新的产品，更加符合”开闭原则“

**定义：**

工厂方法模式中，工厂父类负责定义创建产品对象的公共接口，而工厂子类则负责生成具体的产品对象，这样做的目的是将产品类的实例化操作延迟到工厂子类中完成，即通过工厂子类来确定究竟应该实例化哪一个具体产品类。

**模式结构：**

* Product：抽象产品
* ConcreteProduct：具体产品
* Factory：抽象工厂
* ConcreteFactory：具体工厂

![image-20230120131411367](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131411367.png)

### **3. 抽象工厂模式**

**模式动机：**

* 有时候我们需要一个工厂可以提供多个产品对象，而不是单一的产品对象。
  * 产品等级结构：产品等级结构即产品的继承结构
  * 产品族：在抽象工厂模式中，产品族是指由同一个工厂生产的，位于不同产品等级结构中的一组产品

* 当系统所提供的工厂所需生产的具体产品并不是一个简单的对象，而是多个位于不同产品等级结构中属于不同类型的具体产品时需要使用抽象工厂模式

* 抽象工厂模式与工厂方法模式最大的区别在于，工厂方法模式针对的是一个产品等级结构，而抽象工厂模式则需要面对多个产品等级结构，

**定义：**

提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。

**模式结构：**

* AbstractFactory：抽象工厂
* ConcreteFactory：具体工厂
* AbstractProduct：抽象产品
* Product：具体产品

![image-20230120131425827](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131425827.png)


### **4. 单例模式**

**模式动机：**

对于系统中的某些类来说，只有一个实例很重要。如何保证一个类只有一个实例并且这个实例易于被访问呢？定义一个全局变量可以确保对象随时都可以被访问，但不能防止我们实例化多个对象。

一个更好的解决办法是让类自身负责保存它的唯一实例。

**定义：**

单例模式确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例，这个类称为单例类，它提供全局访问的方法。

**模式结构：**

* Singleton：单例

  ![image-20230120131440882](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131440882.png)

  代码实现如下：
  1. 双重检查
        ```java
        public class Singleton {
            //volatile
            private static volatile Singleton singleton = null;
            private Singleton() {};
            
            public static Singleton getSingleton() {
                if(singleton == null) {
                    //synchronized
                    synchronized(Singleton.class) {
                        if(singleton == null) {
                            singleton = new Singleton();
                        }
                    }
                }
                return singleton;
            }
            
        }
        ```

  2. 静态内部类法。在jdk1.5版本前，双重检查锁形式的单例模式是无法保证线程安全的

     由于编译器优化，在实际执行的时候可能与我们编写的顺序不同。编译器只保证程序执行结果与源代码相同，却不保证实际指令的顺序与源代码相同。这在单线程看起来没什么问题，然而一旦引入多线程，这种乱序就可能导致严重问题。volatile的第二层语义是禁止指令重排序优化，可以从语义上解决这个问题，但是很不幸，禁止指令重排优化这条语义直到jdk1.5以后才能正确工作。
  
       ```java
       public class Singleton {
           public static class Holder {
                private static Singleton singleton = new Singleton();
                
           }
           
           private Singleton() { }
           
           public static Singleton getSingleton() {
               return Holder.singleton;
           }
       }
       ```
  

[你真的会写单例模式吗-Java实现](https://www.cnblogs.com/andy-zhou/p/5363585.html)

## 三、结构型模式

### **1. 适配器模式**

**模式动机：**

客户端可以通过目标类的接口访问它所提供的服务，有时，现有的类它所提供的接口不一定是客户类所期望的，现有的接口需要转化为客户类期望的接口

**定义：**

将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作，其别名为包装器(Wrapper)

**模式结构：**

适配器模式包含如下角色：

* Target：目标抽象类
* Adapter：适配器类
* Adaptee：适配者类
* Client：客户类

1. 对象适配器

   ![image-20230120131503822](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131503822.png)

2. 类适配器

   ![image-20230120131525178](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131525178.png)

### **2. 装饰模式**

**模式动机：**

实现给一个类或对象增加行为，装饰模式以对客户透明的方式动态地给一个对象附加上更多的责任，换言之，客户端并不会觉得对象在装饰前和装饰后有什么不同。装饰模式可以在不需要创造更多子类的情况下，将对象的功能加以扩展。

**定义：**

动态地给一个对象增加一些额外的职责(Responsibility)，就增加对象功能来说，装饰模式比生成子类实现更为灵活。其别名也可以称为包装器(Wrapper)，与适配器模式的别名相同，但它们适用于不同的场合。

**模式结构：**

* Component: 抽象构件
* ConcreteComponent: 具体构件
* Decorator: 抽象装饰类
* ConcreteDecorator: 具体装饰类

![image-20230120131546284](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131546284.png)


### **3. 代理模式**

**模式动机：**

通过引入一个新的对象（如小图片和远程代理对象）来实现对真实对象的操作或者将新的对象作为真实对象的一个替身，这种实现机制即为代理模式，通过引入代理对象来间接访问一个对象，这就是代理模式的模式动机。

**定义：**

给某一个对象提供一个代 理，并由代理对象控制对原对象的引用。

**模式结构：**

* Subject（AbstractObject）: 抽象主题角色
* Proxy（ProxyObject）: 代理主题角色
* RealSubject: 真实主题角色

![image-20230120131602906](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131602906.png)


## 四、行为型模式

### **1. 策略模式**

**模式动机：**

完成一项任务，往往可以有多种不同的方式，每一种方式称为一个策略，我们可以根据环境或者条件的不同选择不同的策略来完成该项任务。

在软件开发中也常常遇到类似的情况，实现某一个功能有多个途径，此时可以使用一种设计模式来使得系统可以灵活地选择解决途径，也能够方便地增加新的解决途径

**定义：**

定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。策略模式让算法独立于使用它的客户而变化

**模式结构：**

* Context: 环境类，持有一个Strategy的引用
* Strategy: 抽象策略类
* ConcreteStrategy: 具体策略类

![image-20230120131620691](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131620691.png)

### **2. 观察者模式**

**模式动机：**

建立一种对象与对象之间的依赖关系，一个对象发生改变时将自动通知其他对象，其他对象将相应做出反应。在此，发生改变的对象称为观察目标，而被通知的对象称为观察者，一个观察目标可以对应多个观察者，而且这些观察者之间没有相互联系，可以根据需要增加和删除观察者，使得系统更易于扩展，这就是观察者模式的模式动机。

**定义：**

观察者模式(Observer Pattern)：定义对象间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新。观察者模式又叫做发布-订阅模式。

**模式结构：**

* Subject: 目标，把所有对观察者对象的引用保存在一个聚集（比如ArrayList对象）里
* ConcreteSubject: 具体目标（具体被观察者）
* Observer: 观察者
* ConcreteObserver: 具体观察者

![image-20230120131638231](https://eduimage1.oss-cn-beijing.aliyuncs.com/img/image-20230120131638231.png)