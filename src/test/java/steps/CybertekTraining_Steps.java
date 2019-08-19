package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.junit.Assert;
import org.openqa.selenium.By;
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
        $x("//input[@type='text']").sendKeys("David");
        $x("(//input[@type='text'])[5]").sendKeys("Brown");
        $x("(//input[@type='text'])[2]").sendKeys("michael123@gmail.com");
        $x("(//input[@type='text'])[6]").sendKeys("02/23/2019");
        $x("(//input[@type='password'])[1]").sendKeys("mb123");
        $x("(//input[@type='password'])[2]").sendKeys("mb123");
        $x("(//input[@type='text'])[3]").sendKeys("Java");
        $x("(//input[@type='number'])[1]").sendKeys("7731234567");
        new Select($x("(//select)[1]")).selectByVisibleText("Male");
        $x("(//input[@type='text'])[7]").sendKeys("12345");
        $x("(//input[@type='text'])[4]").sendKeys("12/12/1990");
        $x("(//input[@type='text'])[8]").sendKeys("Automation");
        new Select($x("(//select)[2]")).selectByVisibleText("11");
        $x("(//input[@type='text'])[9]").sendKeys("Computer Science");
        $(By.id("message")).sendKeys("123 West Road");

    }

    @When("^User enters all the company information into required boxes$")
    public void user_enters_all_the_company_information_into_required_boxes() {
        $x("(//input[@type='text'])[10]").sendKeys("Cybertek");
        $x("(//input[@type='text'])[14]").sendKeys("Instructor");
        $x("(//input[@type='text'])[11]").sendKeys("09/15/2019");
        $x("(//input[@type='text'])[15]").sendKeys("Chicago");
        $x("(//input[@type='text'])[12]").sendKeys("123 Main St");
        $x("(//input[@type='number'])[2]").sendKeys("61166");
        $x("(//input[@type='text'])[13]").sendKeys("Illinois");
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
        $x("//input[@type='text']").sendKeys("Joe");
        $x("(//input[@type='text'])[5]").sendKeys("Bells");
        $x("(//input[@type='text'])[2]").sendKeys("joel123@gmail.com");
        $x("(//input[@type='text'])[6]").sendKeys("03/23/2019");
        $x("(//input[@type='password'])[1]").sendKeys("jb123");
        $x("(//input[@type='password'])[2]").sendKeys("jb123");
        $x("(//input[@type='text'])[3]").sendKeys("Java");
        $x("(//input[@type='number'])[1]").sendKeys("7731234567");
        new Select($x("(//select)[1]")).selectByVisibleText("Male");
        new Select($x("(//select)[3]")).selectByVisibleText("Science");
        $x("(//input[@type='text'])[4]").sendKeys("12/23/1990");
        $x("(//input[@type='text'])[7]").clear();
        $x("(//input[@type='text'])[7]").sendKeys("50000");
        new Select($x("(//select)[2]")).selectByVisibleText("11");
        $x("(//input[@type='text'])[8]").sendKeys("Computer Science");
        $(By.id("message")).sendKeys("123 West Road");

    }

    @When("^User query teacher database with sql \"([^\"]*)\";$")
    public void user_query_teacher_database_with_sql(String sql) {


    }

}
