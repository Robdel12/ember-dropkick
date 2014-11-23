module.exports = {
  name: 'ember-dropkick',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/dropkick.js/dropkick.js');
    app.import(app.bowerDirectory + '/dropkick.js/css/dropkick.css');
  }

};
