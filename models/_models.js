const mongoose = require('mongoose');
const President = require('./President');
const CabinetMember = require('./CabinetMember');

module.exports = {
  President: mongoose.model('president', President),
  CabinetMember: mongoose.model('cabinet-member', CabinetMember),
}
