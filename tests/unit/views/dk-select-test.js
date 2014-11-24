import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

moduleFor('view:dk-select', 'DkSelectView');

test('should exist', function() {
  ok(this.subject());
});

test('should render Dropkick', function() {
  var view = this.subject({
    content: ['option 1']
  });

  Ember.run(function() {
    view.appendTo('#qunit-fixture');
  });

  ok(view._dk);
});
