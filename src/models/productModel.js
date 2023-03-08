var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    images: [
      {
        data: Buffer,
        contentType: String,
      },
    ],
    color: {
      type: String,
    },
    price: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
