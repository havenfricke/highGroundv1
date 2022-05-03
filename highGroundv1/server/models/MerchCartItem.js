import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MerchCartItemSchema = new Schema(
  {
    merchCartItem: { type: Schema.Types.ObjectId, ref: 'MerchCartItem', required: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)