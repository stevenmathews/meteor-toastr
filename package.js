Package.describe({
  "name": "chrismbeckett:toastr",
  "summary": "JavaScript library for Gnome / Growl type non-blocking notifications",
  "version": "1.0.0",
  "git": "https://github.com/chrismbeckett/meteor-toastr"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles("toastr.js");
  api.addFiles("toastr.css");
  api.export("toastr");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("chrismbeckett:toastr");
});