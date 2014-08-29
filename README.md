# Meteor toastr [![Build Status](https://travis-ci.org/chrismbeckett/meteor-toastr.svg)](https://travis-ci.org/chrismbeckett/meteor-toastr)

Gnome / Growl type non-blocking notifications.

## Current Version

**v1.0.2**

## Usage

Use toastr to display notifications for info, success, warning and errors.

```js
  // Display a warning toast, with no title
  toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

  // Display a success toast, with a title
  toastr.success('Have fun storming the castle!', 'Miracle Max Says')

  // Display an error toast, with a title
  toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

  // Clears the current list of toasts
  toastr.clear()
```

## Demo

To explore additional options, try the [demo](http://codeseven.github.io/toastr/demo.html).

## Attribution

This package utilizes the [toastr](http://www.toastrjs.com/) library
authored by [John Papa](http://twitter.com/John_Papa) and
[Hans Fjällemark](http://twitter.com/hfjallemark).

## License

[The MIT License (MIT)](http://www.opensource.org/licenses/mit-license.php)
<br>
Copyright (c) 2013 [Chris Beckett](https://github.com/chrismbeckett)
