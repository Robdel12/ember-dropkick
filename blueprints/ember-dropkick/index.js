/* global module */

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('dropkick', 'v2.1');
  }
};
