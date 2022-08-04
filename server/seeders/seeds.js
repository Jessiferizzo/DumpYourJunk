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

  for (let i = 0; i < 200; i += 1) {
    const productname = faker.commerce.productName();
    const description = `${productname} is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`;
    const price = faker.commerce.price();
    const category = categories[Math.floor(Math.random() * 5)].name;
    let image;

    if (category === "Electronics") {
      image =
        "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=981&q=80";
    } else if (category === "Home and Garden") {
      image =
        "https://i.etsystatic.com/24967772/r/il/f68384/2587510008/il_794xN.2587510008_sruu.jpg";
    } else if (category === "Clothing, Shoes, Accessories") {
      image =
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80";
    } else if (category === "Toys, Games, Hobbies") {
      image =
        "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    } else if (category === "Pets") {
      image =
        "https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80";
    } else if (category === "Health and Beauty") {
      image =
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80";
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
