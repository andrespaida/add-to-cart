class RedisCartRepository {
  constructor(redisClient) {
    this.redis = redisClient;
  }

  async save(cartItem) {
    const key = `cart:${cartItem.userId}`;
    const items = await this.redis.lrange(key, 0, -1);

    let found = false;

    for (let i = 0; i < items.length; i++) {
      const item = JSON.parse(items[i]);

      if (item.productId === cartItem.productId) {
        item.quantity += cartItem.quantity;

        await this.redis.lset(key, i, JSON.stringify(item));
        found = true;
        break;
      }
    }

    if (!found) {
      const item = JSON.stringify({
        productId: cartItem.productId,
        quantity: cartItem.quantity
      });
      await this.redis.rpush(key, item);
    }
  }
}

module.exports = RedisCartRepository;