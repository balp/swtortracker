
var saveCharater = function(){
  var editCharater = {
      server: $('#editServer').val(),
      allegiance: $('#editAllegiance').val(),
      name: $('#editName').val(),
      species: $('#editSpecies').val(),
      baseClass: $('#editClass').val(),
      advClass: $('#editAdvClass').val(),
      skillTree: $('#editSkillTree').val()
  }
  Charaters.update(Session.get('editCharaterId'), {$set: editCharater})
  Session.set('editCharaterId', null)
}

Template.character.helpers({
  selected: function(value, option) {
    console.log(value, option);
    return value == option ? 'selected' : '';
  },
  editing: function() {
    return Session.equals('editCharaterId', this._id);
  }
});

Template.character.events({
  'click .deleteCharater': function(){
    Charaters.remove(this._id);
  },
  'click .editCharater': function() {
    Session.set('editCharaterId', this._id);
  },
  'click .cancelCharater': function() {
    Session.set('editCharaterId', null);
  },
  'click .saveCharater': function() {
     saveCharater();
  },
  'keypress input': function(e){
    if(e.keyCode == 13){
      saveCharater()
    }
    else if(e.keyCode == 27) {
      Session.set('editCharaterId', null)
    }
  }
});

