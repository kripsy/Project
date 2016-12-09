# Copyright (C) 2016 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

Feature: Collection filtering via query parameters

  Background:
    Given service description

  Scenario Outline: A single query parameter supplied to a collection finds matching resources
    Given a new "<resource_type>" named "resource1"
    And a new "<resource_type>" named "resource2"
    And a new "<resource_type>" named "resource3"
    And "resource1" property "<property_name>" is "<match_value1>"
    And "resource2" property "<property_name>" is "<match_value2>"
    And "resource3" property "<property_name>" is "<match_value3>"
    And "resource1" is POSTed to its collection
    And "resource2" is POSTed to its collection
    And "resource3" is POSTed to its collection
    When Querying "<resource_type>" with "<property_name>=<match_value1>"
    And GET of the resource "resource1"
    And GET of the resource "resource2"
    And GET of the resource "resource3"
    Then query result selfLink query string is "<property_name>=<match_value1>"
    And "resource1" is in query result
    And "resource2" is not in query result
    And "resource3" is not in query result
    When Querying "<resource_type>" with "<property_name>=<match_value2>"
    Then query result selfLink query string is "<property_name>=<match_value2>"
    And "resource1" is not in query result
    And "resource2" is in query result
    And "resource3" is not in query result
    When Querying "<resource_type>" with "<property_name>=<nomatch_value>"
    Then query result selfLink query string is "<property_name>=<nomatch_value>"
    And "resource1" is not in query result
    And "resource2" is not in query result
    And "resource3" is not in query result

  Examples: Resources
      | resource_type    | property_name | match_value1 | match_value2 | match_value3 | nomatch_value       |
      | ControlCategory  | name          | category1    | category2    | category3    | none_match          |
      | ControlAssertion | name          | assertion1   | assertion2   | assertion3   | 5                   |
      | Help             | slug          | foo          | bar          | baz          | never               |
      | Program          | slug          | pgm1         | pgm2         | pgm3         | no_such_pgm         |
      #| Audit            | start_date    | 2013-06-03T00:00:00 | 2013-06-02T00:00:00 | 2013-06-01T00:00:00 | 2013-05-31T00:00:00 |

  Scenario: A single boolean query parameter supplied to a collection finds matching resources
    Given a new "ControlCategory" named "resource1"
    And a new "ControlCategory" named "resource2"
    And "resource1" property "required" is literal "True"
    And "resource2" property "required" is literal "False"
    And "resource1" is POSTed to its collection
    And "resource2" is POSTed to its collection
    When Querying "ControlCategory" with "required=True"
    And GET of the resource "resource1"
    And GET of the resource "resource2"
    Then query result selfLink query string is "required=True"
    And "resource1" is in query result
    And "resource2" is not in query result
    When Querying "ControlCategory" with "required=False"
    Then query result selfLink query string is "required=False"
    And "resource1" is not in query result
    And "resource2" is in query result

  @wip
  Scenario: An invalid boolean query parameter supplied to a collection receives 400
    When Querying "ControlCategory" with bad argument "required=random"
    Then a "400" status code is received

  @wip
  Scenario Outline: An invalid query parameter is supplied to a collection receives 400
    When Querying "<resource_type>" with bad argument "<querystring>"
    Then a "400" status code is received

  Examples:
      | resource_type   | querystring          |
      | ControlCategory | _update_attrs=foobar |
      | ControlCategory | foobar=baz           |

  @wip
  Scenario Outline: Query parameters can be property paths
    Given a new "<resource_type2>" named "resource2_1"
    And a new "<resource_type2>" named "resource2_2"
    And "resource2_1" property "<target_property_name>" is literal "<match_value1>"
    And "resource2_2" property "<target_property_name>" is literal "<match_value2>"
    And "resource2_1" is POSTed to its collection
    And "resource2_2" is POSTed to its collection
    And a new "<resource_type1>" named "resource1_1"
    And a new "<resource_type1>" named "resource1_2"
    And "resource1_1" link property "<link_property_name>" is "resource2_1"
    And "resource1_2" link property "<link_property_name>" is "resource2_2"
    And "resource1_1" is POSTed to its collection
    And "resource1_2" is POSTed to its collection
    When Querying "<resource_type1>" with expression "<link_property_name>.<target_property_name>" equals literal "<match_value1>"
    Then "resource1_1" is in query result
    And "resource1_2" is not in query result
    When Querying "<resource_type1>" with expression "<link_property_name>.<target_property_name>" equals literal "<match_value2>"
    Then "resource1_1" is not in query result
    And "resource1_2" is in query result

  Examples:
      | resource_type1 | link_property_name | resource_type2 | target_property_name | match_value1       | match_value2 |
      | Section        | directive          | Policy         | title                | 'foo'              | 'bar'        |
      | Control        | directive          | Policy         | kind                 | 'Company Policy'   | 'Org Group Policy' |

  Scenario: Query for controls related to a program
    Given a new "Program" named "program"
    And "program" is POSTed to its collection
    And a new "Contract" named "directive"
    And "program" is added to links property "programs" of "directive"
    And "directive" is POSTed to its collection
    And a new "Control" named "control"
    And "control" link property "directive" is "directive"
    And "control" is POSTed to its collection
    When Querying "Control" with expression "directive.program_directives.program_id" equals literal "context.program.get('id')"
    Then "control" is in query result
    When Querying "Control" with expression "directive.program_directives.program_id" equals literal "context.program.get('id') + 1"
    Then "control" is not in query result

  Scenario: Query can use both a property path and an __in suffix to supply a comma separated list of values
    Given a new "Contract" named "directive"
    And "directive" property "kind" is "Contract"
    And "directive" is POSTed to its collection
    And a new "Control" named "control"
    And "control" link property "directive" is "directive"
    And "control" is POSTed to its collection
    When Querying "Control" with "directive.kind__in=bar,Contract"
    Then query result selfLink query string is "directive.kind__in=bar,Contract"
    And "control" is in query result
    When Querying "Control" with "directive.kind__in=bar,baz"
    Then query result selfLink query string is "directive.kind__in=bar,baz"
    And "control" is not in query result

  Scenario: Property link objects can be included with __include
    Given a new "Contract" named "directive"
    And "directive" property "kind" is "Contract"
    And "directive" is POSTed to its collection
    And a new "Program" named "program"
    And "directive" is added to links property "directives" of "program"
    And "program" is POSTed to its collection
    When Querying "Program" with "program_directives.directive.kind=Contract&__include=directives"
    Then query result selfLink query string is "program_directives.directive.kind=Contract&__include=directives"
    And "program" is in query result
    And evaluate "context.queryresultcollection['programs_collection']['programs'][0]['directives'][0]['kind'] == 'Contract'"
