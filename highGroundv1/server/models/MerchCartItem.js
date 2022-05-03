import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MerchCartItemSchema = new Schema(
  {
    storeItemM: { type: Schema.Types.ObjectId, ref: 'StoreMerch', required: false },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)