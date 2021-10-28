const mongoose = require('mongoose');
const { Schema } = mongoose;


const CabinetMember = new Schema({
  order: { required: true, type: Number },
  name: { required: true, type: String }, 
  position: { required: true, type: String },
  termStart: { required: true, type: Date }, 
  termEnd: { required: true, type: Date }
});


module.exports = CabinetMember;

