import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CartItemSchema } from "../models/CartItem";
import { EventSchema } from "../models/Event";
import { MailRecepientSchema } from "../models/MailRecepient";
import { StoreMerchSchema } from "../models/StoreMerch";
import { StoreTicketSchema } from "../models/StoreTicket";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  CartItem = mongoose.model('CartItem', CartItemSchema)
  Event = mongoose.model('Event', EventSchema)
  MailRecepient = mongoose.model('MailRecepient', MailRecepientSchema)
  StoreMerch = mongoose.model('StoreMerch', StoreMerchSchema)
  StoreTicket = mongoose.model('StoreTicket', StoreTicketSchema)
}

export const dbContext = new DbContext()
