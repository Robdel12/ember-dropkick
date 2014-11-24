import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['dk-wrapper'],
  firstSelected: null,
  multi: false,

  didInsertElement: function(){
    var dropkick = new Dropkick(this.$('select')[0]);

    if(this.get('firstSelected')) {
      dropkick.select(parseInt(this.get('firstSelected'), 10) - 1);
    }

  }
});
