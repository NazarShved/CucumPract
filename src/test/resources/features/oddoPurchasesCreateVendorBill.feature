@Smoke
  Feature: Creating a Vendor Bill

    Background: user is logged in and on purchases module
      Given go to odoo, log in and go to purcases

      Scenario: Create a new Vendor Bill
        Given User is on odoo Purchases/Vendor Bills module
        When User clicks on Create button
        And User fills out the form to create a new vendor bill
        And User clicks on Add an item button
        And User enters "ice cream" into item name field and clicks Enter
        When User clicks on Save button
        Then "ice cream" appears in the created bill