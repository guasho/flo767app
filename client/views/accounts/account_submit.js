Template.accountSubmit.events({ 
'submit form': function(event) {
event.preventDefault();
var account = {

email: $(event.target).find('[name=email]').val(),
firstname: $(event.target).find('[name=firstname]').val(), 
lastname: $(event.target).find('[name=lastname]').val(),
title: $(event.target).find('[name=title]').val(),
companyname: $(event.target).find('[name=companyname]').val(), 
telephone: $(event.target).find('[name=telephone]').val(),
password: $(event.target).find('[name=password]').val(),
confirmpassword: $(event.target).find('[name=confirmpassword]').val(), 


}
account._id = Accounts.insert(account);
Meteor.Router.to('accountPage', account); }
});