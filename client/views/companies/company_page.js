Template.companyPage.helpers({ 
currentCompany: function() {
return Companies.findOne(Session.get('currentCompanyId')); }
});