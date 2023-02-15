- [1. 节点](#1-节点)
- [2. 元素节点](#2-元素节点)
- [3. 文本节点](#3-文本节点)
- [4. 属性节点](#4-属性节点)
- [5. 获取元素](#5-获取元素)
  - [5.1. getEmelentById](#51-getemelentbyid)
  - [5.2. getElementsByTagName](#52-getelementsbytagname)
  - [5.3. getElementsByClassName](#53-getelementsbyclassname)
- [6. 设置元素属性](#6-设置元素属性)
  - [6.1. getAttribute](#61-getattribute)
  - [6.2. setAttribute](#62-setattribute)
- [7. 小例子](#7-小例子)

# 1. 节点
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>购物清单</h1>
    <p>别忘了买这些东西</p>
    <ul id="list">
        <li class="item">芒果</li>
        <li class="item">拖鞋</li>
        <li class="item">水杯</li>
        <li class="item">橘子</li>
    </ul>
</body>
</html>
```
节点对象模型
![DOM模型](img/model.png)

# 2. 元素节点
元素节点就是我们使用的`ul`，`h1`，`p`，等等，这些标签名称就是**元素名称**。
# 3. 文本节点
文本节点`p`包裹的“别忘了买这些东西”的就是文本元素。
文本节点总是被包含在元素节点的内部。但并非所有的元素节点都包含。
# 4. 属性节点
属性结点用来对元素做出更具体的描述。例如，几乎所有的元素都有一个 `title` 属性，而我们可以利用这个属性对包含在元素里的东西做出准确的描述：`<p title="描述文字">带描述文字的P</p>`。
元素上的`class`，`id`，等都是元素的属性。
# 5. 获取元素
有3种方法获取`DOM`元素，分别是`ID`，通过标签名字和类名来获取。
## 5.1. getEmelentById
此方法存在`document`文档中。调用时`document.getEmelentById(id)`，接受一个参数元素`id`名称
```javascript
console.log(typeof document.getElementById('list')) //object
```
## 5.2. getElementsByTagName
接收一个标签名称，返回文档中的所有该标签的节点以数组的形式返回。
```javascript
console.log(document.getElementsByTagName('li')) //object
```
## 5.3. getElementsByClassName
接收一个`class`名，返回文档中的所有该`class`的节点以数组的形式返回。
```javascript
console.log(document.getElementsByClassName('item')) //object
```
# 6. 设置元素属性

## 6.1. getAttribute
此方法在元素对象上。
获取元素属性方法接受一个**参数**，当前元素上的属性名称，**返回**元素属性值。
```javascript
let Elem = document.getElementById('list')
let title = Elem.getAttribute('title')
console.log(title, '描述文字')
```
## 6.2. setAttribute
方法接收两个参数，**参数1**：需要设置的属性名称，**参数2**：要设置的值
```javascript
let Elem = document.getElementById('list')
let title2 = Elem.setAttribute('title','我是新设置的值')
console.log(title, '描述文字')
```
# 7. 小例子
```javascript

```