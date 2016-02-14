
var filterSelects = function() {
    Session.set("selectedAllegiance", $('#charAllegiance').val());
    Session.set("selectedBaseClass", $('#charClass').val());
    Session.set("selectedAdvanceClass", $('#charAdvClass').val());
};

Template.addCharacter.helpers({
   inAllegience: function(allegiance) {
     var current = Session.get("selectedAllegiance");
     //console.log("inAllegience", current, allegiance, current === allegiance)
     return current === allegiance;
   },
   inClass: function(baseClass) {
     var current = Session.get("selectedBaseClass");
     // console.log("inClass", current, baseClass, current === baseClass)
     return current === baseClass;
   },
   inAdvClass: function(advClass) {
     var current = Session.get("selectedAdvanceClass");
     //console.log("inAdvClass", current, advClass, current === advClass)
     return current === advClass;
   }
});

Template.addCharacter.events({
  'change form': function(e, b) {
    filterSelects()
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
    //console.log(newChar)
    Meteor.call("addCharacter", newChar);
    //Charaters.insert(newChar)
    $('#addCharacterForm').find('input:text').val('');
  }
});

Template.addCharacter.onCreated(function() {
    Session.setDefault("selectedAllegiance", "republic");
    Session.setDefault("selectedBaseClass", "Trooper");
    Session.setDefault("selectedAdvanceClass", "Vanguard");
});
