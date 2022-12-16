# 基本使用
```javascript
//创建
let person = {};
//赋值
person.name = '张三';              //person对象属性
person.list = ['水果','香蕉'];     //person数组
person.fun = function(){            //person方法
    console.log('我的名字叫：'+this.name)
}
//调用
console.log(person['name'])
console.log(person.name)
console.log(person.list[0])
person.fun()

```
# 遍历
- `Object.keys()`  返回对象**键**，以数组的形式
- `Object.values()`返回对象**值**，以数组的形式
- `Object.entries()` 返回对象中的键和值以数组的方式返回`[['键':'值'],['键':'值']]`
- `for/in` 遍历对象
- `in`检测某个属性是否存在
- `delete`删除对象某个属性
  
## Object.keys()
返回对象**键**，以数组的形式
```javascript
let obj = {
    name:'名称',
    age:65,
    height:200
}
console.log(Object.keys(obj)) //['name', 'age', 'height']
```
## Object.values()
返回对象**值**，以数组的形式
```javascript
let obj = {
    name:'名称',
    age:65,
    height:200
}
console.log(Object.values(obj)) //['名称', 65, 200]
```
## Object.entries()
返回对象**值**，以数组的形式
```javascript
let obj = {
    name:'名称',
    age:65,
    height:200
}
console.log(Object.entries(obj)) //[['name', '名称'], ['age', 65], ['height', 200]]
```
## for/in
遍历对象
```javascript
let obj = {
    name:'名称',
    age:65,
    height:200
}
for(let key in obj){
    console.log(obj[key])
}
//名称
//65
//200
```
## in
检测一个属性是否存在返回布尔值。
```javascript
let obj = {
    name:'名称',
    age:65,
    height:200
}
console.log('name' in obj ) //true
console.log('size' in obj ) //false
```
## delete
删除对象中某个属性值
```javascript
let obj = {
    name:'名称',
    age:65,
    height:200
}
console.log(delete obj.name ) //true
console.log(obj) //{age: 65, height: 200}
```
# 小任务
## 创建一个对象,用于描述任何物品
执行操作
- 删除任意一个属性
- 新增任意一个属性
```javascript

```
## 检查空对象
```javascript

```
# 应用场景

![商品列表](./%E5%88%97%E8%A1%A8.png)

假设渲染商品列表
```javascript
//数据
let list = [
    {
        title:'戴尔dell成就3710台式机电脑主机8英寸',
        config:{
            cpu:'i5',
            gpu:'集成显卡',
            size:'15.6英寸'
        },
        price:'￥4799',
        type:'自营',
        buyType:'抢购',
        shopName:'联想京东自营旗舰店',
        image:'图片地址'
    },
    {
        title:'联想笔记本电脑 小新Air14 全面屏商务办公本',
        config:{
            cpu:'i5',
            gpu:'集成显卡',
            size:'15.6英寸'
        },
        price:'￥4799',
        type:'自营',
        buyType:'预订',
        shopName:'联想京东自营旗舰店',
        image:'图片地址'
    }
]
//渲染
for(let i=0;i<list.length;i++){
    console.log(`标题：${list[i].title}\n
                 CPU:${list[i].config.cpu}\n
                 显卡:${list[i].config.gpu}\n
                 尺寸：${list[i].config.size}\n
                 价格：${list[i].price}\n
                 运营类型：${list[i].type}\n
                 购买类型：${list[i].buyType}\n
                 店铺名称：${list[i].shopName}\n
                 产品图：${list[i].image}\n
                 __________________________________\n
            `)
}
```