package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

public class OdooPurchasesSearchByPOSteps extends  BaseTest {

    @When("^user enters a \"([^\"]*)\" number$")
    public void user_enters_a_number(String arg1) throws Throwable {
        purchases.search(config.getProperty("PONumber"));
        log.info("User entered a PO number to a search box");
    }

    @Then("^User should see receipt by \"([^\"]*)\" number$")
    public void user_should_see_receipt_by_number(String arg1) throws Throwable {
        String actualPO = $x("(//td[@class='o_data_cell o_required_modifier'])[1]").getText();

        String expectedPO = config.getProperty("PONumber");

        Assert.assertEquals("No such PO number in the system", actualPO, expectedPO);
        log.info("Search by PO number passed");
    }

    @Then("^User should see message that could not found receipt$")
    public void user_should_see_message_that_could_not_found_receipt() throws Throwable {
        String text = (String)((JavascriptExecutor)getWebDriver()).executeScript("return document.getElementsByClassName(\"oe_view_nocontent\")[0].textContent");
        boolean expectedResult = text.contains("quotation is converted into a purchase order.");

        Assert.assertTrue("Text is changed", expectedResult);
        log.info("Message could not found appeared");
    }
}