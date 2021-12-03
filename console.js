/**
 * %s 字符串
%d 整数
%i 整数
%f 浮点数
%o 对象的链接
%c CSS 格式字符串
 */
var number = 11 * 9;
var color = 'red';

console.log('%d %s balloons', number, color);

['log', 'info', 'warn', 'error'].forEach(function (method) {
    console[method] = console[method].bind(
        console,
        new Date().toISOString()
    );
});

console.log("出错了！");
// 2014-05-18T09:00.000Z 出错了！

var languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
];

console.table(languages);
console.dir({f1: 'foo', f2: 'bar'})

console.trace()

