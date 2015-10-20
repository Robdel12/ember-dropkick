/* jshint expr:true */
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;
describe('Acceptance: DropkickSelect', function() {

  beforeEach(function() {
    App = startApp();
    return visit('/');
  });

  beforeEach(function() {
    let el = Ember.$('select');
    let isGlimmer = Ember.VERSION.substring(0, 4) === "1.13";

    if(Ember.View && !isGlimmer) {
      this.component = Ember.View.views[el.attr('id')];
    } else {
      this.component = App.__container__.lookup('-view-registry:main')[el.attr('id')];
    }
    this.$ = function() {
      return this.component.$.apply(this.component, arguments);
    };
    this.controller = App.__container__.lookup('controller:index');
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('renders dk properly', function() {
    expect($('.dk-select')).to.exist;
  });

  describe("when changing the selection", function() {
    beforeEach(function() {
      return window.Dropkick(this.component.element).select("sosoos");
    });

    it("dk updates the controller value", function() {
      expect(this.controller.get('something')).to.equal("sosoos");
    });
  });

});
