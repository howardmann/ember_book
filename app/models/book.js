import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  author: DS.belongsTo('author'),
  publisher: DS.belongsTo('publisher')  
});
