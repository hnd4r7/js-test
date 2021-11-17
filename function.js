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