/*!
 Copyright (C) 2016 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (GGRC, can) {
  GGRC.ListLoaders.BaseListLoader('GGRC.ListLoaders.MultiListLoader', {}, {
    init: function (sources) {
      this._super();

      this.sources = sources || [];
    },
    init_listeners: function (binding) {
      var self = this;

      if (!binding.source_bindings)
        binding.source_bindings = [];

      can.each(this.sources, function (source) {
        var sourceBinding = binding.instance.get_binding(source);
        if (source) {
          binding.source_bindings.push(sourceBinding);
          self.init_source_listeners(binding, sourceBinding);
        }
      });
    },
    insert_from_source_binding: function (binding, results, index) {
      var self = this;
      var newResults;

      newResults = can.map(results, function (result) {
        return self.make_result(result.instance, [result], binding);
      });
      self.insert_results(binding, newResults);
    },
    init_source_listeners: function (binding, sourceBinding) {
      var self = this;

      self.insert_from_source_binding(binding, sourceBinding.list);

      sourceBinding.list.bind('add', function (ev, results) {
        self.insert_from_source_binding(binding, results);
      });

      sourceBinding.list.bind('remove', function (ev, results) {
        can.each(results, function (result) {
          self.remove_instance(binding, result.instance, result);
        });
      });
    },
    _refresh_stubs: function (binding) {
      var deferreds = [];

      can.each(binding.source_bindings, function (sourceBinding) {
        deferreds.push(sourceBinding.refresh_stubs());
      });

      return $.when.apply($, deferreds);
    }
  });
})(window.GGRC, window.can);
