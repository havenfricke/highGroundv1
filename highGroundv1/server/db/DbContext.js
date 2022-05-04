import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { MailingRecepientSchema } from "../models/MailingRecepient";
import { ValueSchema } from '../models/Value'


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  MailingRecepient = mongoose.model('MailingRecepient', MailingRecepientSchema);
}

export const dbContext = new DbContext()
