const express = require('express');
const cors = require('cors');

function createHttpServer(addToCartUseCase) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.post('/cart/add', async (req, res) => {
    try {
      const result = await addToCartUseCase.execute(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  return app;
}

module.exports = createHttpServer;