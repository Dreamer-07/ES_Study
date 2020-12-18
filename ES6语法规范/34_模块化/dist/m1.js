'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test1 = test1;
//分别暴露
//使用 export 定义对外暴漏接口
var name = exports.name = '巴御前';

function test1() {
    console.log('export 测试接口');
}