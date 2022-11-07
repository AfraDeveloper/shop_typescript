import { Schema } from "mongoose";
const productOffItemerSchema: Schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Producy" },
  image: { type: String, required: true },
  price: { Type: Number, required: true },
});

export default productOffItemerSchema;
