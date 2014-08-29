Package.describe({
  "name": "chrismbeckett:toastr",
  "summary": "JavaScript library for Gnome / Growl type non-blocking notifications",
  "version": "1.0.1",
  "git": "https://github.com/chrismbeckett/meteor-toastr"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("jquery", ["client"]);
  api.addFiles("toastr.js", ["client"]);
  api.addFiles("toastr.css", ["client"]);
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("chrismbeckett:toastr");
});