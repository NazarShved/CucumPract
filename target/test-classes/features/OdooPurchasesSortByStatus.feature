@Smoke
Feature: Sort results by status

Background: user is logged in and on purchases module
Given go to odoo, log in and go to purcases

  Scenario: Sort items by status
    Given User is on incoming products module
    When User clicks on Status tab
    Then All results should be sorted by availability

    Scenario: All status values should be displayed
      Given User is on incoming products module
      Then Every item should have avilability status