# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from ggrc import db
from ggrc.models.deferred import deferred
from ggrc.models.mixins import Base, Described


class Option(Described, Base, db.Model):
  __tablename__ = 'options'

  role = db.Column(db.String)
  title = deferred(db.Column(db.String), 'Option')
  required = deferred(db.Column(db.Boolean), 'Option')

  @staticmethod
  def _extra_table_args(cls):
    return (
        db.Index('ix_options_role', 'role'),
    )

  _publish_attrs = [
      'role',
      'title',
      'required',
  ]
  _sanitize_html = [
      'title',
  ]
