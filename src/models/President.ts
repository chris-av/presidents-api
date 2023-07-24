import mongoose, { Document, Model, Schema } from 'mongoose';
import { CabinetMemberType, CabinetMemberSchema } from './CabinetMember';
import { WarType, WarSchema } from './War';


export interface PresidentType {
  order: number;
  name: string;
  termStart: Date;
  termEnd: Date;
  cabinet: CabinetMemberType[];
  birthPlace: string;
  birthDate: {
    exactDate: boolean;
    range: string;
  };
  previousOccupation: string;
  wasCongressHouse: boolean;
  wasCongressSenate: boolean;
  wasStateHouse: boolean;
  wasStateSenate: boolean;
  wasGovernor: boolean;
  presidedWar: boolean;
  servedMilitary: boolean;
  n_exec_orders: number,
  n_judicial_nominations: number,
  n_judicial_nominations_succ: number,
  n_pardons: number,
  n_commutations: number,
  wars_presided: WarType[],
}


const PresidentSchema = new Schema({
  order: { required: true, type: Number },
  name: { required: true, type: String },
  termStart: { required: true, type: Date },
  termEnd: { required: true, type: Date },
  cabinet: { required: false, type: [CabinetMemberSchema] },

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
    required: true, type: [WarSchema],
  },

});


export interface PresidentDocument extends PresidentType, Document {}
export interface PresidentModel extends Model<PresidentDocument> {}
export const President = mongoose.model('president', PresidentSchema);

