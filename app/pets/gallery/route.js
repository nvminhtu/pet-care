import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var petItems = [
      {
        id: '1',
        name: 'Lulu',
        comment: 'They are very protective of their property and family, friendly with children, but suspicious of any strangers, and can be stubborn.',
        image: 'ember-atlanta.png'
      },
      {
        id: '2',
        name: 'Mimi',
        comment: 'The Deutsche Bracke is a small hound, 40 - 53 cm (16 - 21 ins) at the withers, with long drop ears and a long narrow tail. It is distinguished by a long, somewhat narrow head, and a rectangular body, described as \"elegant\".',
        image: 'ember-boston.jpeg'
      },
      {
        id: '3',
        name: 'Momo',
        comment: 'The nightingale is a small species of bird thought to be formally members of the thrush family. The nightingale is often mistaken for the robin, as ',
        image: 'ember.png'
      }
    ];

    return petItems;
  },
  setupController: function(controller, model) {
    this._super(controller,model);
    controller.set('pets', model); //get and parse model to controller
  }
});
