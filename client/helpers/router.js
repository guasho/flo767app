Meteor.Router.add({ 

'/companies/:_id': {
to: 'companyPage',
and: function(id) { Session.set('currentCompanyId', id); }
},

'/accounts/:_id': {
to: 'accountPage',
and: function(id) { Session.set('currentAccountId', id); }
},

'/companyadd': 'companySubmit',
'/companieslist': 'companiesList', 
'/accountadd': 'accountSubmit', 


'/companies/:_id/edit': {
to: 'companyEdit',
and: function(id) { Session.set('currentCompanyId', id); }
},


});

Meteor.Router.filters({ 'requireLogin': function(page) {
if (Meteor.user()) return page;
else if (Meteor.loggingIn()) return 'loading';
else
return 'accessDenied';
} });
Meteor.Router.filter('requireLogin', {only: 'companySubmit'});
Meteor.Router.filter('requireLogin', {only: 'companiesList'});
Meteor.Router.filter('requireLogin', {only: 'accountSubmit'});

