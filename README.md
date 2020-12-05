# ECMASrcipt 6-11

## 第一章 ES介绍

ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的**脚本程序设计语言**

所有的 Ecma 标准列表：http://www.ecma-international.org/publications/standards/Stnindex.htm

由 **TC39** 负责推进 ECMAScript 的发展

**ES6 的优点**

- ES6 的版本变动内容最多
- ES6 加入许多新的 **语法特性**，变成实现更简单、高效
- 前端发展趋势

兼容性：https://www.caniuse.com/?search=ES6

## 第二章 语法规范

### 2.1 let & const

let 语法特点

```javascript
//1. 可以声明变量(和 var 一样)
let a = 3;
let b;

//2. 不能声明重名的变量
// let byq = "巴御前";
// let byq = "巴御前";

//3. 块级作用域 - 包括 if 、else 、while 、for 等{}内声明的 let
{
    // let byq = "巴御前"; //不可以访问
    var byq = "巴御前"; //可以访问
}
console.log(byq);

//4. 不存在变量提升
console.log(c);
// let c = 3; //不可以访问
var c = 3; // undefined

//5. 不影响作用域链
{
    let d = "Abc";
    function fn(){ 
        //访问外一层作用域的变量
        console.log(d);
    }
    fn();
}
```

1. 可以声明变量(和 var 一样)
2. 不能声明重名的变量
3. 块级作用域 - 包括 if 、else 、while 、for 等{}内声明的 let
4. 不存在变量提升
5. 不影响作用域链



let 经典案例 - div 切换颜色

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>点击切换颜色</title>
    <style>
        .item{
            width: 100px;
            height: 100px;
            display: inline-block;
            margin-right: 20px;
            border:3px lightblue solid;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="page-header">点击切换颜色</h2>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <script>
        //获取所有的 div 元素对象
        let items = document.querySelectorAll(".item");
        //遍历并绑定事件
        for(let i = 0; i < items.length; i++){
            items[i].onclick = function(){
                items[i].style.background = 'pink';
            }
        }
    </script>
</body>
</html>
```

1. 对应原本使用的 `var` 变量，因为没有 **块级作用域**，遍历的 3 次 for 循环的 3 次遍历 i 都会保存在 window 全局中
2. 通过 `let` 保存遍历，存在于对应的块级作用域中，当对应的 `onclick()` 事件触发时就会找到对应的块级作用域的变量 i



const 定义常量

```javascript
/*  const 的特性  */
//1. 声明变量 & 一定要赋初始值
const a = "A";

//2. 规范：常量名都使用大写
const BYQ = "巴御前";

//3. 常量的值不能修改
// BYQ = "ABC";

//4. 块级作用域：
{
    const B = "b";
}
// console.log(B); //not defind

//5. 对于数组和对象元素的修改，不能算作对常量的修改，不会报错
const TEAM = ["A","B","C","D"];
TEAM[0] = "C";
// TEAM = "o"; //报错，对象同理
```

1. 声明变量 & 一定要赋初始值 - 和 var 一样
2. 规范：常量名应该都使用大写
3. 常量的值不能修改
4. **块级作用域**
5. 对于数组和对象元素的修改，不能算作时对常量的修改，不会报错

### 2.2 ES6 - 变量的解构赋值

> 解构赋值：ES6 允许**按照一定模式**从数组和对象中提取值，对变量进行赋值

```javascript
/* 解构赋值： ES6 允许 按照一定模式 从数组和对象中提取值，对变量进行赋值  */
//1. 数组的解构
const F4 = ['BYQ','巴御前'];
let [a,b] = F4;
console.log(a); //BYQ
console.log(b); //巴御前

//2. 对象的解构
const C = {
    name: "BAYUQIAN",
    age: "16",
    study: function(){
        console.log("study()...");
    }
}

let{name,age} = C;
console.log(name);
console.log(age);
let{study} = C;
study();

//3. 使用数组解构交换数组内的元素
var [D,E] = [1,2];
[E,D] = [D,E];
console.log(D);
console.log(E);
```

### 2.3 ES6 - 模板字符串

> ES中支持使用 **``** 声明字符串

```javascript
/* ES6 中引入新的声明字符串的方式 `` */
//1. 声明
let str = `BAYUQIAN`;
console.log(typeof str); //String

//2. 特性1：内容中可以直接出现换行符
let str2 = `<ul>
<li></li>
<li></li>
<li></li>
</ul>`;
console.log(str2);

//3. 特性2：变量拼接,使用 `` 的字符串中可以使用 ${} 直接拼接变量
let lovest = '巴御前';
let out = `${lovest}天下第一`;
console.log(out);
```

1. 内容中可以直接出现换行符
2. 可以直接使用 `${}` 引用对应的变量

### 2.4 ES6 - 简化对象的写法

> ES6 允许在大括号{}内，直接写入变量和函数，作为对象的属性和方法

```javascript
/* ES6 允许在大括号{}内，直接写入变量和函数，作为对象的属性和方法 */
let name = "巴御前";
let change = function(){
    console.log('真言·圣观世音菩萨');
}
var servant = {
    name,
    change,
    //在{}内部定义函数时，可以忽略 function 关键字
    OHHH(){
        console.log('A');
    }
}
console.log(servant);
```

- 在 {} 内部定义方法时，可以忽略 function 关键字，这样定义的方法使用的是 **非匿名函数** 定义的

### 2.5 ES6 - 箭头函数

> 语法：变量名 = ([形参1...]) => {函数体};

```javascript
let add = (a,b) => {
    return a + b;
}
console.log(add(1,2)); //3

//特性1：this 是静态的，this 始终指向函数声明时所在作用域下的 this 的值
function getName(){
    console.log(this.name);
};
let getName2 = () => {
    console.log(this.name);
};

window.name = "BYQ";
var obj = {
    name: "OKK"
};
//直接调用
getName(); //BYQ
getName2(); //BYQ
//通过 call 修改 this 对象进行调用
getName.call(obj); //OKK
getName2.call(obj); //BYQ

//特性2：不能作为构造函数
let Person = (name,age) => {
    this.name = name,
        this.age = age
}
// let me = new Person("BYQ",16); //Person is not a constructo
// console.log(me);

//特性3：没有 arguments 变量
let fn = () => {
    // console.log(arguments); //no defind
};
fn(1,2);

//特性4：箭头函数的缩写
//4.1 省略小括号，当形参有且只有一个时
let add2 = n => {
    return n + n;
}
console.log(add2(2));

//4.2 省略花括号，当语句有且只有一条时，同时忽略 return 语句，该语句的执行结果就是函数的返回值
let pow = n => n * n;
console.log(pow(6));
```

特性：

1. this 是**静态**的，this 始终指向函数声明时所在作用域下的 this 的值
2. 不能作为构造函数
3. 没有 arguments 变量
4. 箭头函数的缩写
   - 省略小括号，当形参有且只有一个时
   - 省略花括号，当语句有且只有一条时，同时忽略 return 语句，该语句的执行结果就是函数的返回值

应用场景

```javascript
/* 需求1：点击 div 后 2s 颜色变换成粉色 */
let ad = document.querySelector("#ad");
ad.addEventListener('click',function(){
    setTimeout(
        //使用原生函数定义，参考运行时调用的环境 this = window
        // function(){
        //     this.style.background = "pink"; 
        // }
        //使用箭头函数定义时 this 为静态的
        () => {
            this.style.background = "pink";
        }
        ,2000)
})

/* 需求2：返回数组中的偶数元素 */
const ARR = [1,2,5,9,100,80];
const result = ARR.filter(item => item % 2 === 0);
console.log(result);

```

1. 箭头函数适合于 this 无关的函数，如：定时器，数组的方法回调
2. 箭头函数不适合于 this 有关的函数，如：DOM 事件回调，对象的方法定义

### 2.6 参数默认值

> ES6 允许函数参数赋值为初始值

```javascript
//规范：将带默认值的参数放在后面
let add = (a,b,c=10) => a + b + c;
console.log(add(1,2)); //13 


//2. 与解构赋值结合 - 直接使用时也可以设置初始值
function connect({host='127.0.0.1',name,password,port}){
    console.log(host);
    console.log(name);
    console.log(password);
    console.log(port);
}
connect({
    name:'BYQ',
    password:123456,
    port:'8080'
})
```

1. **规范**：将带默认值的参数放在后面
2. 与解构赋值结合 - 直接使用时也可以设置初始值

### 2.7 rest 参数

> ES6 中引入 rest 参数，用于获取函数的实参，用来代替 arguments

```javascript
// ES5 获取实参的方式
function data(){
    console.log(arguments);
}
data(1,2,6,8,10);

// rest 参数; 注意：rest 参数只能放在函数参数的最后一个
function args(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args); //对于 rest 参数，仍可以用 filter some erery map 等
}
args("BYQ","BYQ","BYQ","BYQ","BYQ");
```

### 2.8 spread 扩展运算符

#### ... 扩展运算符

> ... 扩展运算符能将 [数组] 转换为逗号,分隔 [参数序列]

```javascript
//1. 声明一个数组
let arr = ['BYQ','BYQ','BYQ'];
//2. 定义一个函数
function chunwan(){
    console.log(arguments);
}
//3. 调用函数,使用 ... 将数组转换为 [参数序列]
chunwan(...arr);
```

1. 不使用 ...扩展运算符

   ![image-20201204103949479](README.assets/image-20201204103949479.png)

2. 使用 ...扩展运算符

   ![image-20201204104022221](README.assets/image-20201204104022221.png)

#### ... 扩展运算符的应用

```javascript
//1. 数组的合并
let arrA = ['A','B'];
let arrB = ['C','D'];
//1.1 ES5 的写法
let arrC = arrA.concat(arrB);
console.log(arrC);
//1.2 ES6 的写法
let arrD = [...arrA,...arrB];
console.log(arrD);

//2. 数组的克隆
let BYQ = ['B','Y','Q'];
let ABC = [...BYQ]; //浅拷贝
console.log(ABC);

//3. 将伪数组转换为多个数组
var divs = document.querySelectorAll("div");
console.log(divs);
var divArrs = [...divs];
console.log(divArrs);
```

### 2.9 Symbol

ES6 引入了一种**新的数据类型 Symbol**，表示第一无二的值，作为 JavaScript 语言的第七种数据类型，一种类似于字符串的数据类型

特点

1. Symbol 的值是唯一的，用来解决命名冲突的问题
2. Symbol 的值不能与其他数据进行运算
3. Symbol 定义的对象属性不能使用 for..in 循环遍历，但是可以用 `Reflect,ownKeys` 来获取所有对象的键名

```javascript

```





















