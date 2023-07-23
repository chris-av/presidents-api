import { Schema } from 'mongoose';

const War = new Schema({
  name: { required: true, type: String, },
  official_decl: { required: true, type: Boolean, },
  dates: {
    officialStart: { required: false, type: Date, },
    officialEnd: { required: false, type: Date, },
    approxStart: { required: false, type: Date, },
    approxEnd: { required: false, type: Date, },
  },
  casualties: {
    range_approx: { require: true, type: Number },
    official: { require: false, type: Number },
  },
  treaties: {
    declarationStart: {
      name: { required: true, type: String, },
      official_name: { required: true, type: String, },
    },
    declarationEnd: {
      name: { required: true, type: String, },
      official_name: { required: true, type: String, },
    },
  },
});


export default War;

