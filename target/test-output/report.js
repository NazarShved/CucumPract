$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cybertekTraining.feature");
formatter.feature({
  "line": 1,
  "name": "CybertekTraining App Database and UI data verification",
  "description": "",
  "id": "cybertektraining-app-database-and-ui-data-verification",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12927946501,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Student data UI and Database verification",
  "description": "",
  "id": "cybertektraining-app-database-and-ui-data-verification;student-data-ui-and-database-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@project"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on CybertekTraining page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Students button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Add Student button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters all the student information into required boxes",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters all the company information into required boxes",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User query database with sql \"select first_name, last_name from student where first_name \u003d \u0027David\u0027\";",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "UI data and Database data must contain \"David\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CybertekTraining_Steps.user_is_on_CybertekTraining_page()"
});
formatter.result({
  "duration": 26213550600,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Students_button()"
});
formatter.result({
  "duration": 313623301,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Add_Student_button()"
});
formatter.result({
  "duration": 723165600,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_enters_all_the_student_information_into_required_boxes()"
});
formatter.result({
  "duration": 4073780499,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_enters_all_the_company_information_into_required_boxes()"
});
formatter.result({
  "duration": 1884195500,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 156839500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select first_name, last_name from student where first_name \u003d \u0027David\u0027",
      "offset": 30
    }
  ],
  "location": "CybertekTraining_Steps.user_query_database_with_sql(String)"
});
formatter.result({
  "duration": 5026378700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 40
    }
  ],
  "location": "CybertekTraining_Steps.ui_data_and_Database_data_must_contain(String)"
});
formatter.result({
  "duration": 6391200,
  "status": "passed"
});
formatter.after({
  "duration": 730922599,
  "status": "passed"
});
formatter.before({
  "duration": 9899934300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Teacher data UI and Database verification",
  "description": "",
  "id": "cybertektraining-app-database-and-ui-data-verification;teacher-data-ui-and-database-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@project"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on CybertekTraining page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Teachers button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on Add Teacher button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters all the teacher information into required boxes",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User query teacher database with sql \"select first_name, last_name from teacher where first_name \u003d \u0027Joe\u0027\";",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "UI data and Database data must contain \"Joe\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CybertekTraining_Steps.user_is_on_CybertekTraining_page()"
});
formatter.result({
  "duration": 25405841900,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Teachers_button()"
});
formatter.result({
  "duration": 291887200,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Add_Teacher_button()"
});
formatter.result({
  "duration": 3763383199,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_enters_all_the_teacher_information_into_required_boxes()"
});
formatter.result({
  "duration": 3548685101,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 158409500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select first_name, last_name from teacher where first_name \u003d \u0027Joe\u0027",
      "offset": 38
    }
  ],
  "location": "CybertekTraining_Steps.user_query_teacher_database_with_sql(String)"
});
formatter.result({
  "duration": 686969600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe",
      "offset": 40
    }
  ],
  "location": "CybertekTraining_Steps.ui_data_and_Database_data_must_contain(String)"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.after({
  "duration": 730351401,
  "status": "passed"
});
});