package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utilities.Conditions;

public class OdoPurchasesCreateVendorCompany extends BaseTest{

    @Given("^User goes to kanban to assert it's list$")
    public void user_goes_to_kanban_to_assert_it_s_list() throws Throwable {
        purchases.resultsAsCanban();
        Assert.assertTrue($$(purchases.resultsInList).size()==0);
    }

    @Then("^user goes to List  to assert it's list$")
    public void user_goes_to_List_to_assert_it_s_list() throws Throwable {
        purchases.resultsAsList();
        Assert.assertTrue($$(purchases.resultsInCanban).size()==0);
    }

    @When("^User goes to Vendor module$")
    public void user_goes_to_Vendor_module() throws Throwable {
        purchases.switchTab("Vendors");
    }

    @Given("^User creates a company leaving name empty and saves it$")
    public void user_creates_a_company_leaving_name_empty_and_saves_it() throws Throwable { WebElement createButton = $x("//button[@class='btn btn-primary btn-sm o-kanban-button-new btn-default']");
        createButton.click();
        $(purchases.saveButton).click();
    }

    @Given("^User should see message \"([^\"]*)\"$")
    public void user_should_see_message(String arg1) throws Throwable {
        assertThat(Conditions.textToBePresentInElementLocatedIgnoreCase(byCss(".o_notification_title"),
                "The following fields are invalid:"));
    }

    @Then("^User should see the message dissapeared$")
    public void user_should_see_the_message_dissapeared() throws Throwable {
        assertThat(ExpectedConditions.invisibilityOfElementLocated(byCss(".o_notification_title")));
    }
}
