import mongoose from "mongoose"
const Schema = mongoose.Schema

export const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)