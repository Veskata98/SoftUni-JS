// 8.	*Class Storage
// Create a class Storage. It should have the following properties, while the constructor should only receive a capacity:
// •	capacity – a number that decreases when adding a given quantity of products to storage
// •	storage – list of products (object). Each product should have:
// o	name - a string
// o	price – a number (price is for a single piece of product)
// o	quantity – a number
// •	totalCost – the sum of the cost of the products
// The class should also have the following methods:
// •	addProduct – a function that receives a product and adds it to the storage
// •	getProcuts – a function that returns all the products in storage in JSON format, each on a new line
// Paste only the class Storage in judge (Note: all names should be as described)

function classStorage() {
  class Storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = [];
      this.totalCost = 0;
    }
    addProduct(product) {
      this.storage.push(product);
      this.capacity -= product.quantity;
      this.totalCost += product.price * product.quantity;
    }
    getProducts() {
      let returnArray = [];
      for (const el of this.storage) {
        returnArray.push(JSON.stringify(el));
      }
      return returnArray.join("\n");
    }
  }

  let productOne = { name: "Tomato", price: 0.9, quantity: 19 };
  let productTwo = { name: "Potato", price: 1.1, quantity: 10 };
  let storage = new Storage(30);
  storage.addProduct(productOne);
  storage.addProduct(productTwo);
  console.log(storage.totalCost);
}

classStorage();
