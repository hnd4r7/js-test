//读取函数内部变量
// 闭包就是函数f2，即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如f2记住了它诞生的环境f1，所以从f2可以得到f1的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
function f1() {
    var n = 999;
    function f2() {
        console.log(n);
    }
    return f2;
}

var result = f1();
result(); // 999

/**
 * 闭包（上例的inc）用到了外层变量（start），导致外层函数（createIncrementor）不能从内存释放。只要闭包没有被垃圾回收机制清除，外层函数提供的运行环境也不会被清除，它的内部变量就始终保存着当前值，供闭包读取。
 */
function createIncrementor(start) {
    return function () {
        return start++;
    };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7
/**
 * 函数Person的内部变量_age，通过闭包getAge和setAge，变成了返回对象p1的私有变量。
 * 注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。
 */
function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25