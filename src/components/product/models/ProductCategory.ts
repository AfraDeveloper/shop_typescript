import { Schema, model } from "mongoose";
import IProductAttribute from "./IProductAttribute";
import IProductCategory from "./IProductCategory";
const productCategorySchema: Schema = new Schema({
  title: { type: String, required: true },
  attributes: { type: [Object] },
  total_products: Number,
});

export default model<IProductCategory>(
  "productCategory",
  productCategorySchema
);
