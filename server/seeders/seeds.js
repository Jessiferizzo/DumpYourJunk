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
    { name: "Health and Beauty" }
  ];
  console.log(categories[0].name)

  

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
    const description =
      `${productname} is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident` 
    const price = faker.commerce.price();
    const category = categories[Math.floor(Math.random() * 5)].name;
    console.log(category)
  //  const image = faker.image.abstract(1234, 2345, true);
    const image = 'https://thumbor.offerup.com/_hzrXhvg_p0dy7kqtgKHzYLPeNI=/640x480/df6a/df6a123c84c04d179a2c6f81c7807a96.jpg'
    

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];
    
    const createdProduct = await Product.create({ productname, description, price, category, image, username });


    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { products: createdProduct._id } }
    );
    productData.push(createdProduct);
  }

  console.log("all done!");
  process.exit(0);
});

