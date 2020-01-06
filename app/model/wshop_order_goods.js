'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, ENUM, TEXT, BIGINT } = app.Sequelize;
  const wshop_order_goods = app.model.define('wshop_order_goods',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
	},
	order_id : {
		 type : BIGINT,
		 allowNull: false,
		// unique: true
	},
	 goods_id: {
			type: BIGINT,
			allowNull: false,
        },

        goods_name: {
			type:STRING(120),
			allowNull: false,
		},

		shop_price: {
			type:DECIMAL,
			allowNull: false,
			defaultValue: '0'
		},
		goods_number : {
			type:INTEGER(8).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		number: {
			type:INTEGER(5).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		list_pic_url: {
			type:STRING(255),
			allowNull: false,
		},
		goods_attrs: {
			type:STRING(255),
			allowNull: true,
        },
        
		createdAt: {
			type: DATE,
			allowNull: false
		},
		updatedAt: {
			type: DATE,
			allowNull: false
		}
  }, {
	freezeTableName: true,
    tableName: 'wshop_order_goods'
  });
  wshop_order_goods.associate = function() {
        app.model.WshopOrderGoods.belongsTo( app.model.WshopOrder, { foreignKey : 'order_id', targetKey : 'order_id', as : 'goods' });
  };
  return wshop_order_goods;
};