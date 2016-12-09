# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from behave import given, then
from tests.ggrc.behave.utils import Example, set_property

@given('nothing new')
def nothing_new(context):
  pass

@given(\
  '"{source_resource}" link property "{property_name}" is "{target_resource}"')
def set_link_property(
    context, source_resource, property_name, target_resource):
  source = getattr(context, source_resource)
  target = getattr(context, target_resource)
  set_property(
      source,
      property_name,
      {
        'id': target.get(u'id'),
        'href': target.get(u'selfLink'),
        'type': target.get(u'type')
      })

@given(\
    '"{target_resource}" is added to links property "{property_name}" of '\
    '"{source_resource}"')
def add_link_to_list(context, target_resource, property_name, source_resource):
  source = getattr(context, source_resource)
  target = getattr(context, target_resource)
  if isinstance(source, Example):
    links = source.value.get(property_name) or []
    links.append({'id': target.get(u'id')})
    source.value[property_name] = links
  else:
    links = getattr(source, property_name, [])
    links.append({'id': target.get(u'id')})
    setattr(source, property_name, links)

@given(\
  '"{source_resource}" polymorphic link property "{property_name}" is "{target_resource}"')
def set_polymorphic_link_property(
    context, source_resource, property_name, target_resource):
  source = getattr(context, source_resource)
  target = getattr(context, target_resource)
  set_property(
      source,
      property_name,
      {'id': target.get(u'id'), 'href': target.get(u'selfLink'), 'type': target.resource_type},
      )

@given(\
    '"{target_resource}" is added to polymorphic links property "{property_name}" of '\
    '"{source_resource}"')
def add_polymorphic_link_to_list(context, target_resource, property_name, source_resource):
  source = getattr(context, source_resource)
  target = getattr(context, target_resource)
  if isinstance(source, Example):
    links = source.value.get(property_name) or []
    links.append({'id': target.get(u'id'), 'type': target.resource_type})
    source.value[property_name] = links
  else:
    links = getattr(source, property_name, [])
    links.append({'id': target.get(u'id'), 'type': target.resource_type})
    setattr(source, property_name, links)

def get_property_from(context, property_path, resource):
  obj = getattr(context, resource)
  assert obj is not None, \
      'Expected to find a resource named {0} in the context!'.format(resource)
  property_path = property_path.split('.')
  traversed = []
  for p in property_path:
    traversed.append(p)
    if isinstance(obj, list):
      obj = obj[int(p)]
    else:
      obj = obj.get(unicode(p))
    assert obj is not None, \
        'Could not traverse entire property path, stopped at {0}.'.format(
            traversed)
  return obj

@then('the value of the "{property_path}" property of the "{resource}" is "{expected}"')
def check_property_path_value(context, property_path, resource, expected):
  actual = get_property_from(context, property_path, resource)
  assert expected == actual, 'Expected {}, found {}: {}'.format(expected, actual, getattr(context, resource))

@then('the "{property_path}" property of the "{resource}" is empty')
def check_empty_property(context, property_path, resource):
  obj = get_property_from(context, property_path, resource)
  assert type(obj) is list and len(obj) == 0

@then('the "{property_path}" property of the "{resource}" is not empty')
def check_not_empty_property(context, property_path, resource):
  obj = get_property_from(context, property_path, resource)
  assert type(obj) is list 
  assert len(obj) > 0

@then('"{target_resource}" is in the links property "{property_name}" of "{source_resource}"')
def check_link_is_in_list(
    context, target_resource, property_name, source_resource):
  check_link_present_in_list(
      context, target_resource, property_name, source_resource, expected=True)

@then('"{target_resource}" is not in the links property "{property_name}" of "{source_resource}"')
def check_link_is_not_in_list(
    context, target_resource, property_name, source_resource):
  check_link_present_in_list(
      context, target_resource, property_name, source_resource, expected=False)

def check_link_present_in_list(
    context, target_resource, property_name, source_resource, expected=True):
  source = getattr(context, source_resource)
  target = getattr(context, target_resource)
  links = source.get(unicode(property_name))
  rel_ids = set([o[u'id'] for o in links])
  if expected:
    assert target.get(u'id') in rel_ids, \
        'Expected to find {0} in links: {1}'.format(
            target.get(u'id'),
            rel_ids)
  else:
    assert target.get(u'id') not in rel_ids, \
        'Expected not to find {0} in links: {1}'.format(
            target.get(u'id'),
            rel_ids)

@then('the "{parent_property}" of "{child_resource}" is a link to "{parent_resource}"')
def check_link_to_parent(
    context, parent_property, child_resource, parent_resource):
  child = getattr(context, child_resource)
  parent = getattr(context, parent_resource)
  link = child.get(unicode(parent_property))
  assert link is not None, \
      'no {0} property was found in {1}'.format(parent_property, child_resource)
  assert parent.get(u'id') == link.get(u'id'), \
      'Expected to find link to parent, id={0}, instead found {1}'.format(
          parent.get(u'id'), link)

@when('"{resource_name}" property "{property_name}" is "{value}"')
def set_embedded_property_value_by_name(context, resource_name, property_name, value):
  resource = getattr(context, resource_name)
  resource.set_embedded_val(property_name, value)

@given('"{resource_name}" property "{property_name}" is "{value}"')
def set_property_value_by_name(context, resource_name, property_name, value):
  resource = getattr(context, resource_name)
  resource.set(property_name, value)

@given('"{resource_name}" property "{property_name}" is literal "{value}"')
def set_property_value_by_name(context, resource_name, property_name, value):
  resource = getattr(context, resource_name)
  resource.set(property_name, eval(value))

@then('the "{property_name}" property of "{resource_name}" is "{expected}"')
def check_property_value(context, property_name, resource_name, expected):
  resource = getattr(context, resource_name)
  actual = resource.get(property_name)
  assert expected == actual, 'Expected {}, found {}'.format(expected, actual)

@then ('the revisions for the latest event contains "{action}" and "{resource_type}"')
def check_latest_event(context, action, resource_type):
  resource = getattr(context, "events")
  revisions = [(revision['action'], revision['resource_type']) for revision in resource['events_collection']['events'][0]['revisions']]
  assert (action, resource_type) in revisions, 'Expected ({}, {}) to be in {}'.format(action, resource_type, revisions)

@then('evaluate "{expression}"')
def evaluate_expression(context, expression):
  assert eval(expression) == True
