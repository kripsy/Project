# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

scope = "Workflow Implied"
description = """
  """
permissions = {
    "read": [
        "Workflow",
        "WorkflowPerson",
        "TaskGroup",
        "TaskGroupObject",
        "TaskGroupTask",
        "Cycle",
        "CycleTaskGroup",
        "CycleTaskGroupObject",
        "CycleTaskGroupObjectTask",
        "CycleTaskEntry",
        "UserRole",
        "Context",
        "Document",
        "ObjectDocument",
        "ObjectFolder",
        "ObjectFile",
    ],
    "create": [
        "Workflow",
    ],
    "update": [
    ],
    "delete": [
    ],
    "view_object_page": [
        "Workflow",
    ],
}
