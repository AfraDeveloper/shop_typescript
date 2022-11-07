import { Schema, model } from "mongoose";
import addressSchema from "src/components/user/models/Address";
import IOrder from "./IOrder";
import orderLineSchema from "./OrderLine";
import OrderStatus from "./OrderStatus";

const orderSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  totol_price: { type: Number, required: true },
  final_price: { type: Number, required: true },
  coupn: { type: Object, default: {} },
  status: { type: OrderStatus, required: true, default: OrderStatus.INIT },
  order_lines: { type: [orderLineSchema] },
  delivery_address: { type: addressSchema },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default model<IOrder>("order", orderSchema);
