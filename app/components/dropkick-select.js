import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['dk-wrapper'],

  didInsertElement: function(){
    new Dropkick(this.$('select')[0]);
  }
});
