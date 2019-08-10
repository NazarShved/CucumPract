@Smoke
Feature: Search by PO functionality verification


  Background: user is logged in and on purchases module
    Given go to odoo, log in and go to purcases


  Scenario: search by right PO number

    When user enters a "PO" number
    Then User should see receipt by "PO" number

    Scenario: search by wrong PO number

      When user enters a word "<string>" into a search box
      Then User should see message that could not found receipt
      



