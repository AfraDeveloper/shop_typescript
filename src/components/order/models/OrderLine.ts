import { Schema, model } from "mongoose";

const orderLineSchema: Schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default orderLineSchema;
