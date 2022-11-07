import { Schema, model } from "mongoose";
import IProduct from "./IProduct";
import ProductStatus from "./productStatus";

const productSchema: Schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  sale_price: { type: Number, default: 0 },
  thumbnai: { type: String },
  galley: { type: [String] },
  product_category: { type: Schema.Types.ObjectId, ref: "productCategory" },
  attributes: { type: [Object], required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  status: { type: ProductStatus, default: ProductStatus.INIT },
});

export default model<IProduct>("product", productSchema);
