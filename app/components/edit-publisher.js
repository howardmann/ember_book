import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      this.get('model').save().then(() => {
        this.get('router').transitionTo('publishers');
      });
    }
  }
});
