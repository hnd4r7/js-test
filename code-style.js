/**
   JavaScript 有两个表示相等的运算符：“相等”（==）和“严格相等”（===）。
    相等运算符会自动转换变量类型，造成很多意想不到的情
    建议不要使用相等运算符（==），只使用严格相等运算符（===）。
 */
0 == ''// true
1 == true // true
2 == true // false
0 == '0' // true
false == 'false' // false
false == '0' // true
' \t\r\n ' == 0 // true