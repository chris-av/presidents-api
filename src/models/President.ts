import { Schema } from 'mongoose';
import CabinetMember from './CabinetMember';
import War from './War';

const President = new Schema({
  order: { required: true, type: Number },
  name: { required: true, type: String },
  termStart: { required: true, type: Date },
  termEnd: { required: true, type: Date },
  cabinet: { required: false, type: [CabinetMember] },

  birthPlace: { required: false, type: String, },
  birthDate: {
    exactDate: {
      required: false,
      type: Boolean,
    },
    range: {
      required: false,
      type: String,
    },
  },
  previousOccupation: { required: false, type: String, },
  wasCongressHouse: { required: true, type: Boolean, },
  wasCongressSenate: { required: true, type: Boolean, },
  wasStateHouse: { required: true, type: Boolean, },
  wasStateSenate: { required: true, type: Boolean, },
  wasGovernor: { required: true, type: Boolean, },
  presidedWar: { required: true, type: Boolean, },
  servedMilitary: { required: true, type: Boolean, },

  n_exec_orders: { required: false, type: Number },
  n_judicial_nominations: { required: false, type: Number },
  n_judicial_nominations_succ: { required: false, type: Number },
  n_pardons: { required: false, type: Number },
  n_commutations: { required: false, type: Number },

  wars_presided: {
    required: true, type: [War],
  },

});


export default President;

