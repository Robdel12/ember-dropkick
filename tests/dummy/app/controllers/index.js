import Ember from "ember";

export default Ember.Controller.extend({
  something: "Something",
  settings: {
    mobile: true
  },

  actions: {
    someAction(selection) {
      this.set('something', selection);
    }
  }
});
