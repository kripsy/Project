/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/


(function (can, $) {

  // Only load this file when the URL is mockups/sample:
  if (window.location.pathname !== "/mockups/assessor") {
    return;
  }

  // Setup the object page:
  var mockup = new CMS.Controllers.MockupHelper($("body"), {
    // Object:
    object: {
      icon: "grciconlarge-assessment",
      title: "My Assessments",
    },
    infopin: "normal",
    // Views:
    views: _.values(GGRC.Bootstrap.Mockups.Assessor)
  });
})(this.can, this.can.$);
