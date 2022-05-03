import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StoreTicketSchema = new Schema(
  {

  },
  { timestamps: true, toJSON: { virtuals: true } }
)