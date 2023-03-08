# store-backend

Backend for a store using Node.Js, Express.Js and MongoDB. Core functionality includes role based login, authentication using Jwt.

  
#Installation


Clone the repo:

```bash
git clone CrysnaSony/voting-backend.git
cd store-backend
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.sample .env

# open .env and modify the environment variables
```


## Commands

Running locally:

```bash
npm run dev
```

### API Endpoints

List of available routes:

**User routes**:\
`POST /users` - create a user\
```json
{
    "name":"yourName",
    "mobileNo":"1112223330",
    "password":"psd"
}
```

`GET /users/:id` - get user\
`POST /users/login - login user\
```json
{
    "mobileNo":"1112223330",
    "password":"psd"
}
```

**Product routes**:\
`POST /products` - create a product\
`GET /products/:id` - get product\
`PUT /products/:id` - update product\
`DELETE /products/:id` - delete product

**Order routes**:\
`POST /orders` - create order\
`GET /orders/:id` - get order\
`PUT /orders/:id` - update order\
`DELETE /orders/:id` - delete order

