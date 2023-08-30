const {Schema, model} = require('mongoose');
const moment = require('moment');

const logSchema = new Schema({
  _id: Schema.Types.ObjectId,
  message: String,
  timestamp: {
    type: String,
    default: moment().format("YYYY-MM-DD HH:mm:ss"),
  },
});

module.exports = model("Log", logSchema, "logs");