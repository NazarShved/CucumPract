Feature: CybertekTraining App Database and UI data verification

  @project
  Scenario: Student data UI and Database verification
    Given User is on CybertekTraining page
    When User clicks on Students button
    And User clicks on Add Student button
    And User enters all the student information into required boxes
    And User enters all the company information into required boxes
    And User clicks on Submit button
    And User query database with sql "select first_name, last_name from student where first_name = 'David'";
    Then UI data and Database data must contain "David"

  @project
  Scenario: Teacher data UI and Database verification
    Given User is on CybertekTraining page
    When User clicks on Teachers button
    And User clicks on Add Teacher button
    And User enters all the teacher information into required boxes
    And User clicks on Submit button
    And User query teacher database with sql "select first_name, last_name from teacher where first_name = 'Joe'";
    Then UI data and Database data must contain "Joe"