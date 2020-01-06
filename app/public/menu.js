module.exports = [
  {
    name : '首页',
    icon : 'icon-shouye',
    path : '',
    key : 'home',
    value : 'home',
  },
  {
      title : '商品管理',
      name : '商品管理',
      key : 'goods',
      value : 'goods',
      icon : 'icon-RectangleCopy',
      path : 'goods',
      children : [
           {
              title : '商品列表',
              name  : '商品列表',
              key : 'goods-list',
              value : 'goods-list',
              path : '',
           },
           {
            title : '商品分类',
            name : '商品分类',
            key : 'goods-category',
            path : 'category',
            value : 'goods-category',
           },
           {
              title : '商品属性',
              name : '商品属性',
              key : 'goods-attrs',
              value : 'goods-attrs',
              path : 'attrs',
           }
      ]
   },

   {
      title : '订单管理',
      name : '订单管理',
      key : 'order',
      value : 'order',
      icon : 'icon-dingdanguanli',
      path : 'order',
      children : [
            {
              title : '订单列表',
              name  : '订单列表',
              key : 'order-list',
              path : '',
              value : 'order-list',
            },
            {
              title : '发货单列表',
              name: '发货单列表',
              key : 'order-deliver',
              path : 'deliver',
              value : 'order-deliver',
            },
            {
              title : '退货单列表',
              name  : '退货单列表',
              key : 'order-cancel',
              path : 'cancel',
              value : 'order-cancel',
            },
            {
              title : '售后单列表',
              name : '售后单列表',
              key : 'order-service',
              value : 'order-service',
              path : 'service',
            }
      ]
   },

   {
      title : '微信管理',
      name : '微信管理',
      key : 'wx',
      value : 'wx',
      icon : 'icon-navicon-wxgl',
      path : 'wx',
      children : [
            {
              title : '小程序配置',
              name : '小程序配置',
              key : 'wx-setting',
              value : 'wx-setting',
              path : 'setting',
            }
      ]
   },

   {
    title : '会员管理',
    name : '会员管理',
    key : 'members',
    value : 'members',
    icon : 'icon-huiyuanguanli',
    path : 'members',
    children : [
          {
           title : '用户列表',
           name: '用户列表',
           key : 'members-list',
           value : 'members-list',
           path : '',
          },
          {
           title : '管理员管理',
           name: '管理员管理',
           key : 'members-admin',
           value : 'members-admin',
           path : 'admin',
          },
          {
           title : '角色管理',
           name : '角色管理',
           key : 'members-roles',
           value : 'members-roles',
           path : 'roles',
          },
    ]
 },

   {
     title : '操作日志',
     name : '操作日志',
     key : 'logs',
     value : 'logs',
     icon : 'icon-caozuorizhi',
     path : 'logs',
     children : [
          {
           title : '管理员日志',
           name : '管理员日志',
           key : 'logs-admin',
           value : 'logs-admin',
           path : '',
          }
    ]
 }
]