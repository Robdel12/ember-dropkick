# Ember-dropkick [![Build Status](https://travis-ci.org/Robdel12/ember-dropkick.svg)](https://travis-ci.org/Robdel12/ember-dropkick) [![Ember Observer Score](http://emberobserver.com/badges/ember-dropkick.svg)](http://emberobserver.com/addons/ember-dropkick)

## Installation

* `ember install:addon ember-dropkick`

**Note that we are still testing this. If you find issues please let us know by opening a github issue!**

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
