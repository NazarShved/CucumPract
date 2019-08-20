package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import utilities.Config;
import utilities.DBUtility;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CybertekTraining_Steps extends BaseTest {

//    private Map<String, String > UIStudentData = new HashMap<>();
//    private Map<String, Object > DBStudentData = new HashMap<>();

    List<Map<String, Object>> dbDataList;

    @Given("^User is on CybertekTraining page$")
    public void user_is_on_CybertekTraining_page(){
        open("http://cybertektraining.com/index.html");
    }

    @When("^User clicks on Students button$")
    public void user_clicks_on_Students_button(){
        $(By.linkText("Students")).click();
    }

    @When("^User clicks on Add Student button$")
    public void user_clicks_on_Add_Student_button(){
        $(By.linkText("Add Student")).click();
    }

    @When("^User enters all the student information into required boxes$")
    public void user_enters_all_the_student_information_into_required_boxes() {
        inputToAfield(byXpath("//input[@type='text']"), "David");
        inputToAfield(byXpath("(//input[@type='text'])[5]"), "Brown");
        inputToAfield(byXpath("(//input[@type='text'])[2]"), "michael123@gmail.com");
        inputToAfield(byXpath("(//input[@type='text'])[6]"), "02/23/2019");
        inputToAfield(byXpath("(//input[@type='password'])[1]"), "mb123");
        inputToAfield(byXpath("(//input[@type='password'])[2]"), "mb123");
        inputToAfield(byXpath("(//input[@type='text'])[3]"),"Java");
        inputToAfield(byXpath("(//input[@type='number'])[1]"), "7731234567");
        new Select($x("(//select)[1]")).selectByVisibleText("Male");
        inputToAfield(byXpath("(//input[@type='text'])[7]"), "12345");
        inputToAfield(byXpath("(//input[@type='text'])[4]"), "12/12/1990");
        $x("(//input[@type='text'])[8]").sendKeys("Automation");
        new Select($x("(//select)[2]")).selectByVisibleText("11");
        inputToAfield(byXpath("(//input[@type='text'])[9]"), "Computer Science");
        inputToAfield(byCss("#message"), "123 West Road");
    }

    @When("^User enters all the company information into required boxes$")
    public void user_enters_all_the_company_information_into_required_boxes() {
        inputToAfield(byXpath("(//input[@type='text'])[10]"), "Cybertek");
        inputToAfield(byXpath("(//input[@type='text'])[14]"), "Instructor");
        inputToAfield(byXpath("(//input[@type='text'])[11]"), "09/15/2019");
        inputToAfield(byXpath("(//input[@type='text'])[15]"),"Chicago" );
        inputToAfield(byXpath("(//input[@type='text'])[12]"), "123 Main St");
        inputToAfield(byXpath("(//input[@type='number'])[2]"), "61166");
        inputToAfield(byXpath("(//input[@type='text'])[13]"), "Illinois");
    }


    @When("^User clicks on Submit button$")
    public void user_clicks_on_Submit_button() throws InterruptedException {
        $x("//button[@type='submit']").click();
    }

    @When("^User query database with sql \"([^\"]*)\";$")
    public void user_query_database_with_sql(String sql) throws SQLException {
        DBUtility.openConnection(Config.getProperty("dbType"));
        dbDataList = DBUtility.executeSQLquery(sql);
        DBUtility.closeConnection();
    }

    @Then("^UI data and Database data must match$")
    public void ui_data_and_Database_data_must_match(){
        Assert.assertEquals(dbDataList.get(0).get("FIRST_NAME"), "David");
    }

    @Then("^UI data and Database data must contain \"([^\"]*)\"$")
    public void ui_data_and_Database_data_must_contain(String name) {
        Assert.assertEquals(dbDataList.get(0).get("FIRST_NAME"), name);
    }

    // Teacher steps

    @When("^User clicks on Teachers button$")
    public void user_clicks_on_Teachers_button(){
        $(By.linkText("Teachers")).click();
    }

    @When("^User clicks on Add Teacher button$")
    public void user_clicks_on_Add_Teacher_button(){
        $(By.linkText("Add Teacher")).click();
    }

    @When("^User enters all the teacher information into required boxes$")
    public void user_enters_all_the_teacher_information_into_required_boxes() {

        inputToAfield(byXpath("//input[@type='text']"), "Joe");
        inputToAfield(byXpath("(//input[@type='text'])[5]"), "Bells");
        inputToAfield(byXpath("(//input[@type='text'])[2]"), "joel123@gmail.com");
        inputToAfield(byXpath("(//input[@type='text'])[6]"), "03/23/2019");
        inputToAfield(byXpath("(//input[@type='password'])[1]"), "jb123");
        inputToAfield(byXpath("(//input[@type='password'])[2]"), "jb123");
        inputToAfield(byXpath("(//input[@type='text'])[3]"), "Java");
        inputToAfield(byXpath("(//input[@type='number'])[1]"), "7731234567");
        new Select($x("(//select)[1]")).selectByVisibleText("Male");
        new Select($x("(//select)[3]")).selectByVisibleText("Science");
        inputToAfield(byXpath("(//input[@type='text'])[4]"), "12/23/1990");
        new Select($x("(//select)[2]")).selectByVisibleText("11");
        inputToAfield(byXpath("(//input[@type='text'])[8]"), "Computer Science");
        inputToAfield(byCss("#message"), "123 West Road");
    }

    @When("^User query teacher database with sql \"([^\"]*)\";$")
    public void user_query_teacher_database_with_sql(String sql) throws SQLException {
        DBUtility.openConnection(Config.getProperty("dbType"));
        dbDataList = DBUtility.executeSQLquery(sql);
        DBUtility.closeConnection();
    }

}
