import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('one-way-input.js', 'Integration | Component | one way input.js', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{one-way-input.js}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#one-way-input.js}}
      template block text
    {{/one-way-input.js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
