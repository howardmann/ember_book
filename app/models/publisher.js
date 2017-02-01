import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  country: DS.attr(),
  authors: DS.hasMany('author'),
  books: DS.hasMany('book')
});
