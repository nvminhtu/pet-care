import Ember from 'ember';

export default Ember.Controller.extend({
  itemActions: ["Edit","Remove","Hide"],
  selectedAction: null,
  actions: {
    updateSelected: function(component,id,value){
      this.set('selectedAction', id);
    }
  }
});
