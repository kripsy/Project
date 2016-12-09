/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

(function (can, $) {
  'use strict';

  GGRC.Components('inlineCheckbox', {
    tag: 'inline-checkbox',
    template: can.view(
      GGRC.mustache_path +
      '/components/inline_edit/checkbox.mustache'
    ),
    scope: {
    },
    events: {
    }
  });
})(window.can, window.can.$);
