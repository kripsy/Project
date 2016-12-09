# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from behave import then, when
from tests.ggrc.behave.utils import (
    get_resource, get_service_endpoint_url_for_type, handle_get_resource_and_name_it,
    check_for_resource_in_collection,
    )

@when('Querying "{resource_type}" with "{querystring}"')
def query_resource_collection(context, resource_type, querystring):
  url = '{0}?{1}'.format(
      get_service_endpoint_url_for_type(context, resource_type),
      querystring)
  handle_get_resource_and_name_it(context, url, 'queryresultcollection')

@when('Querying "{resource_type}" with bad argument "{querystring}"')
def query_with_bad_argument(context, resource_type, querystring):
  url = '{0}?{1}'.format(
      get_service_endpoint_url_for_type(context, resource_type),
      querystring)
  context._response = get_resource(context, url)

@when('Querying "{resource_type}" with expression "{property_path}" equals literal "{value}"')
def query_resource_collection_with_literal(
    context, resource_type, property_path, value):
  value = eval(value)
  query_resource_collection(
      context, resource_type, '{0}={1}'.format(property_path, value))

@then('"{resource_name}" is in query result')
def check_resource_in_queryresult(context, resource_name):
  check_for_resource_in_collection(
      context, 'queryresultcollection', resource_name, True)

@then('"{resource_name}" is not in query result')
def check_resource_not_in_queryresult(context, resource_name):
  check_for_resource_in_collection(
      context, 'queryresultcollection', resource_name, False)

@then('query result selfLink query string is "{expected_querystring}"')
def check_query_selfLink(context, expected_querystring):
  queryresult = context.queryresultcollection
  root = queryresult.keys()[0]
  selfLink = queryresult[root]['selfLink']
  idx = selfLink.find('?')
  assert selfLink[idx+1:] == expected_querystring, \
      'Expected to find query string {0}, found {1}'.format(
          expected_querystring, selfLink[idx+1:])
