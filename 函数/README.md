# 计算两个数的和
```javaScript
function num(x,y){
    return x + y
}
let total = num(2,3)
console.log(total)
```
# 判断偶数奇数
```javaScript
function ifNum(num){
    if(num%2===0){
        return '你传入的是一个偶数'
    }else if(num%2!=0){
        return '你传入的是一个奇数'
    }else{
        return '你传入的啥也不是'
    }
}
let total = ifNum(1)
let total2 = ifNum(4)
console.log(total)
```
# 任意数之间的和
```javascript
function num(x,y){
    let num = 0;
    for(let i=x;i<=y;i++){
        num+=i
    }
    return '和为'+num
}
let str = num(1,6)
let str2 = num(1,8)
console.log(num(1,6))
```
# 输出任意数之间的奇数和，与偶数和。
```javaScript
function unm(x,y){
    let baseSum = 0;
    let evenSum = 0;
    for(let i=x; i<=y; i++){
        if(i%2===0){
            evenSum+=i
        }else{
            baseSum+=i
        }
    }
    return '偶数和；'+evenSum+'奇数和:'+baseSum
}
console.log(unm(1,6))
```


# 抽奖

```javaScript
let arr = ['谢谢惠顾','iPhone手机一部','谢谢惠顾','10元现金','水杯一个','手游手柄一个']
function lottery(){
    //使用随机数对数组下标进行随机选择
    let index = Math.floor(Math.random() * arr.length);
    return arr[index]
}
let conut = lottery()
console.log(conut)
```

# 空调遥控器
- 开关
- 调节温度
- 调节冷暖
- 规定温度不可以超过30°,不可以低于0°。
- 给空调一些默认状态
- 最终返回空调状态
```javascript
/**
 * 定义空调
 */
let airConditioner = {
    'isShow': false,//开关
    'temperature':0,//当温度
    'HotCold':['制冷','制热']
}
/**
 * 遥控器
 * 更具以上功能定义所需要的参数
 * 分别：开关，温度，冷暖
 */
//x：开关，y:温度，z:冷暖
function remoteControl(x,y,z){
    //设置遥控默认状态
    x = x || airConditioner.isShow
    y = y || airConditioner.temperature
    z = z || 0
    airConditioner.isShow = x;
    if(y>30){
        return '你想热死吗？'
    } 
    if(y<=0){
        return '你想冷死吗？'
    }
    airConditioner.temperature = y;
    return '当前空调状态：'+' 开启状态：'+airConditioner.isShow+' 当前温度：'+airConditioner.temperature+' 当前模式：'+airConditioner.HotCold[z]

}
console.log(remoteControl(true,25,0)) //输出：当前空调状态： 开启状态：true 当前温度：25 当前模式：制冷
```