import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  age: DS.attr(),
  author: DS.attr()
});