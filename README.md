# TODOs:
- [ ] TODO: Update package.json with correct info after plugin is built (version number mainly)
- [x] TODO: Write simple tests
- [x] TODO: Extend `Ember.Select`
- [x] TODO: Write installation guide in place of this README

# Ember-dropkick [![Build Status](https://travis-ci.org/Robdel12/ember-dropkick.svg)](https://travis-ci.org/Robdel12/ember-dropkick)

## Installation

* `npm install ember-dropkick --save-dev`
* `bower install`

# Usage

Ember Dropkick extends Ember.select so everything you would do with an Ember.Select you can do with Ember DropKick!

In your template:

`{{view "dk-select" content=yourOptions settings=yourSettings}}`

In your controller:
```javascript
export default Ember.ObjectController.extend({
  yourOptions: ["Your", "Options", "Here"],
  settings: {
    mobile: true
    .... (dk settings)
  }
});
```
If you would like to use the methods on dk select add an ID to the select.

`{{view "dk-select" content=yourOptions settings=yourSettings id="your_id"}}`

In your controller somewhere:

`Dropkick("#your_id").select(0)` (or what ever method you chose).

We can do this because DropKick caches the objects it creates.
