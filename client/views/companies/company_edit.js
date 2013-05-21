Template.companyEdit.helpers({ 
	company: function() {
return Companies.findOne(Session.get('currentCompanyId')); }
});
Template.companyEdit.events({ 'submit form': function(e) {
e.preventDefault();
var currentCompanyId = Session.get('currentCompanyId');
var companyProperties = {
firstname: $(e.target).find('[name=firstname]').val(), 
title: $(e.target).find('[name=title]').val()
}
Companies.update(currentCompanyId, {$set: companyProperties}, function(error) { 
	if (error) {
// display the error to the user
alert(error.reason); } else {
Meteor.Router.to('companyPage', currentCompanyId); }
}); },
'click .delete': function(e) { e.preventDefault();
if (confirm("Delete this company?")) {
var currentCompanyId = Session.get('currentCompanyId'); 
Companies.remove(currentCompanyId); 
Meteor.Router.to('companiesList');
} }
});