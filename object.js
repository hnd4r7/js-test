var print = function (s) {
    console.log(s);
};

let { firstName, lastName } = {
    firstName: 'Foo',
    lastName: 'Bar'
}

record = { title: "fff", aa: "fkj" }

const {
    title,
    ...rest
} = record;

console.log(rest)

// 报错
// var obj = {
// 1p: 'Hello World'
//   };

// 不报错
var obj = {
    '1p': 'Hello World',
    'h w': 'Hello World',
    'p+q': 'Hello World'
};
console.log(obj["1p"])

var obj = {

    //这个属性称为“方法”
    p: function (x) {
        return 2 * x;
    }
};

obj.p(1) // 2

var o1 = {};
var o2 = o1;

o1 = 1; // 不影响 o2
o2 // {}

eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}

var foo = 'bar';

var obj = {
    foo: 1,
    bar: 2
};

console.log(obj.foo)  // 1
console.log(obj[foo])  // 2 使用方括号运算符，但是不使用引号，那么foo就是一个变量，指向字符串bar
console.log(obj['foo'])  // 2

var obj = { a: 1, b: 2, c: 3 };

for (var i in obj) {
    console.log('键名：', i);
    console.log('键值：', obj[i]);
}

var obj = {};
if ('toString' in obj) {
    console.log(obj.hasOwnProperty('toString')) // false
}
// 例一
var obj = {
    p1: 1,
    p2: 2,
};
with (obj) {
    p1 = 4;
    p2 = 5;
}
print(obj)