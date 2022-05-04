import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CartMerchSchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    merchId: { type: Schema.Types.ObjectId, ref: 'Merch', required: true },
    isPurchased: { type: Boolean, required: true, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

CartMerchSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CartMerchSchema.virtual('merch', {
  localField: 'merchId',
  foreignField: '_id',
  justOne: true,
  ref: 'Merch'
}) 