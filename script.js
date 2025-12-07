class ProductProperties {
  constructor(productName, unitPrice, stockQuantity) {
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.stockQuantity = stockQuantity;
  }

  getTotalValue() {
    return this.unitPrice * this.stockQuantity;
  }

  toString() {
    return `Product: ${this.productName}, Price: $${this.unitPrice.toFixed(2)}, Quantity: ${this.stockQuantity}`;
  }

}