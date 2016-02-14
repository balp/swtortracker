Charaters = new Mongo.Collection("characters")

Meteor.publish("characters", function() {
  return Charaters.find( {owner: this.userId } );
});

Meteor.startup(function () {
  // code to run on server at startup
});

