import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPublisher(model){
      model.save();
      this.transitionTo('publishers');
    }
  },
  model(){
    return this.store.createRecord('publisher');
  }
});
