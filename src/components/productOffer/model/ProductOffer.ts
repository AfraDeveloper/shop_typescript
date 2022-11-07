import { model } from "mongoose";
import { Schema } from "mongoose";
import IProductOffer from "./IPoroductOffer";
import productOffItemerSchema from "./ProductOfferItem";

const productOfferSchema: Schema = new Schema({
  products: { type: [productOffItemerSchema], required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
});

export default model<IProductOffer>("productOffer", productOfferSchema);
