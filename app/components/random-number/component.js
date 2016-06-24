import Ember from 'ember';

export default Ember.Component.extend({
  calculation: '+', //defaul calculation
  numberA: '1',
  numberB: '1',
  result: function() {
    let result = 0;
    let cal = this.get('calculation');
    switch(cal){
      case "+":
        result = this.numberA + this.numberB;
        break;
      case "-":
        result = this.numberA - this.numberB;
        break;
    }
    return result;
    //return Math.pow(this.get('numberA'),2);
  }.property('number'),
  actions: {
    clear: function() {
      this.set('number',0);
    }
  }
});
