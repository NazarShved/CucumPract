package steps;

import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class OdooPurchasesSortByStatus extends BaseTest{
    @Given("^User is on incoming products module$")
    public void user_is_on_incoming_products_module() {
        purchases.switchTab("Incoming Products");
        log.info("User is in Incoming products module");
    }

    @When("^User clicks on Status tab$")
    public void user_clicks_on_Status_tab()  {
        purchases.switchToSortTab("Status");
        log.info("User clicks on sort by status");
    }

    @Then("^All results should be sorted by availability$")
    public void all_results_should_be_sorted_by_availability() {
        List<WebElement> statusValues = $$(By.xpath("//td[@class='o_data_cell o_readonly_modifier']"));
        //System.out.println(statusValues.size());
        int count = 0;
        for (int i = 1; i < statusValues.size(); i ++) {
            if(!statusValues.get(i).getText().equals(statusValues.get(i-1).getText())){
                count++;
            }

        }
        Assert.assertTrue(count == 1);
        log.info("All results are sorted by status");
    }

    @Then("^Every item should have avilability status$")
    public void every_item_should_have_avilability_status()  {
        List<WebElement> statusValues = $$(byXpath("//td[@class='o_data_cell o_readonly_modifier']"));
        int totalNumOfStatusValues = statusValues.size();
        //System.out.println("The total number of status values: " + totalNumOfStatusValues);
        int counter =0;
        for (WebElement statusValue : statusValues) {
            String statusText=statusValue.getText();
            counter++;
            Assert.assertTrue((statusText.equals("Available")||statusText.equals("Waiting Availability")) && (!statusText.isEmpty()));
        }
        //System.out.println("The number of status values found by counter: " + counter);
        Assert.assertEquals(totalNumOfStatusValues, counter);
    }
}
