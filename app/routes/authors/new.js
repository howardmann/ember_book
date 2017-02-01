import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createAuthor(model){
      // Trigger another ember action by calling this.send('actionName');
      this.send('changed');
      var self = this;
      model.save().then(function(result){
        self.transitionTo('authors.author', result.id);
      });
    },
    changed(){
      var publisherId = $('option:selected').val();
      let publisher = this.currentModel.publishers.findBy('id', publisherId);
      this.currentModel.author.set('publisher', publisher);

      // Old code, refactored to minimize fetch requests
      // return this.store.findRecord('publisher', publisherId).then(function(publisher){
      //   model.set('publisher', publisher);
      // });
    }
  },
  model(){
    return Ember.RSVP.hash({
       author: this.store.createRecord('author'),
       publishers: this.store.findAll('publisher')
    })
  }
});
