import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('publishers', function() {
    this.route('publisher', {
      path: ':publisher_id'
    }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('authors', function() {
    this.route('author', {
      path: ':author_id'
    });
    this.route('new');
  });
  this.route('books', function() {
    this.route('book', {
      path: ':book_id'
    });
  });
  this.route('fans', function() {
    this.route('fan', {
      path: ':fan_id'
    });
  });
});

export default Router;
