'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares,jwt } = app;
  const verifyToken = middlewares.verifyToken(app);
  const verifyWxToken = middlewares.verifyToken(app, { tokenName : 'wxtoken' });


   router.get('/', controller.home.index);
   router.get('/api/admin/menu', verifyToken, controller.home.fetMenu ); // 获取导航栏目

   router.post('/api/admin/login', controller.user.login);
   router.post('/api/admin/logout', controller.user.logout );
   router.post('/api/admin/register', controller.user.register );
   router.get('/api/admin/captcha', controller.user.captcha );
   router.get('/api/admin/mcaptcha', controller.user.mcaptcha );



   router.get('/api/admin/wx', verifyToken, controller.wx.wxConfig ); // 获取小程序配置信息
   router.post('/api/admin/wx/edit', verifyToken, controller.wx.editWxConfig ); // 编辑小程序配置信息


   router.get('/api/admin/members/admin', verifyToken, controller.members.admin ); // 管理员
   router.post('/api/admin/members/admin/create', verifyToken, controller.members.createAdmin ); // 管理员
   router.post('/api/admin/members/admin/:id/edit', verifyToken, controller.members.editAdmin ); // 编辑管理员
   router.delete('/api/admin/members/admin/:id/delete', verifyToken, controller.members.deleteAdmin ); // 删除管理员

   router.get('/api/admin/members/role', verifyToken, controller.members.role ); // 角色
   router.post('/api/admin/members/role/create', verifyToken, controller.members.createRole ); // 角色


   router.get('/api/admin/goods', verifyToken, controller.goods.goodsList );  // 商品列表
   router.post('/api/admin/goods/create', verifyToken, controller.goods.editGoods );  // 创建商品
   router.patch('/api/admin/goods/edit', verifyToken, controller.goods.editGoods );  // 编辑商品
   router.patch('/api/admin/goods/status', verifyToken, controller.goods.editGoodsStatus );  // 编辑商品状态
   router.patch('/api/admin/goods/promotion', verifyToken, controller.goods.setPromotion );  // 编辑商品促销
   router.patch('/api/admin/goods/bulkedit', verifyToken, controller.goods.bulkedit );  // 批量编辑商品
   router.delete('/api/admin/goods/delete', verifyToken, controller.goods.deleteGoods );  // 删除商品
  

   router.get('/api/admin/goods/category', verifyToken, controller.goods.category );  // 商品分类
   router.post('/api/admin/goods/category/create', verifyToken, controller.goods.editCategory );  // 创建商品分类
   router.patch('/api/admin/goods/category/edit', verifyToken, controller.goods.editCategory );  // 编辑商品分类
   router.delete('/api/admin/goods/category/delete', verifyToken, controller.goods.editCategory );  // 删除商品分类


   router.get('/api/admin/goods/attrs', verifyToken, controller.goods.attrs );  // 商品属性
   router.post('/api/admin/goods/attrs/create', verifyToken, controller.goods.editAttrs );  //  创建商品属性
   router.patch('/api/admin/goods/attrs/edit', verifyToken, controller.goods.editAttrs );  // 编辑商品属性
   router.delete('/api/admin/goods/attrs/delete', verifyToken, controller.goods.editAttrs );  // 删除商品属性



    router.get('/api/admin/order', verifyToken, controller.order.order  );  // 订单
    router.post('/api/admin/order/edit/', verifyToken, controller.order.edit );  // 编辑订单
    router.get('/api/admin/order/detail', verifyToken, controller.order.detail  );  // 订单详情
    router.post('/api/admin/order/booking', verifyToken, controller.order.booking  );  // 预定取件
    router.get('/api/admin/order/orderInfo', verifyToken, controller.order.orderInfo  );  // 预约取件
    router.post('/api/admin/order/cancel', verifyToken, controller.order.cancel  );  // 取消预约取件
    router.get('/api/admin/order/shipped', verifyToken, controller.order.shipped  );  // 发货/退货列表
    router.get('/api/admin/order/shipped/:id', verifyToken, controller.order.shippedItem  );  // 发货列表



    router.post('/api/wx/login', controller.wx.login );  // 微信--用户注册并登录
    router.get('/api/wx/index', controller.wx.index  );  // 微信--首页
    router.get('/api/wx/detail',verifyWxToken, controller.wx.detail  );  // 微信--商品详情
    router.get('/api/wx/list', controller.wx.list  );  // 微信--列表页[分类]
    router.get('/api/wx/cart', verifyWxToken, controller.wx.fetCart );  // 购物车
    router.post('/api/wx/cart/add', verifyWxToken, controller.wx.addToCart );  // 加入购物车
    router.post('/api/wx/cart/edit', verifyWxToken, controller.wx.editCart );  // 编辑购物车
    router.post('/api/wx/cart/clear', verifyWxToken, controller.wx.clearCart );  // 清空购物车
    router.get('/api/wx/order', verifyWxToken, controller.wx.order  );  // 微信- 订单
    router.get('/api/wx/user', verifyWxToken, controller.wx.user  );  // 微信- 用户中心
};
