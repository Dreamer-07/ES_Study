//入口文件 - 在这里导入需要的模块

import * as m1 from './m1.js';
import * as m2 from './m2.js';
import * as m3 from './m3.js';

console.log(m1);
console.log(m2);
console.log(m3);

import $ from 'jquery'; //导入 npm 包，包名为安装时使用的
$('body').css('background','pink');