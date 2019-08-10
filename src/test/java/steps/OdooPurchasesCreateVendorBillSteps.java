package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utilities.Conditions;

public class OdooPurchasesCreateVendorBillSteps extends BaseTest{

    @Given("^User is on odoo Purchases/Vendor Bills module$")
    public void user_is_on_odoo_Purchases_Vendor_Bills_module(){
        purchases.switchTab("Vendor Bills");
        log.info("User in Vendor bills module");
    }

    @When("^User clicks on Create button$")
    public void user_clicks_on_Create_button(){
        $x(purchases.createButton).click();
    }

    @When("^User fills out the form to create a new vendor bill$")
    public void user_fills_out_the_form_to_create_a_new_vendor_bill() {
        inputToAfield(byXpath("(//input[@class='o_input ui-autocomplete-input'])[1]"), "ABC", byXpath("//*[@class='ui-menu-item ui-state-focus']"));
        purchases.pickADateCalendar(byXpath("//input[@name='date_invoice']"),"September", 9);
        purchases.pickADateCalendar(byXpath("//input[@name='date_due']"),"September", 15);
        log.info("user picked a date");
    }

    @When("^User clicks on Add an item button$")
    public void user_clicks_on_Add_an_item_button(){
        $x("(//*[@class = 'o_field_x2many_list_row_add'])[1]/a").click();
        log.info("Add an item button clicked");
    }

    @When("^User enters \"([^\"]*)\" into item name field and clicks Enter$")
    public void user_enters_into_item_name_field_and_clicks_Enter(String itemName) {
        inputToAfield(byXpath("(//input[@class='o_input ui-autocomplete-input'])[4]"), itemName,  byXpath("//*[@class='ui-menu-item ui-state-focus']"));
        log.info("Entered new item name and pressed enter");
    }

    @When("^User clicks on Save button$")
    public void user_clicks_on_Save_button(){
        $x(purchases.saveButton).click();
        log.info("Save button clicked");
    }

    @Then("^\"([^\"]*)\" appears in the created bill$")
    public void appears_in_the_created_bill(String itemName){
        wait.until(ExpectedConditions.invisibilityOfElementLocated(byCss(".o_loading")));
        assertThat(Conditions.textToBePresentInElementLocatedIgnoreCase(byXpath("//td[@class='o_data_cell']"), itemName));
        log.info("Created item appeared in created bill");
    }
}
