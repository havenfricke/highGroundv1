import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MailingRecepientSchema = new Schema(
  {
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: false, default: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)