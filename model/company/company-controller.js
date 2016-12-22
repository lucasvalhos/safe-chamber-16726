const Controller = require('../../lib/controller');
const companyFacade  = require('./company-facade');

class CompanyController extends Controller {}

module.exports = new CompanyController(companyFacade);
