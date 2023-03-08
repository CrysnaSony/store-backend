var OrderModel = require("../models/orderModel");

module.exports = {
  show: async function (req, res) {
    var id = req.params.id;
    const order = await OrderModel.findOne({ _id: id });
    if (req.user.role !== "admin" && req.user.id != order.user_id)
      return res.status(400).send("Not Allowed");
    return order ? res.send(order) : res.status(400).send("No order found");
  },

  create: async function (req, res) {
    var order = new OrderModel({
      user_id: req.user.id,
      product_id: req.body.product_id,
      order_code: req.body.order_code,
      order_quantity: req.body.order_quantity,
      order_date: req.body.order_date,
      required_date: req.body.required_date,
      shipped_date: req.body.shipped_date,
      order_status: req.body.order_status,
    });
    const result = await order.save();
    if (!result) return res.status(400).send("Error creating order");
    return res.status(201).json(result);
  },

  update: async function (req, res) {
    var id = req.params.id;

    const order = await OrderModel.findOne({ _id: id });

    if (!order) {
      return res.status(404).json({
        message: "No such order",
      });
    }
    if (req.user.role !== "admin" && req.user.id != order.user_id)
      return res.status(400).send("Not Allowed");

    order.order_quantity = req.body.order_quantity
      ? req.body.order_quantity
      : order.order_quantity;
    order.order_date = req.body.order_date
      ? req.body.order_date
      : order.order_date;
    order.required_date = req.body.required_date
      ? req.body.required_date
      : order.required_date;
    order.shipped_date = req.body.shipped_date
      ? req.body.shipped_date
      : order.shipped_date;
    order.order_status = req.body.order_status
      ? req.body.order_status
      : order.order_status;

    const result = await order.save();
    return res.send(result);
  },

  remove: async function (req, res) {
    var id = req.params.id;

    const order = await OrderModel.findOne({ _id: id });

    if (!order) {
      return res.status(404).json({
        message: "No such order",
      });
    }
    if (req.user.role !== "admin" && req.user.id != order.user_id)
      return res.status(400).send("Not Allowed");

    order = await OrderModel.findOneAndRemove({ _id: id });

    if (!order) return res.status(400).send("Error deleting order");

    return res.status(200).send({ message: "Order Deleted Successfully" });
  },
};
