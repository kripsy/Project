# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

import logging
import os
import shutil

logger = logging.getLogger(__name__)


def create_directory(path):
  """
  Creates a directory if it doesn't already exist.
  """
  # Check if path is a file_path or a dir_path. Dir path is a string that
  # ends with os.sep
  if path[-1] != os.sep:
    path, file_name = os.path.split(path)

  if not os.path.exists(path):
    logger.info("Creating directory: %s", path)
    os.makedirs(path)


def get_unique_postfix(file_path, extension):
  """Add numeric postfix for file."""
  postfix = 0
  new_path = file_path + str(postfix) + extension

  while os.path.isfile(new_path):
    postfix += 1
    new_path = file_path + str(postfix) + extension

  return new_path


def delete_directory_contents(path):
  """Remove all files and sub-dir in provided path."""
  shutil.rmtree(path)
