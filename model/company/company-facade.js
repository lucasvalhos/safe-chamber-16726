const Model = require('../../lib/facade');
const companySchema  = require('./company-schema');

class CompanyModel extends Model {}

module.exports = new CompanyModel(companySchema);
