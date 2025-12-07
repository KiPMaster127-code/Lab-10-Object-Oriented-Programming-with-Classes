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