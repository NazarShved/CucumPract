@Smoke
Feature: Create new vendor profile

  Background: user is logged in and on purchases module
    Given go to odoo, log in and go to purcases

    Scenario: Creating new vendor profile
      Given User is in vendors module
      When  User clicks on Create Vendor button
      And User fills out the neede information
      And Creates a note for profile
      And User clicks on Save button
      Then Message account is created should appear