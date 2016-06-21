import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var tabItems = [
      {
        title: 'Tab 1',
        content: 'Content for tab 1'
      },
      {
        title: 'Tab 2',
        content: 'Content for tab 2'
      },
      {
        title: 'Tab 3',
        content: 'Content for tab 3'
      }
    ];
    return tabItems;
  }
});
