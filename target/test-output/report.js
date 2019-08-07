$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("odoPurchasesSearchByPO.feature");
formatter.feature({
  "line": 2,
  "name": "Search by PO functionality verification",
  "description": "",
  "id": "search-by-po-functionality-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@nurlan"
    }
  ]
});
formatter.before({
  "duration": 6776788673,
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
  "duration": 5048049270,
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
  "duration": 5819017172,
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
  "duration": 49646164,
  "status": "passed"
});
formatter.after({
  "duration": 80960527,
  "status": "passed"
});
formatter.before({
  "duration": 1076193607,
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
  "duration": 4946282839,
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
  "duration": 871199784,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchByPOSteps.user_should_see_message_that_could_not_found_receipt()"
});
formatter.result({
  "duration": 6303228,
  "status": "passed"
});
formatter.after({
  "duration": 82701033,
  "status": "passed"
});
});