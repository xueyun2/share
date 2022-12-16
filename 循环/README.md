# 单循环
## 求1-100之间所有的和
```javaScript
let sum = 0;
for(let i=0; i<100; i++){
    sum+=i
}
console.log(sum)
```
## 求1-100之间所有的平均值
```javaScript
let sum = 0;
let average = 0;
for(let i=0; i<100; i++){
    sum+=i
}
average = sum/100;
console.log(average)
```
# 求1-100之间所有偶数和奇数的和
```javascript
let baseSum = 0;
let evenSum = 0;
for(let i=1;i<100;i++){
    if(i%2===0){
        evenSum+=i
    }else{
        baseSum+=i
    }
}
console.log('偶数：'+ evenSum)
console.log('基数：'+ baseSum)
```
# 嵌套循环
## 输出倒三角
```javascript
let str = ''
for(let i=0;i<10;i++){
    for(let j=i;j<10;j++){
        str+='口'
    }
    str+='\n'
}
console.log(str)
```
## 输出正三角
```javascript
let str = ''
for(let i=0;i<10;i++){
    for(let j=0;j<i;j++){
        str+='口'
    }
    str+='\n'
}
console.log(str)
```
## 输出正方形
```javascript
let str = ''
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        str+='口'
    }
    str+='\n'
}
console.log(str)
```
## 99乘法口诀表
```javascript
let str = '';
for (let i = 1; i <= 9; i++) {
    for (let g = 1; g <= i; g++) {
        str += g + '*' + i + '=' + (g * i) + '  '
    }
    str += '\n'
}
console.log(str)
```