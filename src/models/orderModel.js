var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var orderSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      required: true,
    },
    product_id: {
      type: Schema.ObjectId,
      required: true,
    },
    order_code: {
      type: String,
      required: true,
    },
    order_quantity: {
      type: Number,
      default: 1,
    },
    order_date: {
      type: String,
      required: true,
    },
    required_date: {
      type: String,
    },
    shipped_date: {
      type: String,
    },
    order_status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
