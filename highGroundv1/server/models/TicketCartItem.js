import mongoose from 'mongoose'
import { ValueSchema } from "./Value"
const Schema = mongoose.Schema

export const TicketCartItemSchema = new Schema(
  {
    ticketId: { type: Schema.Types.ObjectId, ref: 'TicketCartItem', required: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

