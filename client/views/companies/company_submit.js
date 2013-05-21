Template.companySubmit.events({ 
'submit form': function(event) {
event.preventDefault();
var company = {

email: $(event.target).find('[name=email]').val(),
firstname: $(event.target).find('[name=firstname]').val(), 
lastname: $(event.target).find('[name=lastname]').val(),
title: $(event.target).find('[name=title]').val(),
companyname: $(event.target).find('[name=companyname]').val(), 
telephone: $(event.target).find('[name=telephone]').val(),
password: $(event.target).find('[name=password]').val(),
confirmpassword: $(event.target).find('[name=confirmpassword]').val(), 


}
company._id = Companies.insert(company);
Meteor.Router.to('companyPage', company); }
});