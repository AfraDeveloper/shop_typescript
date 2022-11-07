import { Document } from "mongoose";
export default interface IProductAttribute extends Document {
  title: string;
  name: string;
  filterable: boolean;
  is_multiple: boolean;
}
