var print = function (s) {
    console.log(s);
};

var err = new Error('出错了');
print(err.message) // "出错了"

console.log(1);
setTimeout(function () { print(8) }, 1000);
console.log(3);

function throwit() {
    throw new Error('');
}

function catchit() {
    try {
        throwit();
    } catch (e) {
        console.log(e.stack); // print stack trace
    }
}

// catchit()
// Error
//    at throwit (~/examples/throwcatch.js:9:11)
//    at catchit (~/examples/throwcatch.js:3:9)
//    at repl:1:5

var err1 = new Error('出错了！');
var err2 = new RangeError('出错了，变量超出有效范围！');
var err3 = new TypeError('出错了，变量类型无效！');

console.log(err1.message) // "出错了！"
err2.message // "出错了，变量超出有效范围！"
err3.message // "出错了，变量类型无效！"

function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
