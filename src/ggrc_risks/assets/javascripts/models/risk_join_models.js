/*
 * Copyright (C) 2016 Google Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */


(function(can) {

  can.Model.Join("CMS.Models.RiskObject", {
    root_object: "risk_object",
    root_collection: "risk_objects",
    join_keys: {
      "risk": CMS.Models.Risk,
      "object": can.Model.Cacheable,
    },
    attributes: {
      context: "CMS.Models.Context.stub",
      modified_by: "CMS.Models.Person.stub",
      risk: "CMS.Models.Risk.stub",
      object: "CMS.Models.get_stub",
    },
    findAll: "GET /api/risk_objects",
    create: "POST /api/risk_objects",
    destroy: "DELETE /api/risk_objects/{id}"
  }, {
  });

})(window.can);
