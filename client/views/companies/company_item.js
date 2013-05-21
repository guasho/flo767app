Template.companyItem.helpers({ 
adminCompany: function() {
return this.userId == Meteor.userId(); 
},

companyname: function() {
var a = document.createElement('a'); a.href = this.url;
return a.hostname;
} });