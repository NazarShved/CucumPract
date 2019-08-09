@Vusal

Feature: Cheking Vendor module

  Background: user is logged in and on purchases module
    Given go to odoo, log in and go to purcases

  Scenario: Check kanban List
    Given User goes to kanban to assert it's list
    Then user goes to List  to assert it's list

   Scenario: SearchingVendorCompany in Purchase module
     When User goes to Vendor module
     And User creates a company leaving name empty and saves it
     And User should see message "The following fields are invalid:"
     Then User should see the message dissapeared
