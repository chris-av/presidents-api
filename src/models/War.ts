import mongoose, { Document, Model, Schema } from 'mongoose';


export interface WarType {
  name: string;
  was_official_decl: boolean;
  date: {
    officialStart?: Date;
    officialEnd?: Date;
    approxStart?: string;
    approxEnd?: string;
  };
  casualties: {
    range_approx: {
      min: number;
      max: number;
    };
    offical: Number;
  };
}

export const WarSchema = new Schema<WarType>({
  name: { required: true, type: String, },
  was_official_decl: { required: true, type: Boolean, },
  date: {
    officialStart: { required: false, type: Date, },
    officialEnd: { required: false, type: Date, },
    approxStart: { required: false, type: Date, },
    approxEnd: { required: false, type: Date, },
  },
  casualties: {
    range_approx: { require: true, type: Number },
    official: { require: false, type: Number },
  },
});


export interface WarDocument extends WarType, Document {}
export interface WarModel extends Model<WarDocument> {}
export const War = mongoose.model('war', WarSchema);

