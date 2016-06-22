import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('blog');
  this.route('pets', function() {
    this.route('gallery');
    //this.route('gallery', {path: '/pets/gallery'});
    this.route('list');
    //this.route('pet');
    this.route('pet', {path: '/pet/:pet_id'});
  });
});

export default Router;
