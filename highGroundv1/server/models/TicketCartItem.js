import mongoose from 'mongoose'
import { ValueSchema } from "./Value"
const Schema = mongoose.Schema

export const TicketCartItemSchema = new Schema(
  {
    storeItemT: { type: Schema.Types.ObjectId, ref: 'StoreTicket', required: false },

    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ValueSchema.virtual('storeItem', {
  localField: 'storeItem',
  foreignField: '_id',
  justOne: true,
  ref: ''
})