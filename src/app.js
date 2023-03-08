const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRoutes");

const app = express();

// parse json request body
app.use(express.json());
app.set("secretKey", "secret");

// enable cors
app.use(cors());
app.options("*", cors());

// api routes
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

module.exports = app;
