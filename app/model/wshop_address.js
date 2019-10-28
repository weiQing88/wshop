'use strict';
module.exports = (sequelize, DataTypes) => {
  const wshop_address = sequelize.define('wshop_address', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    user_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    country: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    province: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    city: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    district: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    address: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    mobile: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sign_building: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'wshop_address'
  });
  wshop_address.associate = function(models) {
    // associations can be defined here

  };
  return wshop_address;
};