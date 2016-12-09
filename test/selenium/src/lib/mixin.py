# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from lib import meta


class MetaTestDecorator(meta.RequireDocs, meta.DecorateFlakyTests):
  """Composition of multiple metaclasses"""
