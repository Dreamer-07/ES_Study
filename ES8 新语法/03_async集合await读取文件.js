//1. 引入 fs 模块
let fs = require('fs');

//2. 定义异步任务
function readChuShiBiao(){
    return new Promise((resolve,reject) => {
        fs.readFile("./resouces/出师表.md",(err,data) => {
            //如果出现 err 就将 promise 状态修改为失败
            if(err) reject(err);
            resolve(data);
        });
    });
}

function readYueYangLouJi(){
    return new Promise((resolve,reject) => {
        fs.readFile("./resouces/岳阳楼记.md",(err,data) => {
            //如果出现 err 就将 promise 状态修改为失败
            if(err) reject(err);
            resolve(data);
        });
    });
}

function readChangGeXing(){
    return new Promise((resolve,reject) => {
        fs.readFile("./resouces/长歌行.md",(err,data) => {
            //如果出现 err 就将 promise 状态修改为失败
            if(err) reject(err);
            resolve(data);
        });
    });
}

//3. 使用 async + await 执行异步任务
async function main(){
    try{
        //使用 await 执行异步任务并获取结果
        let csb = await readChuShiBiao();
        let yylj = await readYueYangLouJi();
        let cgx = await readChangGeXing();
        
        console.log(csb.toString());
        console.log(yylj.toString());
        console.log(cgx.toString());
    } catch (e) {
        console.warn(e);
    }
    console.log($);
}

main();
