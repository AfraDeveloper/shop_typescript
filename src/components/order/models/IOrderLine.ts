import { Document } from "mongoose";

export default interface IOrderLine extends Document {
  product: object;
  price: number;
  created_at: Date;
  updated_at: Date;
}
