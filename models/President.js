const mongoose = require('mongoose');
const { Schema } = mongoose;
const CabinetMember = require('./CabinetMember');

const President = new Schema({
  order: { required: true, type: Number },
  name: { required: true, type: String },
  termStart: { required: true, type: Date },
  termEnd: { required: true, type: Date },
  cabinet: { required: false, type: [ CabinetMember ] }
});


module.exports = President;

