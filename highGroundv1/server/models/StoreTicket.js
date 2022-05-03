import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StoreTicketSchema = new Schema(
  {
    admissionType: { type: String, required: true, default: 'General Admission' },
    price: { type: Number, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)