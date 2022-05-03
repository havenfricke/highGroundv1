import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StoreMerchSchema = new Schema(
  {

  },
  { timestamps: true, toJSON: { virtuals: true } }
)