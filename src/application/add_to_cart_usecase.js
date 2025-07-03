const CartItem = require('../domain/cart_item');

class AddToCartUseCase {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(data) {
    const item = new CartItem(data);
    await this.cartRepository.save(item);
    return { message: 'Item added to cart' };
  }
}

module.exports = AddToCartUseCase;