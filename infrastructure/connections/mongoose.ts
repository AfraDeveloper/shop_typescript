import * as mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/shop_k")
  .then(() => console.log("mongoose connect success"))
  .catch((e) => console.log("connect feild", e.message));
