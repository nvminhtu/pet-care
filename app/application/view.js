import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();
    //add jQuery <Semantic UI>
    this.fixedMenu();
    this.dropdownElement();
    this.loadImage();
    this.customFunction();
  },

  // Opt1: Create many custom functions to call jQuery action to DOM
  fixedMenu: function() { //function: custom menu fixed
    $('.main.menu').visibility({
      type: 'fixed'
    });
  },

  dropdownElement: function(){ // function: dropdown customization
    // disable click of dropdown
    $('.ui.dropdown').click(function(event){
      event.preventDefault();
    });

    // show dropdown on hover
    $('.main.menu .ui.dropdown').dropdown({
      on: 'hover'
    });
  },

  loadImage: function(){ // function: lazy load images
    var $image = $('.image');
    $image.visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });
  },

  customFunction: function(){ // function: Other events, custom function
    //console.log('aaaa');
  }
});
