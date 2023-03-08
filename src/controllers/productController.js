var productModel = require("../models/productModel.js");
const fs = require("fs");
const path = require("path");
module.exports = {
  show: async function (req, res) {
    var id = req.params.id;

    const product = await productModel.findOne({ _id: id });
    return product
      ? res.send(product)
      : res.status(400).send("No product found");
  },

  create: async function (req, res) {
    let images = req.files.map((file) => {
      let image = {
        data: fs.readFileSync(
          path.join(__dirname + "../../../uploads/" + file.filename)
        ),
        contentType: file.mimetype,
      };
      return image;
    });
    var product = new productModel({
      name: req.body.name,
      size: req.body.size,
      images,
      colour: req.body.colour,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    const result = await product.save();
    if (!result) return res.status(400).send("Error creating product");
    return res.status(201).json(result);
  },

  update: async function (req, res) {
    var id = req.params.id;
    let images = req.files.map((file) => {
      let image = {
        data: fs.readFileSync(
          path.join(__dirname + "../../../uploads/" + file.filename)
        ),
        contentType: file.mimetype,
      };
      return image;
    });
    const product = await productModel.findOne({ _id: id });

    if (!product) {
      return res.status(404).json({
        message: "No such product",
      });
    }
    product.name = req.body.name ? req.body.name : product.name;
    product.size = req.body.size ? req.body.size : product.size;
    product.images = images ? images : product.images;
    product.color = req.body.color ? req.body.color : product.color;
    product.price = req.body.price ? req.body.price : product.price;
    product.quantity = req.body.quantity ? req.body.quantity : product.quantity;

    const result = await product.save();
    return res.send(result);
  },

  remove: async function (req, res) {
    var id = req.params.id;

    const product = await productModel.findByIdAndRemove(id);
    if (!product) return res.status(400).send("Error deleting product");
    return res.status(200).send({ message: "Product Deleted Successfully" });
  },
};
