// test that the toastr global object exists
Tinytest.add("toastr - exists", function(test) {
  if ( toastr)
  test.instanceOf(toastr, Object);
});

// test if able to set options
Tinytest.add("toastr - options", function(test){
  toastr.options.closeButton = false;
  test.equal(toastr.options.closeButton, false);
});