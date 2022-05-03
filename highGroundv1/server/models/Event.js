import mongoose from "mongoose"
const Schema = mongoose.Schema

export const EventSchema = new Schema(
  {

  },
  { timestamps: true, toJSON: { virtuals: true } }
)