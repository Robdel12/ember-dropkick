/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-dropkick',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/dropkick/dropkick.js');
    app.import(app.bowerDirectory + '/dropkick/css/dropkick.css');
  }

};
