import mongoose, { Document, Model, Schema } from 'mongoose';


export interface CabinetMemberType {
  order: number;
  name: string;
  position: string;
  termStart: Date;
  termEnd: Date;
}


export const CabinetMemberSchema = new Schema<CabinetMemberType>({
  order: { required: true, type: Number },
  name: { required: true, type: String },
  position: { required: true, type: String },
  termStart: { required: false, type: Date },
  termEnd: { required: false, type: Date }
});


export interface CabinetMemberDocument extends CabinetMemberType, Document {}
export interface CabinetMemberModel extends Model<CabinetMemberDocument> {}
export const CabinetMember = mongoose.model('cabinet-member', CabinetMemberSchema);

