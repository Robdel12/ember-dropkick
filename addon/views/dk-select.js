/* global Dropkick */
import Ember from 'ember';

export default Ember.Select.extend({

  _dk: null,
  settings: {},

  init: function() {
    var self = this,
      oldChange = this.get('settings.change');

    this._super.apply(this, arguments);

    this.set('settings.change', function() {
      self.trigger('change');

      if (typeof oldChange === 'function') {
        oldChange.call(this);
      }
    });
  },

  updateDk: Ember.observer('value', function() {
    if (this._dk !== null) {
      this._dk.select(this.get('value'));
    }
  }),

  createDk: Ember.on('didInsertElement', function() {
    this._dk = new Dropkick(this.get('element'), this.get('settings'));
  }),

  destroyDk: Ember.on('willDestroyElement', function() {
    if (this._dk !== null) {
      this._dk.dispose();
    }
  })

});
