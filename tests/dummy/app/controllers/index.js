import Ember from "ember";

var optionsArray = ["Option 1", "Option 2", "Option 3", "Option 4"];

export default Ember.Controller.extend({
  options: Ember.A(optionsArray),
  settings: {
    mobile: true
  }
});
