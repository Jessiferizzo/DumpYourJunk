const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    // required: true,
    // enum: ['Electronics', 'Home and Garden', 'Clothing, Shoes, Accessories', 'Toys, Games, Hobbies', 'Pets', 'Health and Beauty'],
    trim: true
  }
});

const Category = model('Category', categorySchema);

module.exports = Category;
