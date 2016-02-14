Charaters = new Mongo.Collection("characters")

Template.charaterList.helpers({
  characters: function() {
    return Charaters.find();
  }
});

Template.addCharacter.events({
  'submit form': function(e, b) {
    console.log( $("#charServer" ) )
    var newChar = {
      server: $('#charServer').val(),
      allegiance: $('#charAllegiance').val(),
      name: $('#charName').val(),
      species: $('#charSpecies').val(),
      baseClass: $('#charClass').val(),
      advClass: $('#charAdvClass').val(),
      skillTree: $('#charSkillTree').val()
    };
    console.log(newChar)
    Charaters.insert(newChar)
    $('#addCharacterForm').find('input:text').val('');
  }
});
