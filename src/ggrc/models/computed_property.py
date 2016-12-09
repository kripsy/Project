# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

class computed_property(object):
  def __init__(self, get_func):
    self.get_func = get_func

  def __get__(self, instance, owner):
    if instance is None:
      return self
    return self.get_func(instance)
