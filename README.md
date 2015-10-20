# Ember-dropkick [![Build Status](https://travis-ci.org/Robdel12/ember-dropkick.svg)](https://travis-ci.org/Robdel12/ember-dropkick) [![Ember Observer Score](http://emberobserver.com/badges/ember-dropkick.svg)](http://emberobserver.com/addons/ember-dropkick)

## Installation

* `ember install:addon ember-dropkick`

# Usage

Ember Dropkick extends Emberx-select. What this addon does is add "Dropkick sugar"
to Emberx-select. Here are the Emberx-select docs slightly edited for DropKick:

By allowing arbitrary html to appear in the template of the select
element, you can use it just like you would normally. This means
things like having `<optgroup>` tags inside your select, or even plain
old `<option>` elements to represent things like empty values.

XSelect thinly wraps a native `<select>` element so that it can be object
and binding aware. It is used in conjuction with the `dk-option`
component to construct select boxes. E.g.

```handlebars
{{#dk-select value=bob action="selectPerson"}}
  {{#dk-option value=fred}}Fred Flintstone{{/dk-option}}
  {{#dk-option value=bob}}Bob Newhart{{/dk-option}}
{{/dejk-select}}
```

the options are always up to date, so that when the object bound to
`value` changes, the corresponding option becomes selected.

Whenever the select tag receives a change event, it will fire
`action`.

If you're just changing a model's property, you don't need `action`. For example,
if you have a model with a `status` field with an integer, you can do this:

```handlebars
{{#dk-select value=model.status }}
  {{#dk-option value=1}}Active{{/dk-option}}
  {{#dk-option value=2}}Inactive{{/dk-option}}
{{/dk-select}}
```

### Multiselect

Ember-dropkick supports the `multiple` option. This means you can pass an array
as its value, and it will set its selections directly on that array.

```handlebars
{{#dk-select value=selections multiple=true action="selectionsChanged"}}
 {{#dk-option value=fred}}Fred Flintstone{{/dk-option}}
 {{#dk-option value=bob}}Bob Newhart{{/dk-option}}
 {{#dk-option value=andrew}}Andrew WK{{/dk-option}}
{{/dk-select}}
```

The selections array will be initialized to an empty array if not present.


## Action and Action Arguments

The action that is dispatched by dk-select whenever the selected value or values
change has a function signature of:

```js
/**
* @param value {Object} the value selected by the user.
* @param component {Ember.Component} the dk-select component itself
*/
function (value, component) {
  // action body...
}
```

Most of the time all you need is the value that has been selected, but
sometimes your action requires more context than just that. In those
cases, you can associate arbitrary attributes with the component
itself and use them later inside your action handler.  For example:

```handlebars
{{#dk-select action="didMakeSelection" default=anything}}
  <option>Nothing</option>
  {{#dk-option value=something}}Something{{/dk-option}}
{{/dk-select}}
```
then, inside your action handler:

```js
export default Ember.Route.extend({
  actions: {
    didMakeSelection: function(selection, component) {
      if (selection) {
        this.set('selection', selection)
      } else {
        this.set('selection', component.get('default'))
      }
    }
  }
});
```

## Passing DropKick options

In your controller:
```javascript
export default Ember.Controller.extend({
  settings: {
    mobile: true
    .... (dk settings)
  }
});
```

In your template:
```handlebars
{{#dk-select action="didMakeSelection" default=anything settings=settings}}
  {{#dk-option value="nothing"}}Nothing{{/dk-option}}
  {{#dk-option value="something"}}Something{{/dk-option}}
{{/dk-select}}
```
[You can see all of the options you can pass DropKick here.](http://dropkickjs.com/api.html#list_of_properties)

## Accessing the DropKick object

In some method somewhere:

`Dropkick("#your_select_id").select(0)` (or what ever method you chose).

We can do this because DropKick caches the objects it creates.
