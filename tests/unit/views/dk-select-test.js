import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

var run = Ember.run;
var optionsArray = ['option 1', 'option 2'];

moduleFor('view:dk-select', 'DkSelectView', {
  setup: function() {
    run(this, function() {
      this.view = this.subject({
        content: Ember.A(optionsArray),
        value: 'option 1'
      });

      this.view.appendTo('#ember-testing');
    });
  }
});

test('should exist', function(assert) {
  assert.ok(!!this.view); // boolean to avoid stringify bug with testem and chrome
});

test('should render Dropkick', function(assert) {
  assert.ok(!!this.view._dk); // boolean (see above)
});

test('should update Dropkick', function(assert) {
  run(this, function() {
    this.view.set('value', 'option 2');
  });

  assert.equal(this.view._dk.value, 'option 2');
});

test('should update value', function(assert) {
  run(this.view._dk, function() {
    this.select(this.select('option 2'));
  });

  assert.equal(this.view.get('value'), 'option 2');
});
