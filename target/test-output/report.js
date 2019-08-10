$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OdooPurchasesSortByStatus.feature");
formatter.feature({
  "line": 2,
  "name": "Sort results by status",
  "description": "",
  "id": "sort-results-by-status",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 6522376800,
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
  "duration": 7499716679,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Sort items by status",
  "description": "",
  "id": "sort-results-by-status;sort-items-by-status",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on incoming products module",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Status tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "All results should be sorted by availability",
  "keyword": "Then "
});
formatter.match({
  "location": "OdooPurchasesSortByStatus.user_is_on_incoming_products_module()"
});
formatter.result({
  "duration": 1447327738,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSortByStatus.user_clicks_on_Status_tab()"
});
formatter.result({
  "duration": 902552969,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSortByStatus.all_results_should_be_sorted_by_availability()"
});
formatter.result({
  "duration": 2321051670,
  "status": "passed"
});
formatter.after({
  "duration": 727195011,
  "status": "passed"
});
formatter.before({
  "duration": 5001933425,
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
  "duration": 7960784524,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "All status values should be displayed",
  "description": "",
  "id": "sort-results-by-status;all-status-values-should-be-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on incoming products module",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Every item should have avilability status",
  "keyword": "Then "
});
formatter.match({
  "location": "OdooPurchasesSortByStatus.user_is_on_incoming_products_module()"
});
formatter.result({
  "duration": 1564364760,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSortByStatus.every_item_should_have_avilability_status()"
});
formatter.result({
  "duration": 1409543620,
  "status": "passed"
});
formatter.after({
  "duration": 723640776,
  "status": "passed"
});
formatter.uri("oddoPurchasesCreateVendorBill.feature");
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
  "duration": 3718405859,
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
  "duration": 6706641087,
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
  "duration": 1851374289,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_clicks_on_Create_button()"
});
formatter.result({
  "duration": 171256324,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_fills_out_the_form_to_create_a_new_vendor_bill()"
});
formatter.result({
  "duration": 2974433967,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_clicks_on_Add_an_item_button()"
});
formatter.result({
  "duration": 131506708,
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
  "duration": 1269374774,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 102207680,
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
  "duration": 3872712958,
  "status": "passed"
});
formatter.after({
  "duration": 760873219,
  "status": "passed"
});
formatter.uri("odoPurchasesSearchByPO.feature");
formatter.feature({
  "line": 2,
  "name": "Search by PO functionality verification",
  "description": "",
  "id": "search-by-po-functionality-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 4387923127,
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
  "duration": 6934467102,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "search by right PO number",
  "description": "",
  "id": "search-by-po-functionality-verification;search-by-right-po-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user enters a \"PO\" number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should see receipt by \"PO\" number",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "PO",
      "offset": 15
    }
  ],
  "location": "OdooPurchasesSearchByPOSteps.user_enters_a_number(String)"
});
formatter.result({
  "duration": 1591471632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PO",
      "offset": 28
    }
  ],
  "location": "OdooPurchasesSearchByPOSteps.user_should_see_receipt_by_number(String)"
});
formatter.result({
  "duration": 136267783,
  "status": "passed"
});
formatter.after({
  "duration": 832258567,
  "status": "passed"
});
formatter.before({
  "duration": 4182746969,
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
  "duration": 7285015377,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "search by wrong PO number",
  "description": "",
  "id": "search-by-po-functionality-verification;search-by-wrong-po-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user enters a word \"\u003cstring\u003e\" into a search box",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User should see message that could not found receipt",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cstring\u003e",
      "offset": 20
    }
  ],
  "location": "OdooPurchasesSearchSteps.user_enters_a_word_into_a_search_box(String)"
});
formatter.result({
  "duration": 1696339749,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchByPOSteps.user_should_see_message_that_could_not_found_receipt()"
});
formatter.result({
  "duration": 23312294,
  "status": "passed"
});
formatter.after({
  "duration": 821818669,
  "status": "passed"
});
formatter.uri("odooPurchasesCheckingKanbanAndVendorCompany.feature");
formatter.feature({
  "line": 3,
  "name": "Cheking Vendor module",
  "description": "",
  "id": "cheking-vendor-module",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 8458588732,
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
  "duration": 7261491821,
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
  "duration": 12809702365,
  "status": "passed"
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_goes_to_List_to_assert_it_s_list()"
});
formatter.result({
  "duration": 12935599958,
  "status": "passed"
});
formatter.after({
  "duration": 724458878,
  "status": "passed"
});
formatter.before({
  "duration": 4159255061,
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
  "duration": 7115417923,
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
  "duration": 2489803651,
  "status": "passed"
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_creates_a_company_leaving_name_empty_and_saves_it()"
});
formatter.result({
  "duration": 1175999866,
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
  "duration": 56774536,
  "status": "passed"
});
formatter.match({
  "location": "OdoPurchasesCreateVendorCompany.user_should_see_the_message_dissapeared()"
});
formatter.result({
  "duration": 3447621964,
  "status": "passed"
});
formatter.after({
  "duration": 797401315,
  "status": "passed"
});
formatter.uri("odooPurchasesCreateNewVendorProfile.feature");
formatter.feature({
  "line": 2,
  "name": "Create new vendor profile",
  "description": "",
  "id": "create-new-vendor-profile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 3903187179,
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
  "duration": 7079175071,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Creating new vendor profile",
  "description": "",
  "id": "create-new-vendor-profile;creating-new-vendor-profile",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is in vendors module",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Create Vendor button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User fills out the neede information",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Creates a note for profile",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message account is created should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorProfile.user_is_in_vendors_module()"
});
formatter.result({
  "duration": 2165952127,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorProfile.user_clicks_on_Create_Vendor_button()"
});
formatter.result({
  "duration": 132378694,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorProfile.user_fills_out_the_neede_information()"
});
formatter.result({
  "duration": 5189129283,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorProfile.creates_a_note_for_profile()"
});
formatter.result({
  "duration": 559121718,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateVendorBillSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 142293006,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorProfile.message_account_is_created_should_appear()"
});
formatter.result({
  "duration": 814551966,
  "status": "passed"
});
formatter.after({
  "duration": 736889508,
  "status": "passed"
});
formatter.uri("odooPurchasesCreateVendorAccount.feature");
formatter.feature({
  "line": 3,
  "name": "Creating new vendor account under Vendors functionality.",
  "description": "",
  "id": "creating-new-vendor-account-under-vendors-functionality.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 4140456658,
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
  "duration": 8626409709,
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
  "duration": 2501797645,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_clicks_create_button()"
});
formatter.result({
  "duration": 162333316,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_types_name()"
});
formatter.result({
  "duration": 3881921211,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_clicks_create_button_on_the_buttom_of_the_page()"
});
formatter.result({
  "duration": 164158118,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_fills_out_form_to_create_a_new_vendors_account()"
});
formatter.result({
  "duration": 2431368105,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.user_clicks_Save_Close_button()"
});
formatter.result({
  "duration": 213647990,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesCreateNewVendorAccount.new_contact_info_appears_on_the_screen()"
});
formatter.result({
  "duration": 155994196,
  "status": "passed"
});
formatter.after({
  "duration": 769237283,
  "status": "passed"
});
formatter.uri("odooPurchasesSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality verification",
  "description": "",
  "id": "search-functionality-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 3913464996,
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
  "duration": 7074498244,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "search products by name",
  "description": "",
  "id": "search-functionality-verification;search-products-by-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user is on odoo purchases/products module",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters a word \"apple\" into a search box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "system should display results that contain the word \"apple\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "a small tab with the word \"apple\" appears in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.user_is_on_odoo_purchases_products_module()"
});
formatter.result({
  "duration": 1868769557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 20
    }
  ],
  "location": "OdooPurchasesSearchSteps.user_enters_a_word_into_a_search_box(String)"
});
formatter.result({
  "duration": 1652503468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 53
    }
  ],
  "location": "OdooPurchasesSearchSteps.system_should_display_results_that_contain_the_word(String)"
});
formatter.result({
  "duration": 786918225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 27
    }
  ],
  "location": "OdooPurchasesSearchSteps.a_small_tab_with_the_word_appears_in_the_search_box(String)"
});
formatter.result({
  "duration": 37691744,
  "status": "passed"
});
formatter.after({
  "duration": 962173117,
  "status": "passed"
});
formatter.before({
  "duration": 4760212065,
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
  "duration": 6446926598,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "display/hide advanced search option",
  "description": "",
  "id": "search-functionality-verification;display/hide-advanced-search-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user clicks on the search icon",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "advanced search options should display",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on the search icon again",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "advanced search options should disappear",
  "keyword": "Then "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.user_clicks_on_the_search_icon()"
});
formatter.result({
  "duration": 789507244,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.advanced_search_options_should_display()"
});
formatter.result({
  "duration": 59119793,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.user_clicks_on_the_search_icon_again()"
});
formatter.result({
  "duration": 93024658,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.advanced_search_options_should_disappear()"
});
formatter.result({
  "duration": 39389104,
  "status": "passed"
});
formatter.after({
  "duration": 819259157,
  "status": "passed"
});
});