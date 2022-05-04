import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MerchSchema = new Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    colorOptions: [{ type: String, required: false }],
    type: [{ type: String, required: false }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
