Charaters = new Mongo.Collection("characters")

Meteor.subscribe("characters")

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.charaterList.helpers({
  characters: function() {
    return Charaters.find( {owner: Meteor.userId() } );
  }
});
