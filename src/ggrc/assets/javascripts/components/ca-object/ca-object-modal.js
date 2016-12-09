/*!
 Copyright (C) 2016 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (can, GGRC) {
  'use strict';

  var tpl = can.view(GGRC.mustache_path +
    '/components/ca-object/ca-object-modal.mustache');
  var baseCls = 'simple-modal';

  function recalculatePosition(el) {
    var pos = el[0].getBoundingClientRect();
    var top = Math
      .floor(window.document.body.scrollHeight / 2 - pos.height / 2);
    var left = Math
      .floor(window.document.body.scrollWidth / 2 - pos.width / 2);

    return {top: top, left: left};
  }

  GGRC.Components('customAttributeObjectModal', {
    tag: 'ca-object-modal',
    template: tpl,
    scope: {
      instance: null,
      modifiedField: null,
      modalEl: null,
      isEmpty: true,
      modalCls: function () {
        return this.attr('state.open') ? baseCls + '-open' : '';
      },
      modalOverlayCls: function () {
        return this.attr('state.open') ? baseCls + '__overlay-open' : '';
      },
      actionBtnText: function () {
        return this.attr('comment') ? 'Save' : 'Done';
      },
      isPerson: function () {
        return this.attr('modifiedField.value') &&
          this.attr('modifiedField.type') === 'person';
      },
      comment: false,
      evidence: false,
      state: {
        open: false,
        save: false,
        controls: false
      },
      saveAttachments: function () {
        return this.attr('comment') ?
          this.attr('state.save', true) :
          this.attr('state.open', false);
      },
      hide: function hide() {
        this.attr('state.open', false);
        this.attr('state.save', false);
      },
      show: function () {
        this.attr('state.open', true);
        this.attr('state.save', false);
      },
      toggle: function (isOpen) {
        this.setAttachmentFields(isOpen);
        this.setPosition(isOpen);
      },
      mapToInternal: function () {
        this.attr('modifiedField', this.attr('modal'));
      },
      setAttachmentFields: function (isOpen) {
        var attachments = this.attr('modifiedField.fields');

        if (attachments && attachments.length) {
          attachments.forEach(function (item) {
            this.attr(item, isOpen);
          }.bind(this));
        }
      },
      setPosition: function (isOpen) {
        var modal = this.attr('modalEl');
        if (isOpen && modal) {
          modal.offset(recalculatePosition(modal));
        }
      }
    },
    events: {
      inserted: function (el) {
        var modal = el.find('.' + baseCls);
        modal.appendTo('body');
        this.scope.attr('modalEl', modal);
        el.find('.' + baseCls + '__overlay').appendTo('body');
      },
      show: function (scope, ev, val) {
        if (val) {
          this.scope.mapToInternal();
          this.scope.show();
        }
      },
      '{scope.modal} open': 'show',
      '{scope.state} open': function (scope, ev, val) {
        this.scope.toggle(val);
      },
      '{window} resize': function () {
        var isOpen = this.scope.attr('modifiedField.open');
        this.scope.setPosition(isOpen);
      }
    }
  });
})(window.can, window.GGRC);
