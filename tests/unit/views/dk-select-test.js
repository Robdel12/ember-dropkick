import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

var run = Ember.run;

moduleFor('view:dk-select', 'DkSelectView', {
  setup: function() {
    run(this, function() {
      this.view = this.subject({
        content: ['option 1', 'option 2'],
        value: 'option 1'
      });

      this.view.appendTo('#ember-testing');
    });
  }
});

test('should exist', function() {
  ok(!!this.view); // boolean to avoid stringify bug with testem and chrome
});

test('should render Dropkick', function() {
  ok(!!this.view._dk); // boolean (see above)
});

test('should update Dropkick', function() {
  run(this, function() {
    this.view.set('value', 'option 2');
  });

  equal(this.view._dk.value, 'option 2');
});

test('should update value', function() {
  run(this.view._dk, function() {
    // Dropkick/master needs update to fix `select` method bug
    //this.select('option 2');
    this.select(this.search('option 2')[0]);
  });

  equal(this.view.get('value'), 'option 2');
});
