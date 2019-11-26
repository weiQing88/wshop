'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares,jwt } = app;
  const verifyToken = middlewares.verifyToken(app);

   router.get('/', controller.home.index);
   router.post('/api/admin/login', controller.user.login);
   router.post('/api/admin/logout', controller.user.logout );
   router.post('/api/admin/register', controller.user.register );
   router.get('/api/admin/captcha', controller.user.captcha );
   router.get('/api/admin/mcaptcha', controller.user.mcaptcha );


   router.get('/api/admin/goods', verifyToken, controller.goods.goodsList );  // 商品列表


   router.get('/api/admin/goods/category', verifyToken, controller.goods.category );  // 商品分类
   router.post('/api/admin/goods/category/create', verifyToken, controller.goods.editCategory );  // 创建商品分类
   router.patch('/api/admin/goods/category/edit', verifyToken, controller.goods.editCategory );  // 编辑商品分类
   router.delete('/api/admin/goods/category/delete', verifyToken, controller.goods.editCategory );  // 删除商品分类


   router.get('/api/admin/goods/attrs', verifyToken, controller.goods.attrs );  // 商品属性
   router.post('/api/admin/goods/attrs/create', verifyToken, controller.goods.editAttrs );  //  创建商品属性
   router.patch('/api/admin/goods/attrs/edit', verifyToken, controller.goods.editAttrs );  // 编辑商品属性
   router.delete('/api/admin/goods/attrs/delete', verifyToken, controller.goods.editAttrs );  // 删除商品属性


};
