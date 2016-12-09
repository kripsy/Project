/*!
 Copyright (C) 2016 Google Inc., authors, and contributors
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (can, GGRC) {
  'use strict';

  var tpl = can.view(GGRC.mustache_path +
    '/components/ca-object/ca-object-title.mustache');

  GGRC.Components('customAttributesObjectTitle', {
    tag: 'ca-object-title',
    template: tpl,
    scope: {
      titleText: null
    }
  });
})(window.can, window.GGRC);
