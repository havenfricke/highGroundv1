import mongoose from "mongoose"
const Schema = mongoose.Schema

export const MailRecepientSchema = new Schema(
  {

  },
  { timestamps: true, toJSON: { virtuals: true } }
)