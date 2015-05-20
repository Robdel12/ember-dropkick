/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-dropkick',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/dropkick/build/js/dropkick.min.js');
    app.import(app.bowerDirectory + '/dropkick/build/css/dropkick.css');
  }

};
