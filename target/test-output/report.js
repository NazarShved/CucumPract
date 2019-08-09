$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("odooPurchasesSearch.feature");
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
  "duration": 11260570970,
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
  "duration": 77646196145,
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
  "duration": 5889704995,
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
  "duration": 3724772894,
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
  "duration": 2018955,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.OdooPurchasesSearchSteps.system_should_display_results_that_contain_the_word(OdooPurchasesSearchSteps.java:36)\r\n\tat ✽.Then system should display results that contain the word \"apple\"(odooPurchasesSearch.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1135414982,
  "status": "passed"
});
formatter.before({
  "duration": 4863204550,
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
  "duration": 59873721848,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to no longer be visible: By.cssSelector: .o_loading (tried for 7 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BEIVEA1\u0027, ip: \u0027192.168.1.166\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\Shvednazar994\\AppD...}, goog:chromeOptions: {debuggerAddress: localhost:50222}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a09c3e89161394efd493ea652672f046\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages.PurchasesPage.goToPurchases(PurchasesPage.java:65)\r\n\tat steps.OdooPurchasesSearchSteps.go_to_odoo_log_in_and_go_to_purcases(OdooPurchasesSearchSteps.java:16)\r\n\tat ✽.Given go to odoo, log in and go to purcases(odooPurchasesSearch.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.advanced_search_options_should_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.user_clicks_on_the_search_icon_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.advanced_search_options_should_disappear()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 964851531,
  "status": "passed"
});
});