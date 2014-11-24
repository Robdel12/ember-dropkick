module.exports = {
  name: 'ember-dropkick',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/DropKick.js/dropkick.js');
    app.import(app.bowerDirectory + '/DropKick.js/css/dropkick.css');
  }

};
