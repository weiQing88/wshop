'use strict';
module.exports = app => {
	const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_category = app.model.define('wshop_category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },

    category_name: {
			type: STRING(90),
			allowNull: false,
		},
		keywords: {
			type: STRING(255),
			allowNull: true,
		},
		front_desc: {
			type: STRING(255),
			allowNull: true,
		},
		category_id: {
			type: STRING(255),
			allowNull: false,
		},
		category_sort: {
			type: INTEGER(1).UNSIGNED,
			allowNull: true,
		
		},
		show_index: {
			type: INTEGER(1),
			allowNull: true,
		},
		is_show: {
			type: INTEGER(1).UNSIGNED,
			allowNull: true,
		},
		banner_url: {
			type: STRING(255),
			allowNull: true,
		},
		category_icon: {
			type: STRING(255),
			allowNull: true,
		},
		img_url: {
			type: STRING(255),
			allowNull: true,
		},
		wap_banner_url: {
			type: STRING(255),
			allowNull: true,
		},
		level: {
			type: STRING(255),
			allowNull: true,
		},
		category_type: {
			type: INTEGER(11),
			allowNull: true,
		},
		front_name: {
			type: STRING(255),
			allowNull: true,
		},
		createdAt: {
			type: DATE,
			allowNull: true,
		},
		updatedAt: {
			type: DATE,
			allowNull: true
		},
		grade: {
			type: INTEGER(4),
			allowNull: true
		},
		category_attrs: {
			type: TEXT,
			allowNull: true
		}

  }, {
	tableName: 'wshop_category',
	freezeTableName: true,
  });




		// 参照 ： https://www.jianshu.com/p/078087c69b77
		// 以下是一对一关系
		wshop_category.associate = function() {
			// associations can be defined here
			// as 是定义 WshopAttribution 在返回数据中的别名。
			// 只需要在WshopCategory中定义，不需要在WshopAttribution中定义
			// 如 ：WshopCategory.findAll({ include: [ { model : WshopAttribution, as : 'attrs'  }  ] });
			// app.model.WshopCategory.hasOne( app.model.WshopAttribution, { as  : 'attrs', foreignKey : 'category_id' });

			// 以下是多对多关系，使用belongsToMany()
				app.model.WshopCategory.belongsToMany( app.model.WshopAttribution,{
					// as : 'attrs',
					through : {
						model : app.model.WshopCategoryAttrs,
					},
					foreignKey : 'category_id',
					otherKey : 'attr_id',
				});

	   };



  return wshop_category;
};












