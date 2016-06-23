import Ember from 'ember';

export default Ember.Controller.extend({
  display: 'grid',
  actions: {
    openModal: function(paId) {
      var selected= "#" + paId + ".ui.modal";
      //console.log(selected);
      Ember.$(selected).modal('show');
    },
    clickGridView: function() {
      //this.toggleProperty('viewGrid');;
      this.set('display','grid');
    },
    clickListView: function() {
      this.set('display','list');
    }
  }
});
