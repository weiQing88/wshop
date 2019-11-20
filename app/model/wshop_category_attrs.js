/* jshint indent: 2 */
module.exports = app => {
   const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = app.Sequelize;
  const wshop_category_attrs = app.model.define('wshop_category_attrs', {
          id: {
            type: INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
          },
          category_id: {
            type: INTEGER(8),
            allowNull: true
          },
          attr_id: {
            type: INTEGER(5),
            allowNull: true
          },
          attr_value: {
            type: TEXT,
            allowNull: false
          }
        }, {
          tableName: 'wshop_category_attrs'
        });

        wshop_category_attrs.associate = function() {
          // associations can be defined here
          app.model.WshopCategoryAttrs.belongsTo( app.model.WshopCategory, { foreignKey : 'category_id', targetKey : 'id' });
      };
    return wshop_category_attrs;
}
