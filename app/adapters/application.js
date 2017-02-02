import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  methodForRequest({ requestType }) {
    if (requestType === "updateRecord") {
      return "PUT";
    }
    return this._super(...arguments);
  }
});
