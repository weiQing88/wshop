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

### 关于接口数据



### 效果演示
 <img src="https://github.com/weiQing88/wshop/blob/master/public/screenshots/45234234.png" width="200" height="200"/> 


# 功能列表

## 页面
- [] 首页 -- 未完成
- [x] 分类商品 
- [x] 商品详情
- [x] 购物车 -- 完成
- [x] 下单页 -- 完成
- [x] 支付页、支付结果页 -
- [x] 订单详情页 
- [ ] 意见反馈
- [ ] 物流查询




### 目标功能
 1、注册  √
 2、登录   √
 3、退出登录  √
 4、上传接口  √
 5、商品--> 新建分类接口  
 6、商品--> 分类列表接口
 7、jwt中间件拦截请求并验证  [ 参考：https://blog.csdn.net/qq_39081974/article/details/81085717 ]
 
 
 
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



 //xx、手机短信验证码接口
 // xxx、 通过htt cach-Control 设置请求缓存； 【优化项】

### 部分截图

# 效果展示

### 首页、商品分类页



未完善....
