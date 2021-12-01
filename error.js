var print = function (s) {
    console.log(s);
};

var err = new Error('出错了');
print(err.message) // "出错了"

console.log(1);
setTimeout(function(){print(8)},1000);
console.log(3);