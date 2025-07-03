class RedisCartRepository {
  constructor(redisClient) {
    this.redis = redisClient;
  }

  async save(cartItem) {
    const key = `cart:${cartItem.userId}`;
    await this.redis.hset(key, cartItem.productId, cartItem.quantity);
  }
}

module.exports = RedisCartRepository;