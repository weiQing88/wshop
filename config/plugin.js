'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  jwt : {
      enable : true,
      package : 'egg-jwt'
  },
  sequelize : {
      enable: true,
      package: 'egg-sequelize',
  },
  validate : {
    enable: true,
    package: 'egg-validate',
  },
  redis : {
      enable : true,
      package : 'egg-redis'
  },
  sessionRedis : {
      enable : true,
      package : 'egg-session-redis'
  }

};
