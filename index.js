const redisClient = require('./src/config/redis_client');
const RedisCartRepository = require('./src/infrastructure/redis_cart_repository');
const AddToCartUseCase = require('./src/application/add_to_cart_usecase');
const createHttpServer = require('./src/interfaces/http_server');

const repository = new RedisCartRepository(redisClient);
const usecase = new AddToCartUseCase(repository);
const app = createHttpServer(usecase);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🛒 Add-to-cart REST service running on port ${PORT}`);
});