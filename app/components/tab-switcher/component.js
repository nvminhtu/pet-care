import Ember from 'ember';

export default Ember.Component.extend({
  //set default of tabItem to display
  defaultTabItem: 0,
  selectedTabItem: function(){
    let tabItems = this.get('tabItems'),
        defaultTab = this.get('defaultTabItem');
    return tabItems[defaultTab];
  },
  actions: {
    setSelectedTabItem: function(tabItem){
      this.set('selectedTabItem', tabItem);
    }
  }
});
