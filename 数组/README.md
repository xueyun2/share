<!---->
[等腰三角形案例](./Isoscelestriangle.md)
# 属性
获取当前数组长度
- `length`
```javascript
let arr = ['苹果','菠萝','哈密瓜']
console.log(arr.length) //输出：3
```
# 方法
- `copyWithin()`
- `fill()`
- `pop()`
- `push()`
- `reverse()`
- `shift()`
- `sort()`
- `splice()`
- `unshift()`


## copyWithin()
方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
### 参数
`target`**参数1：**
将要复制的元素放到此位置，从下标`0`开始计算

`start`**参数2：**
需要复制的元素下标，从`0`开始计算

`end`**参数3：**
设置复制的结束位置，如果不设置结束位置将会一直向后复制。
```javascript
let array1 = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];

console.log(array1.copyWithin(0, 3, 4));
//输出：['柠檬', '西瓜', '茄子', '柠檬', '香瓜']
console.log(array1.copyWithin(1, 3));
//输出：['柠檬', '柠檬', '香瓜', '柠檬', '香瓜']
```
## fill()
方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
### 参数
`value`**参数1：**
要设置的元素值

`start`**参数2：**
元素需要填充的位置，从`0`开始计算

`end`**参数3：**
设置值的最后位置，如果不设置结束位置将会一直向后填充。

 ```javascript
let array1 = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];

console.log(array1.fill(0, 3, 4));
//输出：['哈密瓜', '西瓜', '茄子', 0, '香瓜']
console.log(array1.fill(1, 3));
//输出：['哈密瓜', '西瓜', '茄子', 1, 1]
console.log(array1.fill(6));
//输出：[6, 6, 6, 6, 6]
 ```
## pop()
删除数组的最后一个元素，最终返回被删除的元素。
```javascript
let array1 = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
//接收被删除的元素
let popped = array1.pop(); 
console.log(popped)//香瓜
console.log(array1)//['哈密瓜', '西瓜', '茄子', '柠檬']
```
## push()
方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
```javascript
let array1 = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let arrayLength = array1.push('橘子'); 
console.log(array1)
//输出：['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜','橘子']
console.log(arrayLength)
//输出：最新数组的长度6
```
## reverse()
方法将数组中元素的位置**颠倒**，并返回该数组。数组的**第一个**元素会变成最后一个，数组的最**后一个**元素变成第一个。该方法会改变原数组。
```javascript
let array1 = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let arrayLength = array1.reverse(); //返回颠倒后的数组
console.log(array1)
//输出：['香瓜', '柠檬', '茄子', '西瓜', '哈密瓜']
```
## shift()
方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。
```javascript
let array1 = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let popped = array1.shift(); //接收被删除的元素
console.log(popped)//哈密瓜
console.log(array1)//[ '西瓜', '茄子', '柠檬','香瓜']
```
## sort()
方法用**原地算法**对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 `UTF-16` 代码单元值序列时构建的
### 默认排序
```javascript
let array1 = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let popped = array1.sort();
console.log(popped)
//输出：['哈密瓜', '柠檬', '茄子', '西瓜', '香瓜']
```
### 参数
用来指定按某种顺序进行排列的函数。
函数返回两个参数，`a`,`b`,用于比较
`compareFn(a,b)`

- 如果 `compareFn(a, b)` 大于 0，b 会被排列到 a 之前。
- 如果 `compareFn(a, b)` 小于 0，那么 a 会被排列到 b 之前。
- 如果 `compareFn(a, b)` 等于 0，a 和 b 的相对位置不变。备注：`ECMAScript` 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 `Mozilla` 在 2003 年之前的版本）；
- `compareFn(a, b)` 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

| `compareFn(a, b)`返回值 | 排序顺序               |
| ----------------------- | ---------------------- |
| > 0                     | `a` 在 `b` 后          |
| < 0                     | `a` 在 `b` 前          |
| === 0                   | 保持 `a` 和 `b` 的顺序 |

所以，比较函数格式如下：

```javascript
function compareFn(a, b) {
  if (在某些排序规则中，a 小于 b) {
    return -1;
  }
  if (在这一排序规则下，a 大于 b) {
    return 1;
  }
  // a 一定等于 b
  return 0;
}
```
要比较数字而非字符串，比较函数可以简单的用 `a` 减 `b`，如下的函数将会将数组升序排列（如果它不包含 `无限大` 和 `NaN`

```javascript
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  console.log(a-b,'a：'+a,'b：'+b)
  return a - b;
});
console.log(numbers);
```
执行顺序
```javascript
-2  'a：2' 'b：4'
3   'a：5' 'b：2'
1   'a：5' 'b：4'
-3  'a：1' 'b：4'
-1  'a：1' 'b：2'
-1  'a：3' 'b：4'
1   'a：3' 'b：2'
```

## splice()
方法通过**删除**或**替换**现有元素或者原地**添加**新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
### 参数
```javaScript
splice('start', 'deleteCount', 'item1', 'item2', 'itemN')
```
- `start`:
指定修改的开始位置（从 0 计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从 -1 计数，这意味着 `-n` 是倒数第 `n` 个元素并且等价于 `array.length-n`）；如果负数的绝对值大于数组的长度，则表示开始位置为第 0 位。

- `deleteCount`:可选
整数，表示要移除的数组元素的个数。如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。如果 `deleteCount` 被省略了，或者它的值大于等于`array.length - start`(也就是说，如果它大于或者等于`start`之后的所有元素的数量)，那么`start`之后数组的所有元素都会被删除。如果 `deleteCount` 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
- `item1`可选
要添加进数组的元素，从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。
- 返回值
由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
- 描述：
如果添加进数组的元素个数不等于被删除的元素个数，数组的长度会发生相应的改变。

从**索引** `2` 的位置开始**删除** `0` 个元素，**插入**"麻瓜"
```javascript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];

let removed = myFish.splice(2, 0, '麻瓜');
console.log(myFish,'返回值：'+ myFish)

```
从**索引** `2` 的位置开始**删除** `0` 个元素，**插入**"麻瓜"，"橘子"
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let removed = myFish.splice(2, 0, '麻瓜','橘子');
console.log(myFish,'返回值：'+ myFish)
```

从**索引** `2` 的位置开始**删除** `1`个元素，**插入**"葫芦瓜"
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let removed = myFish.splice(2, 1, '葫芦瓜');
console.log(myFish,'返回值：'+ myFish)
```

从**索引** 0 的位置开始**删除** 2 个元素，**插入**"葫芦瓜"、"西红柿"和"苹果"
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let removed = myFish.splice(0, 2, '葫芦瓜','西红柿','苹果');
console.log(myFish,'返回值：'+ myFish)
```
从**索引** 2 的位置开始**删除** 2 个元素
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let removed = myFish.splice(myFish.length-3, 2);
console.log(myFish,'返回值：'+ myFish)
```
从**索引** -2 的位置开始**删除** 1 个元素
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let removed = myFish.splice(-2, 1);
console.log(myFish,'返回值：'+ myFish)
```
从**索引** 2 的位置开始**删除**所有元素
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let removed = myFish.splice(2);
console.log(myFish,'返回值：'+ myFish)
```
## unshift()
方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**。
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜'];
let newIndex = myFish.unshift('芒果', '罗汉果')
console.log('最新长度:'+newIndex,'新数组:'+myFish);
```
# 遍历
## for
```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜']
for(let i=0;i<myFish.length;i++){
  console.log(myFish[i])
}
myFish[0]
myFish[1]
myFish[2]

// 哈密瓜
// 西瓜
// 茄子
// 柠檬
// 香瓜
```
## forEach()
### 参数
`callbackFn()`
为数组中每个元素执行的函数。
函数调用时带有以下参数：
- `element`:数组中正在处理的当前元素。
- `index`:数组中正在处理的当前元素的索引。

```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜']
myFish.forEach(function(item,index){
  console.log(item,index)
})
// 哈密瓜 0
// 西瓜 1
// 茄子 2
// 柠檬 3
// 香瓜 4
```
## for/in

```javaScript
let myFish = ['哈密瓜', '西瓜', '茄子', '柠檬', '香瓜']
for(let key in myFish){
  console.log(key,myFish[key])
}
// 0 哈密瓜
// 1 西瓜
// 2 茄子
// 3 柠檬
// 4 香瓜
```
# 例子
模拟购物车
```javaScript
let cart = []
//向购物车添加商品
function addCart(goods){
  cart.push(goods)
}
//删除购物车商品
function removeCart(goods){
  for(let i=0;i<cart.length;i++){
    if(cart[i]===goods){
        cart.splice(i,1)
        break;
    }
  }
}
//查看购物车所有商品
function viewCart(){
  console.log(cart)
}
//清空购物车
function empty(){
  cart = []
}
```
