class RedisCartRepository {
  constructor(redisClient) {
    this.redis = redisClient;
  }

  async save(cartItem) {
    const key = `cart:${cartItem.userId}`;
    const item = JSON.stringify({
      productId: cartItem.productId,
      quantity: cartItem.quantity
    });
    await this.redis.lpush(key, item);
  }
}

module.exports = RedisCartRepository;