import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CartItemSchema = new Schema(
  {

  },
  { timestamps: true, toJSON: { virtuals: true } }
)