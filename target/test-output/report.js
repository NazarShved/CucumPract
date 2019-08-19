$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cybertekTraining.feature");
formatter.feature({
  "line": 1,
  "name": "CybertekTraining App Database and UI data verification",
  "description": "",
  "id": "cybertektraining-app-database-and-ui-data-verification",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4937305751,
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
  "name": "UI data and Database data must match",
  "keyword": "Then "
});
formatter.match({
  "location": "CybertekTraining_Steps.user_is_on_CybertekTraining_page()"
});
formatter.result({
  "duration": 9096155685,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Students_button()"
});
formatter.result({
  "duration": 254170278,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Add_Student_button()"
});
formatter.result({
  "duration": 997583937,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_enters_all_the_student_information_into_required_boxes()"
});
formatter.result({
  "duration": 2255685714,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_enters_all_the_company_information_into_required_boxes()"
});
formatter.result({
  "duration": 967136411,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 83396820,
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
  "duration": 2290876948,
  "status": "passed"
});
formatter.match({
  "location": "CybertekTraining_Steps.ui_data_and_Database_data_must_match()"
});
formatter.result({
  "duration": 2598552,
  "status": "passed"
});
formatter.after({
  "duration": 649942374,
  "status": "passed"
});
});