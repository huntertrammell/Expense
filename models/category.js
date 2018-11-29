module.exports = function(sequelize, DataTypes) {
  const category = sequelize.define('category', {
    categoryId: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
  });
  return category;
};
