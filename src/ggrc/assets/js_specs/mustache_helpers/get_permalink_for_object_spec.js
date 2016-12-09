/*!
  Copyright (C) 2016 Google Inc.
  Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

describe("can.mustache.helper.get_permalink_for_object", function () {
  var fakeOptions,
      helper;

  beforeAll(function () {
    fakeOptions = {
      fn: jasmine.createSpy()
    };

    helper = can.Mustache._helpers["get_permalink_for_object"].fn;
  });

  it("concatenates window.location.origin and objects view link",
    function () {
      var instance = {
        viewLink: "/facility/1"
      };
      expect(helper(instance)).toBe(window.location.origin + "/facility/1");
    }
  );

  it("returns empty string when objects view link is not present",
    function () {
      var instance = {};
      expect(helper(instance)).toBe("");
    }
  );

});
