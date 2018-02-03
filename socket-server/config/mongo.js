const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/sockets');

var db = mongoose.connection;

db.once('open', () => {
  console.log('mongoose connected')
})

const messageSchema = new Schema({
  message: String,
  username: String,
  roomname: String,
});

const Messages = mongoose.model('Messages', messageSchema);

module.exports = messageSchema;