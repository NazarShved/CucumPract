Feature: Search functionality verification

  Background: user is logged in and on purchases module
    Given go to odoo, log in and go to purcases

Scenario: search products by name
  Given user is on odoo purchases/products module
  When user enters a word into a search box
 # And presses Enter key or clicks on search button
  Then system should display results that contain the word user searched for
  And a small tab with the word appears in the search box

  Scenario: display/hide advanced search option
    Given user clicks on the search icon
    Then advanced search options should display
    When user clicks on the search icon again
    Then advanced search options should disapear