- [1. 表单](#1-表单)
  - [1.1. 取消layui样式](#11-取消layui样式)
  - [1.2. 表单验证](#12-表单验证)
    - [1.2.1. 示例](#121-示例)
  - [1.3. 自定义验证规则](#13-自定义验证规则)
    - [1.3.1. 在注册场景下常见的验证两次密码是否一致](#131-在注册场景下常见的验证两次密码是否一致)
    - [1.3.2. 主动触发验证](#132-主动触发验证)
  - [1.4. 赋值/取值](#14-赋值取值)
  - [1.5. 提交事件](#15-提交事件)

# 1. 表单
## 1.1. 取消layui样式
在标签上添加`lay-ignore`属性可以忽略layui的默认样。
一般用于设计稿表单与`layui`表单风格不统一的情况下使用。
```html
<input lay-ignore>
```
## 1.2. 表单验证
属性为节点属性`<input lay-verify="required|phone">`

| 属性         | 默认值                                                                                                                                                       | 描述                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `lay-verify` | `required`必填项 </br></br>`phone`手机号</br></br> `emai`邮箱</br></br> `url`网址</br></br> `number`数字</br></br>`date`日期</br></br>`identity`身份证 </br> | 设置表单项的验证规则，支持单条或多条规则（多条用` | `分隔） |

### 1.2.1. 示例
所有`layui`表单基础结构都又父级`layui-from`包裹。可以使用`from`或者`div`只要父级存在`layui-from`类名即可。

**实例一：**
当点击提交按钮时触发验证`input`框中输入的是否为一个邮箱账号。
```html
<form class="layui-form">
  <input type="text" class="layui-input" lay-verify="email">
  <button class="layui-btn" lay-submit>提交</button>
</form>
```
**实例二：**
验证`input`为必填项，且必须是一个邮箱。
```html
<div class="layui-form">
  <input type="text" class="layui-input" lay-verify="required|email">
  <button class="layui-btn" lay-submit>提交</button>
</div>
```
## 1.3. 自定义验证规则

在`layui`默认的验证规则中无法满足我们的验证需求情况下，可以自定义验证规则。
用到`from`模块中的`verify`方法，方法接收一个对象。`form.verify({})`
### 1.3.1. 在注册场景下常见的验证两次密码是否一致

- **思路：** 获取上一个`input`中的值与最后一个`input`中的值进行比较。不一致则返回提示文本。
- 我们在`verify`函数中定义了一个`confirmPassword`函数，该函数用来验证两次密码是否一致。
- 在第二次输入密码中`lay-verify="required|confirmPassword"`添加该验证。
- 在定义该验证中回调函数将返回该输入框上的值，与该输入框`DOM`元素`functon(val:值,item:DOM元素)`。
```html
<div class="layui-from">
    <input id="reg-password" type="password" class="layui-input" lay-verify="required">
    <input type="password" class="layui-input" lay-verify="required|confirmPassword">
    <button class="layui-btn" lay-submit>提交</button>
</div>
<script>
    layui.use(function(){
        var form = layui.form;
        form.verify({
            // 确认密码，
            confirmPassword: function(value, item){
                //获取上一个input中输入的密码值。
                var passwordValue = $('#reg-password').val();
                //使用条件语句判断需要确认的值是否一致。
                if(value !== passwordValue){
                    return '两次密码输入不一致';
                }
            }
        })
    })
</script>
```
### 1.3.2. 主动触发验证

在表单中想单独触发一个元素的验证，或者整个表单的验证场景下。
- 用`from`模块中的`validate`方法,`form.validate('要验证表单的ID或class')`
- 方法接收一个：元素选择器或 `jQuery` 对象。
- 若验证通过，该方法将返回 `true`，否则返回 `false`。

**案例：** 当我们在有**验证码**需要发送的情况下一般回去验证用户是否输入正确的手机号的情况，当我们点击发送验证码按钮时需要主动去验证该输入框中的手机号码是否正确。

```html
<div class="layui-form">  
  <div class="layui-form-item">
    <label class="layui-form-label">手机</label>
    <div class="layui-input-block">
      <input type="tel" name="phone" lay-verify="required|phone" class="layui-input" id="validate-phone">
    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">验证码</label>
    <div class="layui-input-inline">
      <input type="text" name="vercode" lay-verify="required" class="layui-input">
    </div>
    <div class="layui-inline"> 
      <button type="button" class="layui-btn layui-btn-primary" id="validate-get-vercode">获取验证码</button>
    </div>
  </div>
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="demo-validate">提交</button>
    </div>
  </div>
</div>
<script>
layui.use(function(){
    var $ = layui.$;
    var form = layui.form;
    var layer = layui.layer;
    // 点击获取验证码
    $('#validate-get-vercode').on('click', function(){
        // 主动触发验证
        var isValid = form.validate('#validate-phone');  
        // 验证通过
        if(isValid){
            layer.msg('手机号规则验证通过');
            // 此处可继续书写「发送验证码」等后续逻辑
            // …
        }
    });
})
</script>
```
## 1.4. 赋值/取值

- `form.val(filter, obj);`
- 参数 `filter` 为表单域容器（`class="layui-form"`）的 `lay-filter="demo-val-filter"` 属性值
- 参数 `obj` 可选。若参数存在，则对表单域进行赋值；若参数不存在，则为对表单域进行取值。

```html
<div class="layui-btn-container" style="margin-bottom: 6px; text-align: center;">
    <button type="button" class="layui-btn layui-btn-normal" id="form-setval">赋值</button>
    <button type="button" class="layui-btn layui-btn-normal" id="form-getval">取值</button>
</div>
<div class="layui-form"  lay-filter="demo-val-filter">
    <input type="text" name="username" lay-verify="title" autocomplete="off" placeholder="请输入" class="layui-input">
</div>
<script>
layui.use(function(){
    var $ = layui.$;
    var form = layui.form;
    var layer = layui.layer;
    // 赋值
    $('#form-setval').on('click', function(){
        // 主动触发验证，对象中的键名对应表单中name值
        var setData = form.val('demo-val-filter',{
            username:'我是新赋值'
        })
    });
    //取值
    $('#form-getval').on('click', function(){
        // 获取表单的所有值
        var getData = form.val('demo-val-filter')
        
    });
})
</script>
```
## 1.5. 提交事件
在表单域中，对指定按钮设置 `lay-submit` 属性，即意味着点击该按钮时，将触发提交事件。
```html
<div class="layui-form"  lay-filter="demo-val-filter">
    <input type="text" name="username" lay-verify="title" autocomplete="off" placeholder="请输入" class="layui-input">
     <button class="layui-btn" lay-submit lay-filter="demo-submit">提交按钮</button>
</div>
<script>
form.on('submit(demo-submit)', function(data){
    var field = data.field; // 获取表单全部字段值
    var elem = data.elem; // 获取当前触发事件的元素 DOM 对象，一般为 button 标签
    var elemForm = data.form; // 获取当前表单域的 form 元素对象，若容器为 form 标签才会返回。
    // 显示填写结果，仅作演示用
    layer.alert(JSON.stringify(field), {
      title: '当前填写的字段值'
    });
    // 此处可执行 Ajax 等操作
    // …
    return false; // 阻止默认 form 跳转
  });
</script>
```