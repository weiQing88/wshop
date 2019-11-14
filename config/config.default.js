/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  // appInfo.name + '_1570936314744_5024';
  config.keys = 'wshop_201911141230034_5459'

  // add your middleware config here
  config.middleware = [ ];

  // add your user config here
  const userConfig = {
      myAppName: 'wshop',
      security : {
      domainWhiteList : ['127.0.0.1:8000'],
      csrf : {
        enable: false,
      }
    },
  };

 

  config.sequelize = {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'wshop',
      username: 'root',
      password: 'root',
      
    };

  return {
    ...config,
    ...userConfig,
  };


};
