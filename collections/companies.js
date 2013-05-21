Companies = new Meteor.Collection('companies');
Companies.allow({
insert: function(userId, doc) {
// only allow posting if you are logged in
return !! userId; }
});