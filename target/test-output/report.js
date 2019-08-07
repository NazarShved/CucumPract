$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("odooPurchasesCreateVendorAccount.feature");
formatter.feature({
  "line": 3,
  "name": "Creating new vendor account under Vendors functionality.",
  "description": "",
  "id": "creating-new-vendor-account-under-vendors-functionality.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Aigerim"
    }
  ]
});
formatter.before({
  "duration": 4342632657,
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
  "duration": 7669689326,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Create a new vendor account",
  "description": "",
  "id": "creating-new-vendor-account-under-vendors-functionality.;create-a-new-vendor-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on Odoo Purchases/Vendor Bills module",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks create button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User types name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks create button on the buttom of the page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User fills out form to create a new vendors account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks Save\u0026Close button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "New contact info appears on the screen.",
  "keyword": "Then "
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_is_on_Odoo_Purchases_Vendor_Bills_module()"
});
formatter.result({
  "duration": 4395125701,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_clicks_create_button()"
});
formatter.result({
  "duration": 149845477,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_types_name()"
});
formatter.result({
  "duration": 1605261239,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_clicks_create_button_on_the_buttom_of_the_page()"
});
formatter.result({
  "duration": 180275541,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_fills_out_form_to_create_a_new_vendors_account()"
});
formatter.result({
  "duration": 2281854508,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_clicks_Save_Close_button()"
});
formatter.result({
  "duration": 182366898,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.new_contact_info_appears_on_the_screen()"
});
formatter.result({
  "duration": 148598418,
  "status": "passed"
});
formatter.after({
  "duration": 216783854,
  "status": "passed"
});
});