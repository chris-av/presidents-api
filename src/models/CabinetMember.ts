import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const CabinetMember = new Schema({
  order: { required: true, type: Number },
  name: { required: true, type: String },
  position: { required: true, type: String },
  termStart: { required: false, type: Date },
  termEnd: { required: false, type: Date }
});


export default CabinetMember;

