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

//Object对象本身的方法
Object.print = function (o) { console.log(o) };
Object.print(222)

//Object的实例方法
Object.prototype.print2 = function (o) {
    console.log(this);
    console.log(o)
};
var a = {}
a.print2("ffffff")

var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

obj instanceof Object // true

var obj = new Object();
obj.print2("obj")

var obj = {
    p1: 123,
    p2: 456
};

print(Object.keys(obj)) // ["p1", "p2"]
print(Object.getOwnPropertyNames(obj)) // ["p1", "p2"]

//不少方法定义在Object.prototype对象。它们称为实例方法，所有Object的实例对象都继承了这些方法。
/**
Object.prototype.valueOf()：返回当前对象对应的值。
Object.prototype.toString()：返回当前对象对应的字符串形式。
Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。
*/

obj.valueOf() === obj // true
var obj = new Object();
obj.valueOf = function () {
    return 2;
};

1 + obj // 3

var obj = new Object();

obj.toString = function () {
    return 'hello';
};
obj + ' ' + 'world' // "hello world"


var type = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
].forEach(function (t) {
    type['is' + t] = function (o) {
        return type(o) === t.toLowerCase();
    };
});

print(type.isObject({})) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true



var obj = {
    p: 'hello'
};
Object.freeze(obj);
obj.p = 'world';
obj.p // "hello"
obj.t = 'hello';
obj.t // undefined
delete obj.p // false
obj.p // "hello"

var obj = { p: 'a' };
var objProperty = Object.getOwnPropertyDescriptor(obj, 'p')
print(objProperty)
