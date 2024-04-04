import mongoose, { Schema } from "mongoose";

const otpSchma = new Schema({
  otp: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  count: {
    type: Number,
    default: 0,
    max: [5, "count must be less than or equal to 5"],
  },
  requestTime: {
    type: Date,
    default: Date.now(),
  },
  expirationTime: Date,
});

const Otp = mongoose.model("Otp", otpSchma);

export default Otp;
