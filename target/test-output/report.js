$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("odooPurchasesCheckingKanbanAndVendorCompany.feature");
formatter.feature({
  "line": 3,
  "name": "Cheking Vendor module",
  "description": "",
  "id": "cheking-vendor-module",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Vusal"
    }
  ]
});
formatter.before({
  "duration": 5757200838,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user is logged in and on purchases module",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "go to odoo, log in and go to purcases",
  "keyword": "Given "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.go_to_odoo_log_in_and_go_to_purcases()"
});
formatter.result({
  "duration": 7329427123,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Check kanban List",
  "description": "",
  "id": "cheking-vendor-module;check-kanban-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User goes to kanban to assert it\u0027s list",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user goes to List  to assert it\u0027s list",
  "keyword": "Then "
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_goes_to_kanban_to_assert_it_s_list()"
});
formatter.result({
  "duration": 12710721047,
  "status": "passed"
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_goes_to_List_to_assert_it_s_list()"
});
formatter.result({
  "duration": 12816537297,
  "status": "passed"
});
formatter.after({
  "duration": 645547969,
  "status": "passed"
});
formatter.before({
  "duration": 3399796946,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user is logged in and on purchases module",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "go to odoo, log in and go to purcases",
  "keyword": "Given "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.go_to_odoo_log_in_and_go_to_purcases()"
});
formatter.result({
  "duration": 6448462016,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "SearchingVendorCompany in Purchase module",
  "description": "",
  "id": "cheking-vendor-module;searchingvendorcompany-in-purchase-module",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User goes to Vendor module",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User creates a company leaving name empty and saves it",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see message \"The following fields are invalid:\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see the message dissapeared",
  "keyword": "Then "
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_goes_to_Vendor_module()"
});
formatter.result({
  "duration": 2264084307,
  "status": "passed"
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_creates_a_company_leaving_name_empty_and_saves_it()"
});
formatter.result({
  "duration": 925331857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The following fields are invalid:",
      "offset": 25
    }
  ],
  "location": "OdoPurchasesCreateVendorCompany.user_should_see_message(String)"
});
formatter.result({
  "duration": 42545423,
  "status": "passed"
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_should_see_the_message_dissapeared()"
});
formatter.result({
  "duration": 3317700989,
  "status": "passed"
});
formatter.after({
  "duration": 646978901,
  "status": "passed"
});
});