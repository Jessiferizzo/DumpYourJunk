const faker = require("faker");

const db = require("../config/connection");
const { Product, User } = require("../models");

db.once("open", async () => {
  await Product.deleteMany({});
  await User.deleteMany({});
  // await Category.deleteMany();

  const categories = [
    { name: "Electronics" },
    { name: "Home and Garden" },
    { name: "Clothing, Shoes, Accessories" },
    { name: "Toys, Games, Hobbies" },
    { name: "Pets" },
    { name: "Health and Beauty" },
  ];
  console.log(categories[0].name);

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create productData
  const productData = [];

  for (let i = 0; i < 50; i += 1) {
    const productname = faker.commerce.productName();
    const description = `${productname} is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`;
    const price = faker.commerce.price();
    const category = categories[Math.floor(Math.random() * 5)].name;
    let image;

    if (category === "Electronics") {
      image =
        "https://thumbor.offerup.com/_hzrXhvg_p0dy7kqtgKHzYLPeNI=/640x480/df6a/df6a123c84c04d179a2c6f81c7807a96.jpg";
    } else if (category === "Home and Garden") {
      image =
        "https://thumbor.offerup.com/eOuWzhE3AmlADp5tRT1RyboKKXA=/756x1008/cadf/cadfdd8f099e4637bbbb336701246f69.jpg";
    } else if (category === "Clothing, Shoes, Accessories") {
      image =
        "https://thumbor.offerup.com/Qb0tu4Ew7CB_XlawY5ALAKJeYlA=/1440x1920/c502/c502200696c84a14b0921495abbea32c.jpg";
    } else if (category === "Toys, Games, Hobbies") {
      image =
        "https://thumbor.offerup.com/kjqBAP3OT-gOZLq_HJQoGMd_HEg=/640x674/bbb1/bbb17ef774844852a0fded14bddbc063.jpg";
    } else if (category === "Pets") {
      image =
        "https://thumbor.offerup.com/Yi9bXGgdgLLALdr0pm83ItXIrss=/1440x1920/dad5/dad5d5b4f0944beeb2d9c203ec3e81ac.jpg";
    } else if (category === "Health and Beauty") {
      image =
        "https://thumbor.offerup.com/S6OW-WXyUiSN3brsRWknEA3pbNc=/1442x1922/8f88/8f88ad19521347e2addbda8e1f21e8ee.jpg";
    } else {
      image =
        "https://thumbor.offerup.com/_hzrXhvg_p0dy7kqtgKHzYLPeNI=/640x480/df6a/df6a123c84c04d179a2c6f81c7807a96.jpg";
    }

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdProduct = await Product.create({
      productname,
      description,
      price,
      category,
      image,
      username,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { products: createdProduct._id } }
    );
    productData.push(createdProduct);
  }

  console.log("all done!");
  process.exit(0);
});
