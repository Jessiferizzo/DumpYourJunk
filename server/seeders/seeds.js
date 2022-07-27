const faker = require("faker");

const db = require("../../config/connection");
const { Product, User } = require("../../models");

db.once("open", async () => {
  await User.deleteMany({});
  await Product.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }
  console.log(userData)

  const createdUsers = await User.collection.insertMany(userData);

  // create productData
  const productData = [];

  for (let i = 0; i < 50; i += 1) {
    const productname = faker.commerce.productName();
    const description =
      `${productname} is a ` + faker.commerce.productDescription();
    const price = faker.commerce.price();
    const category = faker.commerce.product();
    const image = faker.image.abstract(1234, 2345, true);
    productData.push({ productname, description, price, category, image });
  }

  const createdProducts = await Product.collection.insertMany(productData);
});
