import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CartSchema = new Schema(
  {
    cartMerchItems: [{ type: Schema.Types.ObjectId, required: false }],
    cartTicketItems: [{ type: Schema.Types.ObjectId, required: false }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

