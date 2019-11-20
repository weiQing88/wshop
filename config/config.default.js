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
      // session : {
      //   renew: true,
      // },
      multipart : {
         fileSize: '50mb',
         mode: 'stream',
         fileExtensions: ['.xls', '.txt'], 
      },
      jwt : {
        secret : 'wshop_201911141230034_5459'
      },
      statuscode: {
          failure : 406,
          success : 200
      },
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

  return {
    ...config,
    ...userConfig,
  };


};
