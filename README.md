# 🛒 Add-to-Cart Service

Microservice for adding products to the shopping cart.

## 🚀 Run Locally

```bash
git clone https://github.com/andrespaida/add-to-cart.git
cd add-to-cart
go run cmd/server/main.go
```

## 🐳 Docker

```bash
docker build -t add-to-cart .
docker run -dp 8000:8000 add-to-cart
```

## 📘 Swagger (OpenAPI)

```yaml
paths:
  /cart/add:
    post:
      summary: Add a product to the cart
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                userId: { type: string }
                productId: { type: string }
                name: { type: string }
                price: { type: number }
                quantity: { type: integer }
              required: [userId, productId, name, price, quantity]
      responses:
        '200': { description: Product successfully added }
        '400': { description: Bad request }
        '500': { description: Internal server error }
```

## 🧪 Sample Request

```bash
curl -X POST http://localhost:8000/cart/add \
  -H "Content-Type: application/json" \
  -d '{"userId":"user1","productId":"prod1","name":"Toy","price":9.99,"quantity":1}'
```