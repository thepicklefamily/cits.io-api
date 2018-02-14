const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/socketdb');

//Messages table:
const messageSchema = new Schema({
  message: String,
  username: String,
  userId: Number,
  roomname: String,
  type: String,
  date: { type: Date, default: Date.now }
});

export const Messages = mongoose.model('Messages', messageSchema);

//Time last message was sent in property chat room table:
const lastMessageSchema = new Schema({
  propId: { type : String, unique : true, required : true },
  timeLastMessage: { type : String, required : true }
});

export const lastMessage = mongoose.model('lastMessage', lastMessageSchema);


//Time user was last online in property chat room table:
const lastOnlineSchema = new Schema({
  userId: { type : String, required : true },
  propId: { type : String, required : true },
  timeLastOnline: { type : String, required : true }
});

// to make user id and prop id combo have to be unique:
lastOnlineSchema.index({ userId: 1, propId: 1}, { "unique": true });

export const lastOnline = mongoose.model('lastOnline', lastOnlineSchema);