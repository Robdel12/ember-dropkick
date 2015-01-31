/* global Dropkick */
import Ember from 'ember';

export default Ember.Select.extend({

  _dk: null,
  settings: {},

  setUpDropKick: function() {
    var self = this,
      oldChange = this.get('settings.change');

    this.set('settings.change', function() {
      self.trigger('change');

      if (typeof oldChange === 'function') {
        oldChange.call(this);
      }
    });
  }.on('init'),

  updateDk: function() {
    if (this._dk !== null) {
      // Dropkick/master needs update to fix `select` method bug
      //this._dk.select(this.get('value'));
      this._dk.select(this._dk.search(this.get('value'))[0]);
    }
  }.observes('value'),

  createDk: function() {
    this._dk = new Dropkick(this.get('element'), this.get('settings'));
  }.on('didInsertElement'),

  destroyDk: function() {
    if (this._dk !== null) {
      this._dk.dispose();
    }
  }.on('willDestroyElement')

});
