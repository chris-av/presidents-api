import mongoose from 'mongoose';
import PresidentModel from './President';
import CabinetMemberModel from './CabinetMember';


export const President = mongoose.model('president', PresidentModel);
export const CabinetMember = mongoose.model('cabinet-member', CabinetMemberModel);

