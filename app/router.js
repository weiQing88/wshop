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


   router.get('/api/admin/goods/category', controller.goods.category );  // 商品分类
   router.post('/api/admin/goods/category/create', verifyToken , controller.goods.createCategory );  // 创建商品分类

};
