

Meteor.methods({
  addCharacter: function(character) {
    if(! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    character.owner = Meteor.userId();
    character.username = Meteor.user().username;
    character.createdat = new Date();
    character.updated = new Date();
    Charaters.insert(character)
  },
  updateCharacter: function(id, character) {
    var existingCharacter = Charaters.findOne(id)
    if(existingCharacter.owner !== Meteor.userId() ) {
      throw new Meteor.Error("not-authorized");
    }
    character.updated = new Date();
    Charaters.update(id, {$set: character})
  },
  removeCharacter: function(id){
    var character = Charaters.findOne(id)
    if(character.owner !== Meteor.userId() ) {
      throw new Meteor.Error("not-authorized");
    }
    Charaters.remove(id)
  }

});
