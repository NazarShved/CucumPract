@Smoke

Feature: Creating new vendor account under Vendors functionality.

  Background: user is logged in and on purchases module
    Given go to odoo, log in and go to purcases

  Scenario: Create a new vendor account
    Given User is on Odoo Purchases/Vendor Bills module
    When User clicks create button
    And User types name
    When User clicks create button on the buttom of the page
    And User fills out form to create a new vendors account
    And User clicks Save&Close button
    Then New contact info appears on the screen.