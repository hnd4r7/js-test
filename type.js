console.log(typeof 123) // "number"
console.log(typeof '123') // "string"
console.log(typeof false) // "boolean"
function f(){}
console.log(typeof f)
console.log(typeof undefined)
console.log(typeof v)

typeof window // "object"
typeof {} // "object"
typeof [] // "object"

var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true

typeof null // "object" 历史兼容

undefined == null
// true

console.log(undefined == false)
/**
undefined
null
false
0
NaN
""或''（空字符串）
 * 
 */
if(!undefined && !null){
    console.log("undefined || null is converted to false in if statement")
}

if([] && {}){
    console.log("empty object or array is true")
}

console.log(5+null) //null == 0
console.log(5+undefined) //undefined == NaN

console.log( 1 === 1.0) // JavaScript 内部，所有数字都是以64位浮点数形式储存
console.log(0.1 + 0.2 === 0.3 )// false
console.log(0.3 / 0.1)
console.log((0.3 - 0.2) === (0.2 - 0.1))

console.log(Math.pow(2, 1024)) // Infinity   JavaScript 能够表示的数值范围为21024到2-1023

console.log(parseInt('    123  ')) // 123
console.log(parseInt(1.23))

parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15
parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1
parseInt('0x10') // 16
parseInt('011') // 11

// 对于那些会自动转为科学计数法的数字，parseInt会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。 
parseInt(1000000000000000000000.5) // 1
// 等同于
parseInt('1e+21') // 1

parseInt(0.0000008) // 8
// 等同于
parseInt('8e-7') // 8

parseInt('1000', 8) // 512
parseInt('1000', 2) // 8

isNaN(NaN) // true
isNaN('Hello') // true //isNaN只对数值有效
isNaN({}) // true
isNaN(Number({})) // true
isNaN(['xzy']) // true
isNaN(Number(['xzy'])) // true

isNaN([]) // false
isNaN([123]) // false
isNaN(['123']) // false

function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}

isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
