class CartItem {
  constructor({ userId, productId, quantity }) {
    if (!userId || !productId || !quantity) {
      throw new Error('Missing required fields');
    }
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
    this.createdAt = new Date();
  }
}

module.exports = CartItem;