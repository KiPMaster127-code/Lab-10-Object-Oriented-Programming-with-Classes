class ProductProperties {                                       //Seting up ProductProperties class

  constructor(productName, unitPrice, stockQuantity) {         //Creating function that would set products name, price and it's quantity
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.stockQuantity = stockQuantity;
  }

  getTotalValue() {                                            //Prints TotalValue of the product
    return this.unitPrice * this.stockQuantity;
  }

  toString() {                                                //Prints out custom string to represent the product with descriptions
    return `Product: ${this.productName}, Price: $${this.unitPrice.toFixed(2)}, Quantity: ${this.stockQuantity}`;
  }

    static applyDiscount(products, discount) {              //Static Method for applying discount
    products.forEach(product => {
      product.unitPrice = product.unitPrice - (product.unitPrice * discount);
    });
  }

}

class PerishableProductProperties extends ProductProperties {   //Setting up PerishableProductProperties to call superclass constructor to add expiry date 
  constructor(productName, unitPrice, stockQuantity, expiryDate) {
    super(productName, unitPrice, stockQuantity);
    this.expiryDate = expiryDate;
  }

  toString() {                                                  //Overrides original script to include expiration date
    return `Product: ${this.productName}, Price: $${this.unitPrice.toFixed(2)}, Quantity: ${this.stockQuantity}, Expiry Date: ${this.expiryDate}`;
  }

}

class Store {                                                   //Store class to manage store items 
  constructor() {
    this.products = [];
 }

 addProduct(product) {                                          //Adds products to the store
    this.products.push(product);
  }

  getInventoryValue() {                                         //Calculates the total of all products in the store
    return this.products.reduce((total, product) => total + product.getTotalValue(), 0);
  }

  findProductByName(productName) {                              //Finding specific products by name
    return this.products.find(product => product.productName.toLowerCase() === productName.toLowerCase()) || null;
  }

}

const apple = new ProductProperties("Apple", 2.50, 50);         //Sample products
const orange = new ProductProperties("Orange", 3.00, 30);
const rice = new ProductProperties("Rice", 10.00, 5);
const milk = new PerishableProductProperties("Milk", 1.50, 10, "2026-12-31");
const bread = new PerishableProductProperties("Bread", 2.00, 20, "2026-11-15");

const myStore = new Store();                                    //The store and it's products 

myStore.addProduct(apple);
myStore.addProduct(orange);
myStore.addProduct(rice);
myStore.addProduct(milk);
myStore.addProduct(bread);

console.log("Total cost Before Discount is $" + myStore.getInventoryValue().toFixed(2)); //Output before discount 

ProductProperties.applyDiscount(myStore.products, 0.15);

console.log("Total cost after discount is $" + myStore.getInventoryValue().toFixed(2)); //Output after discount

const foundProduct = myStore.findProductByName("Rice");

console.log("Found Product", foundProduct ? foundProduct.toString() : "The product is not Found"); //Output for the search of Rice product




