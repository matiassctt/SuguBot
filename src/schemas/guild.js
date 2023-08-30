const {Schema, model} = require('mongoose');
const moment = require('moment');

const guildSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: String,
  guildName: String,
  guildIcon: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    default: moment().format("YYYY-MM-DD HH:mm:ss"),
  },
});

module.exports = model("Guild", guildSchema, "guilds");