import { Schema, model } from "mongoose";
import addressSchema from "./Address";
import IUser from "./IUser";

const userSchema: Schema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    totalOrder: { type: Number },
    addresses: { type: [addressSchema] },
    wallet: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("user", userSchema);
