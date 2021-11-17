const msg = `
hello
world!
`
console.log(msg)

console.log(
    (function () { /*
    line 1
    line 2
    line 3
    */}).toString().split('\n').slice(1, -1).join('\n')

);
var s = '\u00A9';
console.log(s)

var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"