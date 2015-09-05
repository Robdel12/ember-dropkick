/* global Dropkick */
import Ember from 'ember';
import XSelectComponent from 'emberx-select/components/x-select';

export default XSelectComponent.extend({

  _dk: null,
  settings: {},

  createDk: Ember.on('didInsertElement', function() {
    this._dk = new Dropkick(this.get('element'), this.get('settings'));
  }),

  destroyDk: Ember.on('willDestroyElement', function() {
    if (this._dk !== null) {
      this._dk.dispose();
    }
  })
});
