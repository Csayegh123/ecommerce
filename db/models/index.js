// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Associations - hasMany
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Associations - belongsToMany
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// Associations - belongsToMany
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
