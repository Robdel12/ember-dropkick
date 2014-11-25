/* global Dropkick */
import Ember from 'ember';

export default Ember.Select.extend({
  settings: {},
  _dk: null,

  init: function() {
    var self = this,
      oldChange = this.get('settings.change');

    this._super();

    this.set('settings.change', function() {
      self.trigger('change');

      if (typeof oldChange === 'function') {
        oldChange.call(this);
      }
    });
  },

  createDk: function() {
    var selectElement = this.element;

    this.element = document.createDocumentFragment();
    this.element.appendChild(selectElement);

    this._dk = new Dropkick(selectElement, this.get('settings'));
  }.on('didInsertElement'),

  destroyDk: function() {
    this._dk.dispose();
  }.on('willDestroyElement')
});
