
var filterSelects = function(e) {
    console.log(e)
    Session.set("editAllegiance", $('#charAllegiance').val());
    Session.set("editBaseClass", $('#charClass').val());
    Session.set("editAvdClass", $('#charAdvClass').val());
};

Template.addCharacter.helpers({
   inAllegience: function(allegiance) {
     var current = Session.get("editAllegiance");
     console.log(current, allegiance, current === allegiance)
     return current === allegiance;
   },
   inClass: function(baseClass) {
     var current = Session.get("editBaseClass");
     console.log(current, baseClass, current === baseClass)
     return current === baseClass;
   },
   inAdvClass: function(advClass) {
     var current = Session.get("editAdvClass");
     console.log(current, advClass, current === advClass)
     return current === advClass;
   }
});

Template.addCharacter.events({
  'change form': function(e, b) {
    filterSelects(e)
  },
  'submit form': function(e, b) {
    console.log( $("#charServer" ) )
    var newChar = {
      owner: Meteor.userId(),
      username: Meteor.user().username,
      server: $('#charServer').val(),
      allegiance: $('#charAllegiance').val(),
      name: $('#charName').val(),
      species: $('#charSpecies').val(),
      baseClass: $('#charClass').val(),
      advClass: $('#charAdvClass').val(),
      skillTree: $('#charSkillTree').val()
    };
    console.log(newChar)
    Meteor.call("addCharacter", newChar);
    //Charaters.insert(newChar)
    $('#addCharacterForm').find('input:text').val('');
  }
});

Template.addCharacter.onRendered(function() {
  filterSelects(e)
});
