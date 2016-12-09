
# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

"""Resource state representation handlers for gGRC models. Builder modules will
produce specific resource state representations for gGRC models as well as
update/create gGRC model instances from resource state representations.
"""
from .json import *

class simple_property(property):
  pass
