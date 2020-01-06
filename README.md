# wshop-server-project
> 基于 nodejs + eggjs + redis + rabbitmq + mysql + sequelize 技术栈Web项目框架。


### 技术栈

- node.js（>7.0，已原生支持绝大部分ES6/ES7语法）
- egg（成熟稳定的Web框架）
- JWT（Json Web Token 认证协议，用于页面和API的验证，包括token续期方案等）
- ORM（数据库对象关系映射）


### 项目运行

```
npm run dev or yarn dev

```



# 效果演示
### 部分截图
 <img src="https://github.com/weiQing88/wshop/blob/master/public/screenshots/20200106111753.png" width="500" height="300"/> 
 <img src="https://github.com/weiQing88/wshop/blob/master/public/screenshots/45234234.png" width="500" height="300"/> 
 


## 页面
- [ ] 首页 -- 未完成
- [x] 商品管理 
- [x] 订单管理
- [x] 微信管理
- [x] 会员管理
- [ ] 操作日志
- [ ] 物流查询



## 修改数据库配置文件 
/config/config.default.js or config.prod.js
```
 config.sequelize = {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'wshop',
      username: 'root',
      password: 'root',
      define: {  // model的全局配置
        timestamps: true,   // 添加create,update,delete时间戳
      //  paranoid: true,   // 添加软删除
        freezeTableName: true,  // 防止修改表名为复数
        underscored: false  // 防止驼峰式字段被默认转为下划线
    },
    timezone: '+8:00',  // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    dialectOptions: {  // 让读取date类型数据时返回字符串而不是UTC时间
        dateStrings: true,
        typeCast(field, next) {
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        }
    }
  };
```


# 关于接口数据

### 1、获取侧边栏目

#### 请求URL:  
```
GET  http://xxxx.top/api/admin/menu
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type      | N      |string  | name :  |

#### 返回示例：
```javascript
{
  status_code : 200,
   message : 'ok',
   data : [...]
}
```


### 2、管理员

#### 请求URL:  
```
GET  /api/admin/members/admin
```



### 3、角色

#### 请求URL:  
```
get /api/admin/members/role
```


### 3、商品列表

#### 请求URL:  
```
get /api/admin/goods
```



### 4、取消预约取件

#### 请求URL:  
```
POST /api/admin/order/cancel
```


### 4、预定取件

#### 请求URL:  
```
POST /api/admin/order/booking
```

未完善....

