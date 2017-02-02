import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      this.get('model').save().then(() => {
        this.get('router').transitionTo('publishers');
      });
    },
    delete(){
      if (confirm('Are you sure?')){
        this.get('model').destroyRecord().then(()=>{
          this.get('router').transitionTo('publishers');
        });
      } else {
        return ;
      }
    }
  }
});
