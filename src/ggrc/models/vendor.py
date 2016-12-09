# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from ggrc import db
from .mixins import BusinessObject, Timeboxed, CustomAttributable
from .object_owner import Ownable
from .object_person import Personable
from .relationship import Relatable
from .track_object_state import HasObjectState, track_state_for_class


class Vendor(HasObjectState, CustomAttributable, Personable,
             Relatable, Timeboxed, Ownable, BusinessObject, db.Model):
  __tablename__ = 'vendors'

  _aliases = {
      "url": "Vendor URL",
      "reference_url": "Reference URL",
  }

track_state_for_class(Vendor)
