# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from ggrc import db
from ggrc.models.deferred import deferred
from ggrc.models.mixins import Titled, Slugged


class Help(Titled, Slugged, db.Model):
  __tablename__ = 'helps'
  _title_uniqueness = False

  content = deferred(db.Column(db.Text), 'Help')

  _fulltext_attrs = [
      'content',
  ]
  _publish_attrs = [
      'content',
  ]
  _sanitize_html = [
      'content',
  ]
