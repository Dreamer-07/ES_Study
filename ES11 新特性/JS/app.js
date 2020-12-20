//静态导入
// import * as m1 from './m1.js' 

let btn = document.querySelector('#btn');
btn.onclick = function(){
    //import('模块路径') 只在需要的时候在导入对应的模块
    import("./m1.js").then(module => { //返回值是一个 Promise 对象
        //该 Promise 对象成功的值就是导入模块文件中暴露的接口的对象集合
        console.log(module);
        module.seyHello();
    })
}