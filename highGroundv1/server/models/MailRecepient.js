import mongoose from "mongoose"
const Schema = mongoose.Schema

export const MailRecepientSchema = new Schema(
  {
    firstName: { type: String, required: true },
    email: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)