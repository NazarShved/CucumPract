$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("oddoPurchasesCreateVendorBill.feature");
formatter.feature({
  "line": 2,
  "name": "Creating a Vendor Bill",
  "description": "",
  "id": "creating-a-vendor-bill",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 5499647872,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user is logged in and on purchases module",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "go to odoo, log in and go to purcases",
  "keyword": "Given "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.go_to_odoo_log_in_and_go_to_purcases()"
});
formatter.result({
  "duration": 6944054847,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Create a new Vendor Bill",
  "description": "",
  "id": "creating-a-vendor-bill;create-a-new-vendor-bill",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on odoo Purchases/Vendor Bills module",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Create button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User fills out the form to create a new vendor bill",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Add an item button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"ice cream\" into item name field and clicks Enter",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Save button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "\"ice cream\" appears in the created bill",
  "keyword": "Then "
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_is_on_odoo_Purchases_Vendor_Bills_module()"
});
formatter.result({
  "duration": 1419741574,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_clicks_on_Create_button()"
});
formatter.result({
  "duration": 116787195,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_fills_out_the_form_to_create_a_new_vendor_bill()"
});
formatter.result({
  "duration": 2817897966,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_clicks_on_Add_an_item_button()"
});
formatter.result({
  "duration": 126912029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ice cream",
      "offset": 13
    }
  ],
  "location": "OdooPurchasesCreateVendorBillSteps.user_enters_into_item_name_field_and_clicks_Enter(String)"
});
formatter.result({
  "duration": 1268957331,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 120889871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ice cream",
      "offset": 1
    }
  ],
  "location": "OdooPurchasesCreateVendorBillSteps.appears_in_the_created_bill(String)"
});
formatter.result({
  "duration": 1798944747,
  "status": "passed"
});
formatter.after({
  "duration": 677411793,
  "status": "passed"
});
});