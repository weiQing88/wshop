/* jshint indent: 2 */
module.exports = app => {
   const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_attribution = app.model.define('wshop_attribution', {
          id: {
            type: INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          category_id: {
            type: INTEGER(8),
            allowNull: true
          },
          attr_name: {
            type: STRING(90),
            allowNull: false,
          },
          attr_id: {
            type: STRING(255),
            allowNull: false
          },
          attr_value: {
            type: TEXT,
            allowNull: false
          }
        }, {
          tableName: 'wshop_attribution',
          freezeTableName: true,
        });



     wshop_attribution.associate = function( ) {
          // associations can be defined here
          // 一对一关系
         // app.model.WshopAttribution.belongsTo( app.model.WshopCategory, { foreignKey : 'category_id', targetKey : 'id' });
          //多对多关系
          app.model.WshopAttribution.belongsToMany( app.model.WshopCategory, {
             //  as : 'attrs',
             through : {
              model : app.model.WshopCategoryAttrs,
            },
              foreignKey : 'category_id',
              otherKey : 'attr_id',

          });

     };

    return wshop_attribution;
}
