const mongoose = require('mongoose');
const { Schema } = mongoose;


const CabinetMember = new Schema({
  order: { required: true, type: Number },
  name: { required: true, type: String }, 
  position: { required: true, type: String },
  termStart: { required: false, type: Date }, 
  termEnd: { required: false, type: Date }
});


module.exports = CabinetMember;

