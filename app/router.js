'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
   router.get('/', controller.home.index);
   router.post('/api/admin/login', controller.user.login);
   router.post('/api/admin/register', controller.user.register );
   router.get('/api/admin/captcha', controller.user.captcha );
   router.get('/api/admin/mcaptcha', controller.user.mcaptcha );
};
