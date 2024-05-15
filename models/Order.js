import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  telephone: String,
  post: String,
  city: String,
  postOffice: String,
});

const Order = model("order", orderSchema);

export default Order;
