# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from blinker import Namespace

class Signals():
  signals = Namespace()
  status_change = signals.signal(
      'Status Changed',
      """
    This is used to signal any listeners of any changes in model object status
    attribute
    """)

  workflow_cycle_start = signals.signal(
      'Workflow Cycle Started ',
      """
    This is used to signal any listeners of any workflow cycle start
    attribute
    """)
