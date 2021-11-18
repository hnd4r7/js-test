function greet({ name = 'Foo' } = {}) { //Defaulting name to Foo
    console.log(`Hello ${name}!`);
}

greet() // Hello Foo
greet({ name: 'Bar' }) // Hi Bar

var print = function (s) {
    console.log(s);
};

var add = new Function(
    'x',
    'y',
    'return x + y'
);

// 等同于
function add(x, y) {
    return x + y;
}

var foo = new Function(
    'return "hello world";'
);

function f1(a, b) { }
print(f1.name) // "f1"
print(f1.length) // 函数参数
print(f1.toString) // 函数体


var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1, arr.length - 1).join('\n');
};

function f() {/*
    这是一个
    多行注释
  */}

print(multiline(f));

var f = function (a, b) {
    'use strict'; // 开启严格模式
    arguments[0] = 3;
    arguments[1] = 2;


    // arguments 大多数 DOM 元素集，还有字符串 属于  “类似数组的对象”
    var args = Array.prototype.slice.call(arguments);

    // 或者
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    return a + b;
}

print(f(1, 1)) // 5

var f = function () {
    console.log(arguments.callee === f);
}

print(f()) // true