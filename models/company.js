//
// This file contains functions called from routes/companys.js
//

var db = require('../connect');
var company = {
    getAllCompanys: function(callback) {
        return db.query("select * from company", callback);
    },
    getCompanyById: function(id, callback) {
        return db.query("select * from company where company_id=?", [id], callback);
    },
    addCompany: function(company, callback) {
        return db.query("Insert into company values(?,?,?)", [company.id, company.first, company.last], callback);
    },
    deleteCompany: function(id, callback) {
        return db.query("delete from company where company_id=?", [id], callback);
    },
    updateCompany: function(id, company, callback) {
        return db.query("update company set first=?,last=? where company_id=?", [company.first, company.last, id], callback);
    }
};
module.exports = company;
