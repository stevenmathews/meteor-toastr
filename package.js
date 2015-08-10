Package.describe({
  "name": "chrismbeckett:toastr",
  "summary": "Gnome / Growl type non-blocking notifications",
  "version": "2.1.2_1",
  "git": "https://github.com/chrismbeckett/meteor-toastr"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@0.9.4");
  api.use("jquery", ["client"]);

  api.addFiles("lib/toastr.js", ["client"]);
  api.addFiles("lib/toastr.css", ["client"]);

});

Package.onTest(function(api) {

  api.use("tinytest");
  api.use("chrismbeckett:toastr");
  api.addFiles("test/client/toastr_test.js", ["client"]);

});