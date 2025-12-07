class ProductProperties {
  constructor(productName, unitPrice, stockQuantity) {
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.stockQuantity = stockQuantity;
  }

  getTotalValue() {
    return this.unitPrice * this.stockQuantity;
  }

}