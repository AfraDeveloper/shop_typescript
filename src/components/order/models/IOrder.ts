import { Document } from "mongoose";
import OrderStatus from "./OrderStatus";

export default interface IOrder extends Document {
  user: string;
  total_price: number;
  final_price: number;
  coupon: object;
  status: OrderStatus;
  order_lines: [object];
  delivery_address: object;
  created_at: Date;
  updated_at: Date;
}
